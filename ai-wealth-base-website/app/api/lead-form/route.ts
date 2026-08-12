import { NextResponse } from "next/server";

const GHL_WEBHOOK_URL = process.env.GHL_LEAD_WEBHOOK_URL ?? "";
const NOTIFY_EMAIL = process.env.LEAD_NOTIFY_EMAIL ?? "ranjan@scalerise.io";
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM =
  process.env.LEAD_NOTIFY_FROM ?? "AI Wealth Base <noreply@aiwealthbase.com>";

type LeadPayload = {
  name?: string;
  email?: string;
  source?: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function sendNotificationEmail(fields: {
  name: string;
  email: string;
  source: string;
}) {
  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set — skipping lead notification email.");
    return { sent: false as const, reason: "missing_api_key" };
  }

  const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:0;background:#0A0F1D;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
    <tr><td align="center">
      <table width="560" style="max-width:560px;background:#1E293B;border-radius:12px;overflow:hidden;">
        <tr>
          <td style="background:#00F5A0;padding:24px 32px;text-align:center;">
            <p style="margin:0;color:#0A0F1D;font-size:18px;font-weight:700;">AI Wealth Base</p>
            <p style="margin:8px 0 0;color:#0A0F1D;font-size:13px;">New checklist lead</p>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px;color:#fff;">
            <p style="margin:0 0 8px;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#00F5A0;">Name</p>
            <p style="margin:0 0 18px;font-size:16px;">${escapeHtml(fields.name)}</p>
            <p style="margin:0 0 8px;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#00F5A0;">Email</p>
            <p style="margin:0 0 18px;font-size:16px;">${escapeHtml(fields.email)}</p>
            <p style="margin:0 0 8px;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#00F5A0;">Source</p>
            <p style="margin:0;font-size:16px;">${escapeHtml(fields.source)}</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: RESEND_FROM,
      to: [NOTIFY_EMAIL],
      reply_to: fields.email,
      subject: `New AI Wealth Base lead — ${fields.name}`,
      html: htmlBody,
    }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    console.error("Resend lead email error:", res.status, JSON.stringify(data));
    return { sent: false as const, reason: "resend_error" };
  }

  return { sent: true as const };
}

export async function POST(request: Request) {
  let body: LeadPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const source = body.source?.trim() || "website";

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const nameParts = name.split(/\s+/);
  const payload = {
    name,
    firstName: nameParts[0] ?? name,
    lastName: nameParts.slice(1).join(" "),
    email,
    source,
    formSource: "AI Wealth Base — AI Tool Stack Checklist",
  };

  if (GHL_WEBHOOK_URL) {
    const ghlResponse = await fetch(GHL_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!ghlResponse.ok) {
      const errorText = await ghlResponse.text();
      console.error("GHL webhook error:", ghlResponse.status, errorText);
      return NextResponse.json(
        { error: "Failed to submit form. Please try again." },
        { status: 502 },
      );
    }
  } else {
    console.log("Lead captured (no GHL webhook configured):", JSON.stringify(payload));
  }

  try {
    await sendNotificationEmail({ name, email, source });
  } catch (err) {
    console.error("Lead notification email failed:", err);
  }

  return NextResponse.json({ success: true });
}

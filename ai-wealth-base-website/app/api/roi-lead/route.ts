import { NextResponse } from "next/server";

type RoiLeadPayload = {
  name?: string;
  email?: string;
  taskName?: string;
  hoursSavedPerYear?: number;
  dollarsSavedPerYear?: number;
};

export async function POST(request: Request) {
  let body: RoiLeadPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const taskName = body.taskName?.trim() ?? "";
  const hoursSavedPerYear = Number(body.hoursSavedPerYear) || 0;
  const dollarsSavedPerYear = Number(body.dollarsSavedPerYear) || 0;

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const payload = {
    name,
    email,
    taskName,
    hoursSavedPerYear,
    dollarsSavedPerYear,
    formSource: "AI Wealth Base — Automation ROI Calculator",
  };

  // Placeholder until CRM / email is wired up.
  console.log("ROI lead captured:", JSON.stringify(payload));

  return NextResponse.json({ success: true });
}

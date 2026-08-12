import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for AI Wealth Base (AIWealthBase.com).",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="August 13, 2026">
      <p>
        AI Wealth Base (&quot;we,&quot; &quot;us&quot;) operates AIWealthBase.com. This policy explains
        what information we collect and how we use it.
      </p>
      <h2>Information we collect</h2>
      <p>
        When you submit a form (such as the AI Tool Stack Checklist), we collect your name, email
        address, and the page/source of the submission. We may also collect basic analytics data
        such as pages visited, device type, and approximate location via analytics tools.
      </p>
      <h2>How we use information</h2>
      <ul>
        <li>To deliver the lead magnet and related educational emails</li>
        <li>To improve the website and content</li>
        <li>To respond to inquiries</li>
      </ul>
      <h2>Sharing</h2>
      <p>
        We may use email and CRM providers to store contacts and send messages. We do not sell your
        personal information. Affiliate partners are not given your email unless you opt in through
        their systems separately.
      </p>
      <h2>Cookies</h2>
      <p>
        We may use cookies or similar technologies for analytics and site performance. You can
        control cookies through your browser settings.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about privacy:{" "}
        <a href="mailto:hello@aiwealthbase.com">hello@aiwealthbase.com</a>
      </p>
    </LegalShell>
  );
}

function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-[14px] text-mint hover:underline">
          ← Home
        </Link>
        <h1 className="mt-4 text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-white">{title}</h1>
        <p className="mt-2 text-[13px] text-[rgba(255,255,255,0.45)]">Last updated: {updated}</p>
        <div className="prose-awb mt-8">{children}</div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for AI Wealth Base (AIWealthBase.com).",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-[14px] text-mint hover:underline">
          ← Home
        </Link>
        <h1 className="mt-4 text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-white">
          Terms of Service
        </h1>
        <p className="mt-2 text-[13px] text-[rgba(255,255,255,0.45)]">Last updated: August 13, 2026</p>
        <div className="prose-awb mt-8">
          <p>
            By using AIWealthBase.com, you agree to these terms. If you do not agree, please do not
            use the site.
          </p>
          <h2>Educational content only</h2>
          <p>
            Content on this site and related channels is for educational and informational purposes.
            It is not financial, legal, or investment advice. Results from tools or methods discussed
            are not guaranteed.
          </p>
          <h2>Accounts &amp; email</h2>
          <p>
            If you join our email list, you agree to receive occasional messages. You may unsubscribe
            at any time.
          </p>
          <h2>Intellectual property</h2>
          <p>
            Site content, branding, and materials are owned by AI Wealth Base unless otherwise noted.
            You may not republish content without permission.
          </p>
          <h2>Limitation of liability</h2>
          <p>
            We are not liable for losses arising from use of this site, third-party tools, or actions
            you take based on our content.
          </p>
          <h2>Contact</h2>
          <p>
            <a href="mailto:hello@aiwealthbase.com">hello@aiwealthbase.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}

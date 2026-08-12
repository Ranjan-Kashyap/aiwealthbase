import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Earnings and affiliate disclaimer for AI Wealth Base.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-[14px] text-mint hover:underline">
          ← Home
        </Link>
        <h1 className="mt-4 text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-white">Disclaimer</h1>
        <p className="mt-2 text-[13px] text-[rgba(255,255,255,0.45)]">Last updated: August 13, 2026</p>
        <div className="prose-awb mt-8">
          <h2>Earnings disclaimer</h2>
          <p>
            AI Wealth Base does not guarantee income, results, or business outcomes. Examples and
            experiments shown reflect specific tests under specific conditions. Your results will
            differ based on skill, effort, market, and execution.
          </p>
          <h2>No income promises</h2>
          <p>
            We do not make overnight-wealth claims. Titles and thumbnails are framed around real
            stakes, not guarantees. Always treat tool marketing with skepticism — including ours.
          </p>
          <h2>Affiliate disclosure</h2>
          <p>
            Some links on this website or in our videos may be affiliate links. If you purchase
            through those links, we may earn a commission at no extra cost to you. We only recommend
            tools we have tested or are actively testing. Affiliations never override an honest
            verdict.
          </p>
          <h2>Third-party tools</h2>
          <p>
            AI Wealth Base is not responsible for third-party software, pricing changes, outages, or
            data practices. Always review a vendor&apos;s own terms and privacy policy before
            subscribing.
          </p>
          <h2>AI-generated presenter</h2>
          <p>
            Our on-camera host may be an AI-generated avatar. This is disclosed as part of the brand.
            Editorial testing, analysis, and recommendations remain human-directed.
          </p>
        </div>
      </div>
    </section>
  );
}

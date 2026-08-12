import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "../components/LeadForm";

export const metadata: Metadata = {
  title: "Free AI Tool Stack Checklist",
  description:
    "Get the free AI Tool Stack Checklist from AI Wealth Base — practical tools worth testing, and which ones to skip.",
  alternates: { canonical: "/free-checklist" },
};

export default function FreeChecklistPage() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 hero-grid opacity-40" aria-hidden />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-mint">
            Free download
          </p>
          <h1 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-white">
            The AI Tool Stack Checklist
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-[rgba(255,255,255,0.7)]">
            Stop collecting random AI apps. Get a clear checklist of what to test for freelancing,
            side income, and business operations — filtered through real workflows.
          </p>
          <ul className="mt-8 space-y-4 text-[15px] text-[rgba(255,255,255,0.72)]">
            <li className="flex gap-3">
              <span className="mt-0.5 text-mint">01</span>
              <span>Stacks mapped to earning paths — not endless tool lists</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-mint">02</span>
              <span>What to verify before you subscribe</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-mint">03</span>
              <span>Weekly tool verdicts when we publish new tests</span>
            </li>
          </ul>
          <p className="mt-8 text-[14px] text-[rgba(255,255,255,0.45)]">
            Prefer reading first?{" "}
            <Link href="/reviews" className="text-mint hover:underline">
              Browse upcoming reviews
            </Link>
            .
          </p>
        </div>

        <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-slate p-6 shadow-[0_2px_8px_rgba(0,0,0,0.3)] md:p-8">
          <h2 className="text-[20px] font-semibold text-white">Get it in your inbox</h2>
          <p className="mt-2 mb-6 text-[14px] text-[rgba(255,255,255,0.55)]">
            Name + email. That&apos;s it.
          </p>
          <LeadForm source="free-checklist" />
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "./components/LeadForm";

export const metadata: Metadata = {
  title: {
    absolute: "AI Wealth Base — We Test the Tools. You Build the Base.",
  },
  description:
    "Honest AI tool tests and real workflows for freelancers, side hustlers, and business owners. No hype — just what actually works.",
  alternates: { canonical: "/" },
};

const pillars = [
  {
    title: "Honesty over hype",
    body: "No fake screenshots. No overnight millionaire promises. Failed experiments get published, not hidden.",
  },
  {
    title: "Documentation, not preaching",
    body: "We test methods publicly and show real results — good or bad. Learn with us, not from a guru script.",
  },
  {
    title: "Operator credibility",
    body: "Tools are tested in real business contexts — backed by performance marketing agency experience.",
  },
];

const reviewTeasers = [
  {
    title: "AI chatbots for sales recovery",
    tag: "Coming soon",
    blurb: "Which bots actually recover abandoned carts — and which ones waste your budget.",
  },
  {
    title: "Automation stacks for freelancers",
    tag: "Coming soon",
    blurb: "A practical Make/Zapier/n8n stack that saves hours without locking you into hype tools.",
  },
  {
    title: "AI writing tools that pay rent",
    tag: "Coming soon",
    blurb: "Head-to-head on real client deliverables — speed, quality, and client-ready output.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — one composition: brand, headline, support, CTA */}
      <section className="relative overflow-hidden min-h-[calc(100vh-72px)] flex items-center">
        <div className="absolute inset-0 hero-grid opacity-70" aria-hidden />
        <div
          className="absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-[rgba(0,245,160,0.12)] blur-3xl mint-glow"
          aria-hidden
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] h-[380px] w-[380px] rounded-full bg-[rgba(30,41,59,0.9)] blur-3xl"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="animate-fade-up text-[12px] font-semibold uppercase tracking-[0.18em] text-mint">
            AI Wealth Base
          </p>
          <h1 className="animate-fade-up-delay-1 mt-4 max-w-4xl text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.15] text-white">
            We test the tools.
            <br />
            <span className="text-mint">You build the base.</span>
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-[18px] leading-relaxed text-[rgba(255,255,255,0.72)]">
            Honest AI software reviews and real workflows — so freelancers, side hustlers, and
            business owners can earn more without wasting money on hype.
          </p>
          <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/free-checklist"
              className="rounded-lg bg-mint px-6 py-3 text-[15px] font-semibold text-navy transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
            >
              Get the Free AI Tool Stack Checklist
            </Link>
            <Link
              href="/reviews"
              className="rounded-lg border border-mint px-6 py-3 text-[15px] font-medium text-white transition hover:bg-[rgba(0,245,160,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
            >
              Browse Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-t border-[rgba(255,255,255,0.08)] bg-[#070b14] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-2xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-white">
            Watch us test every method first. Copy only what works.
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] text-[rgba(255,255,255,0.65)]">
            No tool prints money by itself. Every verdict acknowledges skill, effort, and the
            ecosystem around the stack.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {pillars.map((item) => (
              <div key={item.title}>
                <div className="mb-3 h-0.5 w-10 bg-mint" aria-hidden />
                <h3 className="text-[20px] font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[rgba(255,255,255,0.62)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews teaser */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-mint">
                Tool verdicts
              </p>
              <h2 className="mt-2 text-[clamp(1.75rem,3vw,2.35rem)] font-bold text-white">
                Reviews in the pipeline
              </h2>
            </div>
            <Link href="/reviews" className="text-[15px] font-medium text-mint hover:underline">
              See all reviews →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviewTeasers.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-slate p-6 transition hover:border-[rgba(0,245,160,0.35)] hover:shadow-[0_0_12px_rgba(0,245,160,0.15)]"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-mint">
                  {item.tag}
                </span>
                <h3 className="mt-3 text-[18px] font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[rgba(255,255,255,0.6)]">
                  {item.blurb}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section className="border-t border-[rgba(255,255,255,0.08)] py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-mint">
              Free lead magnet
            </p>
            <h2 className="mt-2 text-[clamp(1.75rem,3vw,2.35rem)] font-bold text-white">
              The AI Tool Stack Checklist
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-[rgba(255,255,255,0.68)]">
              A practical checklist of tools worth testing — and which ones to skip — based on real
              workflows, not affiliate scripts.
            </p>
            <ul className="mt-6 space-y-3 text-[15px] text-[rgba(255,255,255,0.7)]">
              <li className="flex gap-2">
                <span className="text-mint">✓</span> Core stack by income path
              </li>
              <li className="flex gap-2">
                <span className="text-mint">✓</span> What to test before you pay
              </li>
              <li className="flex gap-2">
                <span className="text-mint">✓</span> Weekly verdicts in your inbox
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-slate p-6 md:p-8">
            <LeadForm source="home" />
          </div>
        </div>
      </section>

      {/* Soft agency funnel */}
      <section className="border-t border-[rgba(255,255,255,0.08)] bg-[#070b14] py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-[22px] font-semibold text-white md:text-[26px]">
            Running a business and need operators, not another tool video?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] text-[rgba(255,255,255,0.6)]">
            AI Wealth Base is the testing channel. For performance marketing and growth systems,
            visit{" "}
            <a
              href="https://scalerise.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mint hover:underline"
            >
              ScaleRise.io
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import AutomationROICalculator from "./AutomationROICalculator";

const title = "Free Automation ROI Calculator — See How Much Time & Money You're Losing";
const description =
  "Calculate hours and dollars your business wastes on repetitive tasks each year. Get a live automation ROI estimate, then get a free plan from ScaleRise.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: { canonical: "/tools/automation-roi-calculator" },
  openGraph: {
    title,
    description,
    url: "https://aiwealthbase.com/tools/automation-roi-calculator",
    siteName: "AI Wealth Base",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function AutomationRoiCalculatorPage() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 hero-grid opacity-40" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-mint">
          Free tool
        </p>
        <h1 className="mt-3 max-w-3xl text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-white">
          Automation ROI Calculator
        </h1>
        <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-[rgba(255,255,255,0.7)]">
          See how many hours and dollars a repetitive task costs you every year — then decide if
          it&apos;s worth automating.
        </p>

        <div className="mt-12">
          <AutomationROICalculator />
        </div>

        <div className="prose-awb mx-auto mt-20 max-w-3xl">
          <h2>How this calculator works</h2>
          <p>
            Enter how often a task happens, how long it takes, and what that person&apos;s time is
            worth. We annualize those inputs, then apply the automatable percentage (80% by default)
            to estimate hours and dollars you could get back. The 3-year figure is simply annual
            savings × 3 — a planning range, not a guarantee.
          </p>
          <p>
            Treat the result as a starting point. Real savings depend on how clean the process is,
            how much human judgment stays in the loop, and whether the automation is built and
            maintained well. If the number is large, the task is a strong candidate to automate.
          </p>
          <p>
            Explore more honest AI tool tests on the{" "}
            <Link href="/">AI Wealth Base homepage</Link>, or talk to operators who build these
            systems at{" "}
            <a href="https://scalerise.io" target="_blank" rel="noopener noreferrer">
              ScaleRise.io
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

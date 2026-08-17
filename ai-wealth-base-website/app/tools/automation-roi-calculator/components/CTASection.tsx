"use client";

import { trackEvent } from "@/lib/analytics";

export default function CTASection() {
  return (
    <div className="rounded-xl border border-[rgba(0,245,160,0.35)] bg-[rgba(0,245,160,0.08)] p-6 text-center md:p-8">
      <h2 className="text-[22px] font-bold leading-tight text-white md:text-[26px]">
        Want this task automated for your business?
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-[15px] text-[rgba(255,255,255,0.65)]">
        ScaleRise designs and builds the automations — so you keep the hours and dollars this
        calculator just showed you.
      </p>
      <a
        href="https://scalerise.io"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("cta_click_scalerise", { source: "automation-roi-calculator" })}
        className="mt-6 inline-flex min-h-12 min-w-[220px] items-center justify-center rounded-lg bg-mint px-8 py-3.5 text-[16px] font-semibold text-navy transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
      >
        Get a Free Automation Plan
      </a>
    </div>
  );
}

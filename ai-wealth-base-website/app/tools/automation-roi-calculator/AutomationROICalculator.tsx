"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { calculateRoi, type Frequency } from "./lib/calculate";
import { useCountUp } from "./hooks/useCountUp";
import InputField from "./components/InputField";
import StatCard from "./components/StatCard";
import CTASection from "./components/CTASection";
import LeadCaptureForm from "./components/LeadCaptureForm";

const FREQUENCY_OPTIONS: { value: Frequency; label: string }[] = [
  { value: "day", label: "Per Day" },
  { value: "week", label: "Per Week" },
  { value: "month", label: "Per Month" },
];

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

function formatHours(value: number): string {
  return `${value.toLocaleString("en-US", { maximumFractionDigits: 1 })} hrs`;
}

function formatDays(value: number): string {
  return `${value.toLocaleString("en-US", { maximumFractionDigits: 1 })} days`;
}

export default function AutomationROICalculator() {
  const [taskName, setTaskName] = useState("");
  const [frequency, setFrequency] = useState<Frequency>("week");
  const [timesPerPeriod, setTimesPerPeriod] = useState(10);
  const [minutesPerTask, setMinutesPerTask] = useState(15);
  const [hourlyCost, setHourlyCost] = useState(50);
  const [automatablePercent, setAutomatablePercent] = useState(80);
  const [advancedOpen, setAdvancedOpen] = useState(false);

  const results = useMemo(
    () =>
      calculateRoi({
        timesPerPeriod,
        minutesPerTask,
        hourlyCost,
        frequency,
        automatablePercent,
      }),
    [timesPerPeriod, minutesPerTask, hourlyCost, frequency, automatablePercent],
  );

  const animatedDollars = useCountUp(results.dollarsSavedPerYear);

  // Debounced analytics: fire once after a few seconds of inactivity.
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      trackEvent("calculator_input_changed", {
        taskName,
        frequency,
        timesPerPeriod,
        minutesPerTask,
        hourlyCost,
        automatablePercent,
        hoursSavedPerYear: results.hoursSavedPerYear,
        dollarsSavedPerYear: results.dollarsSavedPerYear,
      });
    }, 2500);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [
    taskName,
    frequency,
    timesPerPeriod,
    minutesPerTask,
    hourlyCost,
    automatablePercent,
    results.hoursSavedPerYear,
    results.dollarsSavedPerYear,
  ]);

  return (
    <div className="space-y-10">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        {/* Inputs */}
        <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-slate p-6 shadow-[0_2px_8px_rgba(0,0,0,0.3)] md:p-8">
          <h2 className="text-[20px] font-semibold text-white">Your repetitive task</h2>
          <p className="mt-1 mb-6 text-[14px] text-[rgba(255,255,255,0.5)]">
            Results update live — no submit needed.
          </p>

          <div className="space-y-5">
            <InputField
              id="task-name"
              label="Task name"
              hint="Optional — e.g. invoice follow-ups, lead qualification"
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="Invoice follow-ups"
            />

            <div>
              <label
                htmlFor="frequency"
                className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[1px] text-[rgba(255,255,255,0.55)]"
              >
                Frequency
              </label>
              <select
                id="frequency"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value as Frequency)}
                className="w-full rounded-md border border-[rgba(255,255,255,0.12)] bg-navy px-3.5 py-2.5 text-[15px] text-white outline-none transition focus:border-mint focus:ring-2 focus:ring-[rgba(0,245,160,0.25)]"
              >
                {FREQUENCY_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <InputField
              id="times"
              label="Times per period"
              type="number"
              min={0}
              step={1}
              value={timesPerPeriod}
              onChange={(e) => setTimesPerPeriod(Number(e.target.value))}
              hint={`How many times this happens ${FREQUENCY_OPTIONS.find((o) => o.value === frequency)?.label.toLowerCase()}`}
            />

            <InputField
              id="minutes"
              label="Minutes per task"
              type="number"
              min={0}
              step={1}
              value={minutesPerTask}
              onChange={(e) => setMinutesPerTask(Number(e.target.value))}
              suffix="min"
            />

            <InputField
              id="hourly-cost"
              label="Hourly cost of the person doing it"
              type="number"
              min={0}
              step={1}
              prefix="$"
              value={hourlyCost}
              onChange={(e) => setHourlyCost(Number(e.target.value))}
            />

            <div>
              <button
                type="button"
                onClick={() => setAdvancedOpen((open) => !open)}
                className="flex w-full items-center justify-between rounded-md py-2 text-left text-[14px] font-medium text-mint hover:underline"
                aria-expanded={advancedOpen}
              >
                Advanced: % that can be automated
                <span aria-hidden>{advancedOpen ? "−" : "+"}</span>
              </button>
              {advancedOpen && (
                <div className="mt-3">
                  <div className="mb-2 flex items-center justify-between text-[13px] text-[rgba(255,255,255,0.65)]">
                    <span>Automatable</span>
                    <span className="font-semibold text-mint">{automatablePercent}%</span>
                  </div>
                  <input
                    id="automatable"
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={automatablePercent}
                    onChange={(e) => setAutomatablePercent(Number(e.target.value))}
                    className="h-2 w-full cursor-pointer appearance-none rounded-full bg-[rgba(255,255,255,0.12)] accent-[#00F5A0]"
                    aria-label="Percent of this task that can be automated"
                  />
                  <p className="mt-2 text-[12px] text-[rgba(255,255,255,0.4)]">
                    Most ops tasks land around 70–90%. Leave at 80% if you&apos;re unsure.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-slate p-6 shadow-[0_2px_8px_rgba(0,0,0,0.3)] md:p-8">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-mint">
            Estimated annual savings
          </p>
          <p className="mt-4 text-[clamp(2.4rem,5vw,3.5rem)] font-bold leading-none tracking-tight text-white">
            {formatCurrency(animatedDollars)}
          </p>
          <p className="mt-3 text-[14px] text-[rgba(255,255,255,0.5)]">
            {taskName.trim() ? `If you automate “${taskName.trim()}”` : "If you automate this task"}{" "}
            at {automatablePercent}% coverage
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <StatCard
              label="Hours saved / year"
              value={formatHours(results.hoursSavedPerYear)}
            />
            <StatCard
              label="Workdays saved / year"
              value={formatDays(results.workdaysSavedPerYear)}
              hint="8-hour workdays"
            />
            <StatCard
              label="Hours saved / week"
              value={formatHours(results.hoursSavedPerWeek)}
            />
            <StatCard
              label="3-year savings"
              value={formatCurrency(results.threeYearSavings)}
            />
          </div>
        </div>
      </div>

      <CTASection />

      <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-slate p-6 md:p-8">
        <h2 className="text-[18px] font-semibold text-white">Want this report in your inbox?</h2>
        <p className="mt-1 mb-6 text-[14px] text-[rgba(255,255,255,0.5)]">
          We&apos;ll send a copy of these numbers. No spam.
        </p>
        <LeadCaptureForm
          taskName={taskName.trim()}
          hoursSavedPerYear={results.hoursSavedPerYear}
          dollarsSavedPerYear={results.dollarsSavedPerYear}
        />
      </div>
    </div>
  );
}

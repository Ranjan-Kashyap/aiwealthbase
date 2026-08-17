"use client";

type StatCardProps = {
  label: string;
  value: string;
  hint?: string;
};

export default function StatCard({ label, value, hint }: StatCardProps) {
  return (
    <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-navy p-4 md:p-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[rgba(255,255,255,0.45)]">
        {label}
      </p>
      <p className="mt-2 text-[22px] font-bold leading-none text-white md:text-[24px]">{value}</p>
      {hint && <p className="mt-2 text-[12px] text-[rgba(255,255,255,0.4)]">{hint}</p>}
    </div>
  );
}

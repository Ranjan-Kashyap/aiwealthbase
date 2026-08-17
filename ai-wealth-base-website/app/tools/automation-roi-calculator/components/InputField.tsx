"use client";

import type { InputHTMLAttributes, ReactNode } from "react";

type InputFieldProps = {
  id: string;
  label: string;
  hint?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export default function InputField({
  id,
  label,
  hint,
  prefix,
  suffix,
  className = "",
  ...props
}: InputFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[1px] text-[rgba(255,255,255,0.55)]"
      >
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[15px] text-[rgba(255,255,255,0.45)]">
            {prefix}
          </span>
        )}
        <input
          id={id}
          className={`w-full rounded-md border border-[rgba(255,255,255,0.12)] bg-navy px-3.5 py-2.5 text-[15px] text-white outline-none transition focus:border-mint focus:ring-2 focus:ring-[rgba(0,245,160,0.25)] ${
            prefix ? "pl-8" : ""
          } ${suffix ? "pr-12" : ""} ${className}`}
          {...props}
        />
        {suffix && (
          <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[13px] text-[rgba(255,255,255,0.4)]">
            {suffix}
          </span>
        )}
      </div>
      {hint && <p className="mt-1.5 text-[12px] text-[rgba(255,255,255,0.4)]">{hint}</p>}
    </div>
  );
}

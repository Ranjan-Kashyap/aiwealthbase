"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function LeadForm({ source = "free-checklist" }: { source?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      source,
    };

    try {
      const res = await fetch("/api/lead-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setMessage(json.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setMessage("You're in. Check your inbox for the AI Tool Stack Checklist.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full space-y-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[1px] text-[rgba(255,255,255,0.55)]">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-md border border-[rgba(255,255,255,0.12)] bg-slate px-3.5 py-2.5 text-[15px] text-white outline-none transition focus:border-mint focus:ring-2 focus:ring-[rgba(0,245,160,0.25)]"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[1px] text-[rgba(255,255,255,0.55)]">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-md border border-[rgba(255,255,255,0.12)] bg-slate px-3.5 py-2.5 text-[15px] text-white outline-none transition focus:border-mint focus:ring-2 focus:ring-[rgba(0,245,160,0.25)]"
          placeholder="you@example.com"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-mint px-6 py-3 text-[15px] font-semibold text-navy transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
      >
        {status === "loading" ? "Sending…" : "Get the Free Checklist"}
      </button>
      {message && (
        <p
          className={`text-[14px] ${status === "success" ? "text-mint" : "text-[var(--error)]"}`}
          role="status"
        >
          {message}
        </p>
      )}
      <p className="text-[12px] leading-relaxed text-[rgba(255,255,255,0.4)]">
        No spam. Unsubscribe anytime. We respect your inbox the way we respect your time.
      </p>
    </form>
  );
}

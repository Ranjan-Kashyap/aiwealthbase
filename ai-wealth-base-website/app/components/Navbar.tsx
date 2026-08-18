"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/reviews", label: "Reviews" },
  { href: "/free-checklist", label: "Free Checklist" },
  { href: "/tools/automation-roi-calculator", label: "ROI Calculator" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.08)] bg-[rgba(10,15,29,0.88)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-[72px] sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-4 whitespace-nowrap xl:flex xl:gap-6" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[14px] font-medium tracking-[0.02em] transition-colors xl:text-[15px] ${
                isActive(link.href)
                  ? "text-mint"
                  : "text-[rgba(255,255,255,0.72)] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/free-checklist"
            className="rounded-lg bg-mint px-4 py-2 text-[14px] font-medium text-navy transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint xl:px-5 xl:py-2.5 xl:text-[15px]"
          >
            Get Free Checklist
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-white xl:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-[rgba(255,255,255,0.08)] bg-navy px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-3 text-[15px] font-medium ${
                  isActive(link.href) ? "bg-slate text-mint" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/free-checklist"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-mint px-4 py-3 text-center text-[15px] font-medium text-navy"
            >
              Get Free Checklist
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

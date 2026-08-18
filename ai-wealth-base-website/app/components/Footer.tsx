import Link from "next/link";
import Logo from "./Logo";

const socials = [
  {
    href: "https://www.youtube.com/@AIWealthBase",
    label: "AI Wealth Base on YouTube",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M23.5 6.2a3.1 3.1 0 0 0-2.2-2.2C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.3.4A3.1 3.1 0 0 0 .5 6.2 32.6 32.6 0 0 0 0 12a32.6 32.6 0 0 0 .5 5.8 3.1 3.1 0 0 0 2.2 2.2c1.8.4 9.3.4 9.3.4s7.5 0 9.3-.4a3.1 3.1 0 0 0 2.2-2.2A32.6 32.6 0 0 0 24 12a32.6 32.6 0 0 0-.5-5.8zM9.6 15.5V8.5L15.8 12l-6.2 3.5z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/aiwealthbase/",
    label: "AI Wealth Base on Instagram",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/AIWealthBase",
    label: "AI Wealth Base on Facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M14.2 21v-7.2h2.4l.4-2.8h-2.8V9.2c0-.8.2-1.4 1.4-1.4H17V5.2C16.6 5.2 15.6 5 14.5 5c-2.4 0-4 1.5-4 4.2v1.8H8v2.8h2.5V21h3.7z" />
      </svg>
    ),
  },
];

const footerLinks = [
  { href: "/reviews", label: "Reviews" },
  { href: "/free-checklist", label: "Free Checklist" },
  { href: "/tools/automation-roi-calculator", label: "ROI Calculator" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[rgba(255,255,255,0.08)] bg-[#070b14]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-[14px] leading-relaxed text-[rgba(255,255,255,0.55)]">
              We test AI tools and methods on camera — honestly, with real workflows — so you can
              build genuine online income without the hype.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[rgba(255,255,255,0.12)] text-[rgba(255,255,255,0.7)] transition hover:border-mint hover:text-mint"
                >
                  {item.icon}
                </a>
              ))}
              <a
                href="https://scalerise.io"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-[14px] text-[rgba(255,255,255,0.65)] transition hover:text-mint"
              >
                ScaleRise
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[14px] text-[rgba(255,255,255,0.55)]">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
            <a href="mailto:hello@aiwealthbase.com" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-[rgba(255,255,255,0.08)] pt-6 text-[13px] text-[rgba(255,255,255,0.4)]">
          <p>© {new Date().getFullYear()} AI Wealth Base. All rights reserved.</p>
          <p className="mt-2 max-w-3xl leading-relaxed">
            Some links may be affiliate links. We only recommend tools we&apos;ve tested. Results vary
            — income requires skill, effort, and a real business ecosystem around any tool.
          </p>
        </div>
      </div>
    </footer>
  );
}

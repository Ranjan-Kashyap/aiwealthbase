import Link from "next/link";
import Logo from "./Logo";

const footerLinks = [
  { href: "/reviews", label: "Reviews" },
  { href: "/free-checklist", label: "Free Checklist" },
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
            <div className="mt-5 flex flex-wrap gap-4 text-[14px]">
              <a
                href="https://youtube.com/@AIWealthBase"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgba(255,255,255,0.65)] transition hover:text-mint"
              >
                YouTube
              </a>
              <a
                href="https://instagram.com/AIWealthBase"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgba(255,255,255,0.65)] transition hover:text-mint"
              >
                Instagram
              </a>
              <a
                href="https://scalerise.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgba(255,255,255,0.65)] transition hover:text-mint"
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

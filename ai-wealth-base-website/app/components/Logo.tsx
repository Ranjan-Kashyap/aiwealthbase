import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label="AI Wealth Base home"
    >
      <Image
        src="/images/awb-logo.png"
        alt="AI Wealth Base"
        width={2489}
        height={200}
        className="h-7 w-auto object-contain sm:h-8"
        style={{ width: "auto" }}
        priority
      />
    </Link>
  );
}

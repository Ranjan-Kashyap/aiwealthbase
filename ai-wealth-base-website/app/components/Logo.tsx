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
        width={500}
        height={41}
        className="h-6 w-auto max-w-[160px] sm:h-7 sm:max-w-[190px] xl:h-8 xl:max-w-[220px]"
        priority
      />
    </Link>
  );
}

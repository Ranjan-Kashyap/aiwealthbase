import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="AI Wealth Base home">
      <Image
        src="/images/awb-logo.png"
        alt="AI Wealth Base"
        width={500}
        height={41}
        className="h-8 w-auto max-w-[200px] sm:max-w-[280px] md:h-9 md:max-w-none"
        priority
      />
    </Link>
  );
}

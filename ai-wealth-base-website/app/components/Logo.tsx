import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  variant?: "full" | "icon";
};

export default function Logo({ className = "", variant = "full" }: LogoProps) {
  if (variant === "icon") {
    return (
      <Link href="/" className={`inline-flex items-center ${className}`} aria-label="AI Wealth Base home">
        <Image
          src="/images/awb-monogram.png"
          alt="AI Wealth Base"
          width={120}
          height={32}
          className="h-8 w-auto"
          priority
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 md:gap-3 ${className}`}
      aria-label="AI Wealth Base home"
    >
      <Image
        src="/images/awb-monogram.png"
        alt=""
        width={140}
        height={37}
        className="h-7 w-auto md:h-8"
        priority
        aria-hidden
      />
      <span className="text-[15px] font-semibold tracking-tight text-white md:text-[17px]">
        AIWealthBase
      </span>
    </Link>
  );
}

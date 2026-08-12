import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = "https://aiwealthbase.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI Wealth Base — We Test the Tools. You Build the Base.",
    template: "%s | AI Wealth Base",
  },
  description:
    "Honest AI tool tests and real workflows for freelancers, side hustlers, and business owners. No hype — just what actually works.",
  keywords: [
    "AI tools",
    "make money with AI",
    "AI tool reviews",
    "AI automation",
    "AI side hustle",
    "AI for business",
  ],
  openGraph: {
    title: "AI Wealth Base — We Test the Tools. You Build the Base.",
    description:
      "Honest AI tool tests and real workflows. Watch us test every method first, and copy only what works.",
    url: siteUrl,
    siteName: "AI Wealth Base",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Wealth Base — We Test the Tools. You Build the Base.",
    description:
      "Honest AI tool tests and real workflows. Watch us test every method first, and copy only what works.",
  },
  alternates: {
    canonical: siteUrl,
    languages: { "x-default": siteUrl },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

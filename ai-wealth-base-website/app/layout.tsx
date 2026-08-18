import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const GTM_ID = "GTM-NM3KCZDD";

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
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

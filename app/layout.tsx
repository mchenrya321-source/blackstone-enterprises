import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blackstoneenterprises.com"),
  title: {
    default: `${SITE.name} | Heavy Diesel Repair & Mobile Service`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Professional mobile diesel repair, diagnostics, maintenance, and heavy equipment service in Northeast Louisiana. Heavy diesel repair done right.",
  keywords: [
    "diesel repair",
    "mobile diesel repair",
    "heavy equipment repair",
    "fleet maintenance",
    "Northeast Louisiana",
    "Blackstone Enterprises",
    "emergency diesel service",
  ],
  openGraph: {
    title: `${SITE.name} | Heavy Diesel Repair Done Right`,
    description:
      "Professional mobile diesel repair, diagnostics, maintenance, and heavy equipment service built around keeping your equipment moving.",
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    images: [{ url: "/logo.png", width: 1514, height: 1023, alt: SITE.name }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: SITE.name,
  description:
    "Professional mobile diesel repair, diagnostics, maintenance, and heavy equipment service.",
  telephone: SITE.phone,
  url: "https://blackstoneenterprises.com",
  areaServed: "Northeast Louisiana",
  sameAs: [SITE.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-black font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}

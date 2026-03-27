import type { Metadata } from "next";
import { Bebas_Neue, DM_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://niobium.agency"),
  title: {
    default: "Niobium Agency | Social Media, SEO & Content for Ambitious Brands",
    template: "%s | Niobium Agency",
  },
  description:
    "Niobium Agency delivers elite social media management, SEO strategy, and blog content for brands that refuse to be ignored. Operating globally from London & Berlin.",
  keywords: ["social media agency", "SEO agency", "content marketing", "digital agency", "luxury brand marketing", "blog content writing"],
  authors: [{ name: "Niobium Agency" }],
  creator: "Niobium Agency",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://niobium.agency",
    siteName: "Niobium Agency",
    title: "Niobium Agency | Social Media, SEO & Content for Ambitious Brands",
    description:
      "Elite social media management, SEO strategy, and blog content for brands that refuse to be ignored.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Niobium Agency — Brutalist Digital Precision",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Niobium Agency | Social Media, SEO & Content",
    description:
      "Elite social media management, SEO strategy, and blog content for brands that refuse to be ignored.",
    images: ["/og-image.png"],
    creator: "@niobiumstudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Niobium Agency",
  description:
    "Elite social media management, SEO strategy, and blog content for ambitious brands.",
  url: "https://niobium.agency",
  email: "niobium.co@gmail.com",
  sameAs: ["https://instagram.com/niobium.studio"],
  areaServed: "Worldwide",
  serviceType: ["Social Media Marketing", "SEO Strategy", "Content Writing"],
  foundingDate: "2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body
        className={`${bebasNeue.variable} ${dmMono.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

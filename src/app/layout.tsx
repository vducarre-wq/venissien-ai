import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { JsonLd } from "@/components/shared/json-ld";
import { siteConfig } from "@/data/site-config";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Venissien.ai - Formation IA pour Experts-Comptables et Avocats",
    template: "%s | Venissien.ai",
  },
  description: siteConfig.description,
  keywords: [
    "formation IA expert-comptable",
    "ChatGPT cabinet comptable",
    "IA générative expertise comptable",
    "formation IA avocat",
    "prompt comptabilité",
    "formateur IA Lyon",
  ],
  authors: [{ name: siteConfig.founder.name }],
  creator: siteConfig.founder.name,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Venissien.ai - Formation IA pour Experts-Comptables et Avocats",
    description: siteConfig.description,
    images: [
      {
        url: "/images/hero-group.png",
        width: 1200,
        height: 630,
        alt: "Venissien.ai - Formation IA Générative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Venissien.ai - Formation IA pour Experts-Comptables et Avocats",
    description: siteConfig.description,
    images: ["/images/hero-group.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lyon",
    addressCountry: "FR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.stats.satisfactionScore.toString(),
    bestRating: "5",
    ratingCount: siteConfig.stats.respondentCount.toString(),
  },
  founder: {
    "@type": "Person",
    name: siteConfig.founder.name,
    jobTitle: siteConfig.founder.title,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${archivo.variable} font-sans antialiased`}
      >
        <JsonLd data={localBusinessJsonLd} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-primary focus:text-white"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

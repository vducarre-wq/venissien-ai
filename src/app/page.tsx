import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ClientLogos } from "@/components/sections/client-logos";

import { ProblemSection } from "@/components/sections/problem-section";
import { FormationsPreview } from "@/components/sections/formations-preview";
import { ExpertBio } from "@/components/sections/expert-bio";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaSection } from "@/components/sections/cta-section";
import { JsonLd } from "@/components/shared/json-ld";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Venissien.ai",
  url: "https://venissien.ai",
  description:
    "Formations IA générative par un expert-comptable praticien pour les professionnels du chiffre et du droit.",
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteJsonLd} />
      <Hero />
      <ClientLogos />
      <ProblemSection />
      <FormationsPreview />
      <ExpertBio />
      <Testimonials />
      <CtaSection />
    </>
  );
}

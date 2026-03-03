import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/shared/page-header";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site venissien.ai - AUM Conseil.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader
        title="Mentions légales"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Mentions légales", href: "/mentions-legales" },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="prose prose-gray max-w-3xl mx-auto px-4">
          <h2>Éditeur du site</h2>
          <p>
            Le site{" "}
            <Link href={siteConfig.url}>{siteConfig.name}</Link> est édité par{" "}
            <strong>{siteConfig.legalName}</strong>, représentée par{" "}
            {siteConfig.founder.name}.
          </p>
          <ul>
            <li>
              Email :{" "}
              <a href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </a>
            </li>
            <li>Adresse : {siteConfig.contact.location}</li>
          </ul>

          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par <strong>Vercel Inc.</strong>
          </p>
          <ul>
            <li>Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, USA</li>
            <li>
              Site web :{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                vercel.com
              </a>
            </li>
          </ul>

          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus présents sur le site (textes, images,
            logos, éléments graphiques) est la propriété exclusive de{" "}
            {siteConfig.legalName} / {siteConfig.name}. Toute reproduction,
            représentation, modification, publication, transmission ou
            dénaturation, totale ou partielle, sans autorisation préalable
            écrite est interdite.
          </p>

          <h2>Responsabilité</h2>
          <p>
            {siteConfig.legalName} s&apos;efforce d&apos;assurer l&apos;exactitude
            des informations publiées sur le site, mais ne saurait garantir
            l&apos;exactitude, la complétude et l&apos;actualité de ces
            informations.
          </p>
          <p>
            Le site peut contenir des liens vers des sites tiers pour lesquels{" "}
            {siteConfig.legalName} décline toute responsabilité quant à leur
            contenu, leur fonctionnement et leur accessibilité.
          </p>

          <h2>Données personnelles</h2>
          <p>
            La collecte et le traitement des données personnelles sont décrits
            dans notre{" "}
            <Link href="/politique-confidentialite">
              politique de confidentialité
            </Link>
            .
          </p>

          <h2>Cookies</h2>
          <p>
            Le site utilise des cookies à des fins d&apos;analyse et
            d&apos;amélioration de l&apos;expérience utilisateur. Vous pouvez
            gérer vos préférences via le bandeau de consentement aux cookies
            affiché lors de votre première visite.
          </p>

          <h2>Crédits</h2>
          <p>
            Site développé avec{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles — venissien.ai",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageHeader
        title="Politique de confidentialité"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          {
            label: "Politique de confidentialité",
            href: "/politique-confidentialite",
          },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="prose prose-gray max-w-3xl mx-auto px-4">
          <h2>Introduction</h2>
          <p>
            {siteConfig.legalName} ({siteConfig.name}) attache une grande
            importance à la protection des données personnelles. La présente
            politique explique comment vos données sont collectées, utilisées et
            protégées, conformément au Règlement Général sur la Protection des
            Données (RGPD).
          </p>

          <h2>Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données est{" "}
            <strong>{siteConfig.legalName}</strong>.
          </p>
          <ul>
            <li>
              Contact :{" "}
              <a href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>

          <h2>Données collectées</h2>
          <p>
            Nous collectons les données suivantes via le formulaire de contact
            du site :
          </p>
          <ul>
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Profil professionnel</li>
          </ul>
          <p>
            Ces données sont collectées dans le but de répondre à vos demandes
            de renseignements concernant nos formations.
          </p>

          <h2>Finalités du traitement</h2>
          <ul>
            <li>Traitement des demandes de formation</li>
            <li>
              Envoi d&apos;informations pertinentes sur les formations proposées
            </li>
            <li>Amélioration du site et de nos services</li>
          </ul>

          <h2>Base légale</h2>
          <p>Le traitement de vos données repose sur :</p>
          <ul>
            <li>
              <strong>L&apos;intérêt légitime</strong> : répondre à vos demandes
              de renseignements
            </li>
            <li>
              <strong>Le consentement</strong> : pour l&apos;envoi de
              communications et newsletters
            </li>
          </ul>

          <h2>Durée de conservation</h2>
          <p>
            Les données personnelles sont conservées pendant une durée de{" "}
            <strong>3 ans</strong> à compter du dernier contact.
          </p>

          <h2>Destinataires des données</h2>
          <p>
            Vos données peuvent être transmises à{" "}
            <strong>Systeme.io</strong> (outil de gestion des emails). Aucune
            donnée n&apos;est transférée en dehors de l&apos;Union européenne
            sans garanties appropriées.
          </p>

          <h2>Droits des personnes</h2>
          <p>
            Conformément au RGPD, vous disposez des droits suivants sur vos
            données personnelles :
          </p>
          <ul>
            <li>Droit d&apos;accès</li>
            <li>Droit de rectification</li>
            <li>Droit à l&apos;effacement</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité</li>
          </ul>
          <p>
            Pour exercer vos droits, contactez-nous à l&apos;adresse :{" "}
            <a href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>
            .
          </p>

          <h2>Cookies</h2>
          <p>
            Le site utilise des cookies essentiels au fonctionnement du site
            ainsi que des cookies analytiques, chargés uniquement après votre
            consentement. Vous pouvez gérer vos préférences via le bandeau de
            consentement aux cookies.
          </p>

          <h2>Sécurité</h2>
          <p>
            Des mesures techniques et organisationnelles appropriées sont mises
            en oeuvre pour protéger vos données personnelles contre tout accès
            non autorisé, perte, altération ou divulgation.
          </p>

          <h2>Modifications</h2>
          <p>
            La présente politique de confidentialité peut être mise à jour. Nous
            vous invitons à la consulter régulièrement.
          </p>
          <p>
            <strong>Dernière mise à jour : janvier 2025.</strong>
          </p>
        </div>
      </section>
    </>
  );
}

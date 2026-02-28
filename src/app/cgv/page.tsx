import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description:
    "CGV des formations IA — AUM Conseil / venissien.ai",
};

export default function CGVPage() {
  return (
    <>
      <PageHeader
        title="Conditions Générales de Vente"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "CGV", href: "/cgv" },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="prose prose-gray max-w-3xl mx-auto px-4">
          <h2>Objet</h2>
          <p>
            Les présentes Conditions Générales de Vente (CGV) régissent la vente
            de prestations de formation professionnelle dispensées par{" "}
            <strong>{siteConfig.legalName}</strong> (marque :{" "}
            {siteConfig.name}).
          </p>

          <h2>Inscription</h2>
          <p>
            L&apos;inscription est confirmée à réception du bulletin
            d&apos;inscription signé et de l&apos;acceptation des présentes CGV.
            Pour les sessions inter-entreprises, les inscriptions sont validées
            par ordre d&apos;arrivée.
          </p>

          <h2>Tarifs</h2>
          <ul>
            <li>
              <strong>Inter-entreprises</strong> : 400 € HT par personne et par
              jour
            </li>
            <li>
              <strong>Intra-entreprise</strong> : 2 500 € HT par jour
            </li>
          </ul>
          <p>
            Les tarifs sont susceptibles d&apos;être révisés. Le tarif applicable
            est celui en vigueur au moment de l&apos;inscription.
          </p>

          <h2>Conditions de paiement</h2>
          <p>
            Le paiement est dû dans un délai de 30 jours à compter de la date
            de facturation. En cas de retard de paiement, des pénalités
            s&apos;appliquent conformément à l&apos;article L.441-10 du Code de
            commerce.
          </p>

          <h2>Annulation et report</h2>
          <p>
            Toute annulation doit être communiquée par écrit. Les conditions
            d&apos;annulation sont les suivantes :
          </p>
          <ul>
            <li>
              <strong>Plus de 14 jours avant la formation</strong> :
              remboursement intégral
            </li>
            <li>
              <strong>Entre 7 et 14 jours</strong> : 50 % du montant est retenu
            </li>
            <li>
              <strong>Moins de 7 jours</strong> : la totalité du montant est due
            </li>
          </ul>

          <h2>Déroulement des formations</h2>
          <p>
            Les formations se déroulent au lieu convenu, aux horaires convenus.
            Les participants doivent se munir d&apos;un ordinateur portable et
            disposer d&apos;un accès à internet.
          </p>

          <h2>Attestation</h2>
          <p>
            Une attestation de fin de formation est remise à chaque participant
            à l&apos;issue de la formation.
          </p>

          <h2>Responsabilité</h2>
          <p>
            {siteConfig.legalName} s&apos;engage sur une obligation de moyens.
            Le contenu des formations est délivré à titre informatif et ne
            constitue pas un conseil professionnel.
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des supports de formation reste la propriété
            exclusive de {siteConfig.legalName}. Toute reproduction,
            représentation ou diffusion, totale ou partielle, est interdite sans
            autorisation préalable écrite.
          </p>

          <h2>Droit applicable</h2>
          <p>
            Les présentes CGV sont soumises au droit français. Tout litige
            relatif à leur interprétation ou à leur exécution sera soumis aux
            tribunaux compétents de Lyon.
          </p>
        </div>
      </section>
    </>
  );
}

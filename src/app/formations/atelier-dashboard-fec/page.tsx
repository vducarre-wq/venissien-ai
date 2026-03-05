import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { faqByPage } from "@/data/faq";
import { SectionHeader } from "@/components/shared/section-header";
import { FaqSection } from "@/components/shared/faq-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  IconCalendar,
  IconArrowRight,
  IconCheckCircle,
  IconMagic,
  IconAction,
  IconPartager,
  IconTime,
  IconTodo,
  IconCash,
  IconSymbole,
  IconEcouter,
  IconSuivre,
  IconKing,
  IconSmile,
} from "@/components/icons";

/* ------------------------------------------------------------------ */
/*  SEO Metadata                                                       */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title:
    "Atelier Dashboard FEC avec Claude - Tableau de bord interactif en 2h | Venissien.ai",
  description:
    "Transformez vos FEC en dashboard interactif en 2h. Atelier live le 17 mars 2026 par Vénissien Ducarre, expert-comptable. 100 % en local, zéro code. +500 professionnels formés.",
  openGraph: {
    title: "Atelier Dashboard FEC avec Claude - 17 mars 2026",
    description:
      "Créez un tableau de bord interactif à partir de vos FEC en 2 heures. Atelier live animé par un expert-comptable praticien.",
    url: "https://venissien.ai/formations/atelier-dashboard-fec",
    type: "website",
  },
};

/* ------------------------------------------------------------------ */
/*  Liens de paiement (Stripe Payment Links à remplacer)               */
/* ------------------------------------------------------------------ */
const PAYMENT_LINK_199 = "https://buy.stripe.com/cNi9AT8umf2c3WP0Xeak000";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const programBlocs = [
  {
    number: 1,
    title: "Le résultat",
    duration: "10 min",
    description:
      "Démonstration du dashboard final en conditions réelles. Import FEC, dashboard interactif en 5 minutes. Avant/après.",
    objective: "Créer le désir. Prouver que ça marche.",
    icon: IconMagic,
  },
  {
    number: 2,
    title: "La logique de construction",
    duration: "25 min",
    description:
      "Identification du besoin, réflexion comptable (indicateurs, seuils, pourquoi), itérations et erreurs.",
    objective: "Transmettre la pensée métier.",
    icon: IconSuivre,
  },
  {
    number: 3,
    title: "Les fonctionnalités Claude utilisées",
    duration: "15 min",
    description:
      "Projets Claude, Artefacts, fonctionnalité Code - uniquement ce qui sert au dashboard.",
    objective: "Donner le minimum technique nécessaire.",
    icon: IconAction,
  },
  {
    number: 4,
    title: "Construction live",
    duration: "45 min",
    description:
      "Recréation du dashboard depuis un FEC anonymisé, étape par étape. Prompt structuré, itérations, corrections.",
    objective: "Démystifier. Montrer que c'est reproductible.",
    icon: IconTodo,
  },
  {
    number: 5,
    title: "Personnalisation et limites",
    duration: "15 min",
    description:
      "Comment adapter les seuils sectoriels et indicateurs. Limites connues, pièges à éviter.",
    objective: "Rendre autonome.",
    icon: IconSymbole,
  },
  {
    number: 6,
    title: "Q&A",
    duration: "10 min",
    description: "Questions en direct. Levez vos derniers freins.",
    objective: "Lever les derniers freins.",
    icon: IconEcouter,
  },
];

const deliverables199 = [
  "Accès au live du 17 mars (17h30–19h30)",
  "Replay intégral sous 48h",
  "Support écrit complet (démarche + prompts structurés)",
  "FEC anonymisé d'exemple",
  "Session Q&A en direct",
];


const guarantees = [
  {
    icon: IconPartager,
    title: "100 % en local",
    description:
      "Aucune donnée ne quitte votre poste. Le dashboard fonctionne dans votre navigateur, sans serveur externe.",
  },
  {
    icon: IconTime,
    title: "Replay inclus",
    description:
      "Pas disponible le 17 mars ? Le replay complet + supports écrits sont envoyés sous 48h.",
  },
  {
    icon: IconAction,
    title: "Zéro code requis",
    description:
      "Tout est montré en partage d'écran, étape par étape. Aucune compétence technique nécessaire.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */
export default function AtelierDashboardFecPage() {
  const faqItems = faqByPage["atelier-dashboard-fec"] || [];


  return (
    <>
      {/* ============================================================ */}
      {/* HERO                                                          */}
      {/* ============================================================ */}
      <section className="relative bg-bg-alt overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-6 text-sm px-4 py-1.5 inline-flex items-center gap-1.5"
            >
              <IconCalendar className="size-3.5" />
              Mardi 17 mars 2026 - 17h30 à 19h30
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-[56px] font-extrabold leading-tight text-foreground tracking-tight">
              Construisez votre outil de{" "}
              <span className="text-primary">data-visualisation</span> avec
              Claude
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
              L&apos;atelier pas-à-pas pour créer des dashboards interactifs à
              partir d&apos;un FEC, sans coder, avec l&apos;IA comme seul outil.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-lg px-8 py-4 font-bold text-base"
              >
                <a href={PAYMENT_LINK_199}>
                  <IconArrowRight className="size-4" />
                  Accéder à l&apos;atelier - 199 € HT
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <IconPartager className="size-5 text-primary" aria-hidden="true" />
                <span className="font-semibold text-foreground">
                  +{siteConfig.stats.professionalsTrainedCount}
                </span>{" "}
                professionnels formés
              </div>
              <div className="flex items-center gap-2">
                <IconKing className="size-5 text-primary" aria-hidden="true" />
                <span className="font-semibold text-foreground">
                  {siteConfig.stats.googleReviewScore}/{siteConfig.stats.googleReviewMax}
                </span>{" "}
                avis Google
              </div>
              <div className="flex items-center gap-2">
                <IconTime className="size-5 text-primary" aria-hidden="true" />
                <span className="font-semibold text-foreground">2h</span> en
                direct
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PROBLÈME                                                      */}
      {/* ============================================================ */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeader
            title="Le problème que vous connaissez"
            subtitle="Dans tous les cabinets, les mêmes frustrations"
          />
          <div className="mt-12 grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: IconTime,
                title: "Des heures sur Excel",
                description:
                  "Vous passez des heures à extraire, formater et présenter les données de vos clients pour chaque rendez-vous bilan.",
              },
              {
                icon: IconSuivre,
                title: "Des outils inadaptés",
                description:
                  "Votre logiciel comptable ne produit pas de tableaux de bord visuels exploitables en rendez-vous. Vous bricolez avec Excel.",
              },
              {
                icon: IconCash,
                title: "Des livrables sous-exploités",
                description:
                  "Vos comptes annuels sont le produit fini de votre travail. Pourtant, vos clients les reçoivent dans un PDF qu'ils ne lisent pas.",
              },
            ].map((item) => (
              <Card key={item.title} className="rounded-2xl card-shadow text-center">
                <CardContent className="flex flex-col items-center gap-4 pt-8">
                  <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="size-7" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SOLUTION - Ce que vous allez obtenir                          */}
      {/* ============================================================ */}
      <section className="py-16 lg:py-24 bg-bg-alt">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeader
            title="Ce que vous allez obtenir"
            subtitle="Un dashboard interactif, généré en 5 minutes depuis un FEC brut"
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: IconTodo,
                title: "CA mensuel N vs N-1",
                description:
                  "Visualisez l'évolution du chiffre d'affaires mois par mois avec comparaison N-1.",
              },
              {
                icon: IconCash,
                title: "SIG interactifs",
                description:
                  "Soldes intermédiaires de gestion dans un tableau hiérarchique dépliable, aligné PCG.",
              },
              {
                icon: IconSuivre,
                title: "Top 5 charges",
                description:
                  "Les 5 premiers postes de charges d'exploitation en pourcentage du CA.",
              },
              {
                icon: IconKing,
                title: "KPIs synthèse",
                description:
                  "CA, marge brute, masse salariale, EBE - avec jauges couleur et alertes automatiques.",
              },
              {
                icon: IconSymbole,
                title: "Répartition du CA",
                description:
                  "Visualisation par compte de TVA ou par activité en graphique circulaire.",
              },
              {
                icon: IconSmile,
                title: "Des clients satisfaits",
                description:
                  "Un livrable visuel et professionnel qui valorise votre travail et renforce la relation client.",
              },
            ].map((feature) => (
              <Card key={feature.title} className="rounded-2xl card-shadow">
                <CardContent className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="rounded-lg px-8 py-4 font-bold text-base"
            >
              <a href={PAYMENT_LINK_199}>
                Je veux ce dashboard
                <IconArrowRight className="size-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FORMAT - Un atelier pensé pour la pratique                     */}
      {/* ============================================================ */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeader
            title="Un format pensé pour la pratique"
            subtitle="2 heures pour passer à l'action sur un sujet précis"
          />
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: IconAction,
                title: "Pratique & Concret",
                description:
                  "Chaque étape est centrée sur un cas d'usage réel que vous pourrez appliquer immédiatement dans votre cabinet.",
              },
              {
                icon: IconEcouter,
                title: "Questions en direct",
                description:
                  "Posez vos questions en temps réel et bénéficiez de réponses adaptées à votre contexte professionnel.",
              },
              {
                icon: IconSymbole,
                title: "Replay disponible",
                description:
                  "L'atelier est enregistré. Revoyez la session à votre rythme et partagez-la avec vos équipes.",
              },
            ].map((feature) => (
              <Card key={feature.title} className="rounded-2xl card-shadow">
                <CardContent className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PROGRAMME - Les 6 blocs                                       */}
      {/* ============================================================ */}
      <section className="py-16 lg:py-24 bg-bg-alt">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeader
            title={"Programme de l'atelier (2h)"}
            subtitle="Mardi 17 mars 2026, de 17h30 à 19h30"
          />
          <div className="mt-12">
            <Accordion type="single" collapsible className="w-full">
              {programBlocs.map((bloc) => (
                <AccordionItem key={bloc.number} value={`bloc-${bloc.number}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <bloc.icon className="size-5" />
                      </div>
                      <div>
                        <span className="font-heading font-semibold text-base">
                          {bloc.number}. {bloc.title}
                        </span>
                        <span className="ml-3 text-sm text-muted-foreground">
                          {bloc.duration}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-14">
                    <p className="text-muted-foreground leading-relaxed">
                      {bloc.description}
                    </p>
                    <p className="mt-2 text-sm font-medium text-primary">
                      Objectif : {bloc.objective}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* GARANTIES                                                     */}
      {/* ============================================================ */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid sm:grid-cols-3 gap-6">
            {guarantees.map((item) => (
              <div key={item.title} className="text-center">
                <div className="flex size-12 mx-auto items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="size-6" />
                </div>
                <h3 className="mt-4 font-heading font-semibold text-base">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* EXPERT                                                        */}
      {/* ============================================================ */}
      <section className="py-16 lg:py-24 bg-bg-alt">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="shrink-0">
              <div className="relative size-32 md:size-40 rounded-2xl overflow-hidden">
                <Image
                  src="/images/venissien-ducarre2.webp"
                  alt="Vénissien Ducarre - Expert-Comptable & Formateur IA"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 128px, 160px"
                />
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold">
                Animé par {siteConfig.founder.name}
              </h2>
              <p className="mt-1 text-primary font-medium">
                {siteConfig.founder.title}
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Expert-comptable et fondateur du cabinet AUM Conseil (68
                clients). Il utilise Claude au quotidien pour ses missions et a
                développé ce dashboard pour ses propres rendez-vous bilan. Plus
                de {siteConfig.stats.professionalsTrainedCount} professionnels
                formés depuis 2023 avec une note de{" "}
                {siteConfig.stats.googleReviewScore}/
                {siteConfig.stats.googleReviewMax} sur Google.
              </p>
              <div className="mt-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/a-propos">
                    En savoir plus
                    <IconArrowRight className="size-3.5 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PRICING                                                       */}
      {/* ============================================================ */}
      <section id="pricing" className="py-16 lg:py-24 bg-bg-alt scroll-mt-20">
        <div className="container mx-auto px-4 max-w-xl">
          <SectionHeader
            title="L'offre"
            subtitle="Paiement unique - accès à vie au replay et aux supports"
          />
          <div className="mt-12">
            <Card className="rounded-2xl card-shadow relative overflow-hidden ring-2 ring-primary">
              <CardContent className="pt-8">
                <Badge variant="secondary" className="mb-4 text-xs">
                  Live + Replay
                </Badge>
                <h3 className="font-heading text-2xl font-bold">
                  Atelier Dashboard FEC
                </h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-primary">
                    199 €
                  </span>
                  <span className="text-muted-foreground text-sm">HT</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Paiement unique
                </p>

                <ul className="mt-6 space-y-3">
                  {deliverables199.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <IconCheckCircle className="size-4 shrink-0 text-success mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-xs text-muted-foreground italic">
                  Nécessite un abonnement Claude Pro (20 $/mois) pour reproduire
                  le dashboard.
                </p>

                <div className="mt-6">
                  <Button
                    asChild
                    size="lg"
                    className="w-full rounded-lg font-bold"
                  >
                    <a href={PAYMENT_LINK_199}>
                      Accéder à l&apos;atelier - 199 € HT
                      <IconArrowRight className="size-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ                                                           */}
      {/* ============================================================ */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeader title="Questions fréquentes" />
          <div className="mt-10">
            <FaqSection items={faqItems} />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA FINAL                                                     */}
      {/* ============================================================ */}
      <section className="relative py-16 lg:py-24 bg-primary overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-3xl mx-auto">
            {"FEC → Dashboard en 2 heures."}
            <br />
            <span className="text-white/80">17 mars 2026 - 17h30.</span>
          </h2>
          <p className="mt-5 text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
            Rejoignez l&apos;atelier et transformez la façon dont vous présentez
            les données à vos clients.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white !text-primary font-bold rounded-lg hover:bg-gray-100 px-8 py-4"
            >
              <a href={PAYMENT_LINK_199}>
                Accéder à l&apos;atelier - 199 € HT
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white rounded-lg hover:bg-white/10 px-8 py-3.5 font-semibold"
            >
              <Link href="/contact">
                Une question ? Contactez-nous
                <IconArrowRight className="size-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* JSON-LD Event Structured Data                                 */}
      {/* ============================================================ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationEvent",
            name: "Atelier Dashboard FEC avec Claude",
            description:
              "Transformez vos FEC en dashboard interactif en 2 heures. Atelier live animé par Vénissien Ducarre, expert-comptable.",
            startDate: "2026-03-17T17:30:00+01:00",
            endDate: "2026-03-17T19:30:00+01:00",
            eventAttendanceMode:
              "https://schema.org/OnlineEventAttendanceMode",
            eventStatus: "https://schema.org/EventScheduled",
            location: {
              "@type": "VirtualLocation",
              url: "https://meet.google.com",
            },
            organizer: {
              "@type": "Organization",
              name: "Venissien.ai - AUM Conseil",
              url: "https://venissien.ai",
            },
            performer: {
              "@type": "Person",
              name: "Vénissien Ducarre",
              jobTitle: "Expert-Comptable & Formateur IA",
            },
            offers: {
              "@type": "Offer",
              name: "Atelier Dashboard FEC - Live + Replay",
              price: "199",
              priceCurrency: "EUR",
              availability: "https://schema.org/InStock",
              url: "https://venissien.ai/formations/atelier-dashboard-fec#pricing",
            },
          }),
        }}
      />
    </>
  );
}

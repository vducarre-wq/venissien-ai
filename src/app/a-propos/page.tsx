import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  IconCash,
  IconTodo,
  IconPartager,
  IconKing,
  IconEcouter,
  IconCalendarDays,
  IconCalendar,
  IconArrowRight,
  IconSymbole,
} from "@/components/icons";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeader } from "@/components/shared/section-header";
import { JsonLd } from "@/components/shared/json-ld";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "À propos — Vénissien Ducarre, Expert-Comptable & Formateur IA",
  description:
    "Découvrez le parcours de Vénissien Ducarre, expert-comptable et formateur IA. Fondateur d'AUM Conseil, il a formé +500 professionnels du chiffre et du droit à l'IA.",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.founder.name,
  jobTitle: siteConfig.founder.title,
  description: siteConfig.founder.bio,
  url: siteConfig.url + "/a-propos",
  image: siteConfig.url + "/images/venissien-portrait.jpeg",
  worksFor: {
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
  },
  sameAs: [siteConfig.contact.linkedinUrl],
  knowsAbout: [
    "Intelligence artificielle",
    "Expertise comptable",
    "Formation professionnelle",
    "ChatGPT",
    "IA générative",
  ],
};

const parcours = [
  {
    icon: IconCash,
    title: "Expert-comptable diplômé",
    description:
      "Fondateur du cabinet AUM Conseil, il exerce au quotidien les missions classiques d'expertise comptable.",
  },
  {
    icon: IconSymbole,
    title: "Pionnier de l'IA en expertise comptable",
    description: `Depuis ${siteConfig.stats.yearStarted}, il explore et intègre l'IA générative dans sa pratique professionnelle.`,
  },
  {
    icon: IconTodo,
    title: `+${siteConfig.stats.professionalsTrainedCount} professionnels formés`,
    description:
      "Experts-comptables, avocats, DAF, collaborateurs de cabinet : des profils variés, un objectif commun.",
  },
  {
    icon: IconKing,
    title: `Note de satisfaction : ${siteConfig.stats.satisfactionScore}/${siteConfig.stats.satisfactionMax}`,
    description: `Sur ${siteConfig.stats.respondentCount} répondants, une note qui reflète la qualité et la pertinence des formations.`,
  },
  {
    icon: IconEcouter,
    title: `${siteConfig.stats.googleReviewCount} avis Google 5 étoiles`,
    description:
      "Des retours authentiques de professionnels qui ont transformé leur pratique grâce à l'IA.",
  },
];

const approche = [
  {
    icon: IconKing,
    title: "Formateur praticien",
    description:
      "Pas de théorie déconnectée : il utilise l'IA au quotidien dans son propre cabinet d'expertise comptable.",
  },
  {
    icon: IconTodo,
    title: "Formation continue sur les évolutions IA",
    description:
      "Veille permanente sur les nouveaux outils et modèles pour proposer des formations toujours à jour.",
  },
  {
    icon: IconSymbole,
    title: "Approche pragmatique pour métiers réglementés",
    description:
      "Des cas d'usage concrets adaptés aux contraintes déontologiques et de confidentialité des professions du chiffre et du droit.",
  },
];

const statsItems = [
  {
    icon: IconPartager,
    value: `${siteConfig.stats.professionalsTrainedCount}+`,
    label: "professionnels formés",
  },
  {
    icon: IconKing,
    value: `${siteConfig.stats.satisfactionScore}/${siteConfig.stats.satisfactionMax}`,
    label: "satisfaction",
  },
  {
    icon: IconEcouter,
    value: String(siteConfig.stats.googleReviewCount),
    label: "avis Google",
  },
  {
    icon: IconCalendarDays,
    value: `Depuis ${siteConfig.stats.yearStarted}`,
    label: "pionnier IA en cabinet",
  },
];

export default function AProposPage() {
  return (
    <>
      <JsonLd data={personJsonLd} />

      <PageHeader
        title="À propos de Vénissien Ducarre"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "À propos", href: "/a-propos" },
        ]}
      />

      {/* Hero bio section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/venissien-portrait.jpeg"
                  alt={`${siteConfig.founder.name}, ${siteConfig.founder.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 288px, 384px"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <p className="text-sm font-medium uppercase tracking-wider text-primary">
                Votre formateur
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
                {siteConfig.founder.name}
              </h2>
              <p className="text-lg text-primary font-medium">
                {siteConfig.founder.title}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {siteConfig.founder.bio}
              </p>
              <p className="text-foreground leading-relaxed font-medium border-l-4 border-primary pl-4">
                Mon objectif : d&eacute;mocratiser l&apos;IA dans les cabinets,
                sans jargon technique, avec des cas concrets issus de ma propre
                pratique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parcours section */}
      <section className="py-16 md:py-24 bg-bg-alt">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeader
            title="Parcours"
            subtitle="De l'expertise comptable à la formation IA : un chemin guidé par la pratique."
          />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {parcours.map((item) => (
              <Card key={item.title} className="rounded-2xl card-shadow">
                <CardContent className="flex flex-col gap-4">
                  <div className="flex items-center justify-center size-12 rounded-xl bg-primary/10 shrink-0">
                    <item.icon
                      className="size-6 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-heading text-lg font-semibold">
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

      {/* Approche section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeader
            title="Approche & convictions"
            subtitle="Une formation ancrée dans la réalité du terrain, pas dans la théorie."
          />

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {approche.map((item) => (
              <div key={item.title} className="flex flex-col gap-4">
                <div className="flex items-center justify-center size-12 rounded-xl bg-primary/10 shrink-0">
                  <item.icon
                    className="size-6 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-heading text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="bg-primary py-14" aria-label="Chiffres clés">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {statsItems.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center gap-3"
              >
                <stat.icon
                  className="size-8 text-white/80"
                  aria-hidden="true"
                />
                <p className="text-3xl md:text-4xl font-heading font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-white/80 text-sm uppercase tracking-wider font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <SectionHeader
            title="Échangeons sur vos besoins"
            subtitle="Vous souhaitez intégrer l'IA dans votre cabinet ou former vos équipes ? Prenons le temps d'en discuter."
          />
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Nous contacter
                <IconArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href={siteConfig.contact.googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconCalendar className="size-4" />
                R&eacute;server un appel d&eacute;couverte
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formations } from "@/data/formations";
import { faqByPage } from "@/data/faq";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site-config";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeader } from "@/components/shared/section-header";
import { FaqSection } from "@/components/shared/faq-section";
import { JsonLd } from "@/components/shared/json-ld";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { LeadForm } from "@/components/shared/lead-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  IconCheckCircle,
  IconTime,
  IconPartager,
  IconTodo,
  IconSuivre,
  IconKing,
  IconArrowRight,
  IconCalendarDays,
  IconMagic,
  IconCash,
  IconAction,
} from "@/components/icons";

// ---------------------------------------------------------------------------
// Static params & metadata
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return formations.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const formation = formations.find((f) => f.slug === slug);
  if (!formation) return {};
  return {
    title: formation.seo.title,
    description: formation.seo.description,
    alternates: { canonical: `/formations/${slug}` },
  };
}

// ---------------------------------------------------------------------------
// Helper: FAQ key mapping
// ---------------------------------------------------------------------------

function getFaqKey(slug: string): string | null {
  const map: Record<string, string> = {
    "niveau-1-initiation-ia": "niveau-1",
    "niveau-2-perfectionnement": "niveau-2",
  };
  return map[slug] ?? null;
}

// ---------------------------------------------------------------------------
// Coming-soon formation page (N3)
// ---------------------------------------------------------------------------

function ComingSoonFormation({
  formation,
}: {
  formation: (typeof formations)[number];
}) {
  const pillars = [
    {
      icon: IconMagic,
      title: "Diagnostic et stratégie IA",
      description: "Évaluer la maturité IA de votre cabinet et définir une feuille de route adaptée à vos objectifs",
    },
    {
      icon: IconAction,
      title: "Gouvernance et conformité",
      description: "Mettre en place les règles d'usage, la gestion de la confidentialité et le respect des contraintes déontologiques",
    },
    {
      icon: IconPartager,
      title: "Formation des équipes",
      description: "Piloter la montée en compétences de chaque profil : associés, chefs de mission, collaborateurs",
    },
    {
      icon: IconSuivre,
      title: "Processus et outils",
      description: "Sélectionner les solutions IA pertinentes et les intégrer dans vos workflows métier",
    },
  ];

  return (
    <>
      <PageHeader
        title={formation.title}
        description={formation.subtitle}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Formations", href: "/formations" },
          { label: formation.shortTitle, href: `/formations/${formation.slug}` },
        ]}
      />

      {/* Coming-soon badge */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-1.5">
            <IconMagic className="size-3.5 mr-1.5" />
            Bientôt disponible
          </Badge>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {formation.description}
          </p>
        </div>
      </section>

      {/* Pillars / Objectives */}
      <section className="py-16 lg:py-24 bg-bg-alt">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeader
            title="Ce que couvre le programme"
            subtitle="Un accompagnement complet pour passer de l'expérimentation à l'adoption structurée"
          />
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="rounded-2xl card-shadow">
                <CardContent className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <pillar.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <SectionHeader title="À qui s'adresse ce programme ?" />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {formation.audience.map((a) => (
              <Badge key={a} variant="outline" className="text-sm px-4 py-1.5">
                {a}
              </Badge>
            ))}
          </div>
          {formation.prerequisites && (
            <p className="mt-6 text-sm text-muted-foreground">
              <strong>Prérequis :</strong> {formation.prerequisites}
            </p>
          )}
        </div>
      </section>

      {/* Lead form */}
      <section className="py-16 lg:py-24 bg-bg-alt">
        <div className="container mx-auto px-4 max-w-lg">
          <SectionHeader
            title="Soyez informé du lancement"
            subtitle="Laissez-nous vos coordonnées pour être parmi les premiers informés de l'ouverture du Niveau 3."
          />
          <div className="mt-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}

// ---------------------------------------------------------------------------
// Full formation page (N1, N2)
// ---------------------------------------------------------------------------

function FullFormation({
  formation,
}: {
  formation: (typeof formations)[number];
}) {
  const faqKey = getFaqKey(formation.slug);
  const faqItems = faqKey ? faqByPage[faqKey] : null;
  const featuredTestimonials = testimonials.filter((t) => t.featured).slice(0, 3);

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: formation.title,
    description: formation.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "onsite",
      duration: formation.duration,
      instructor: {
        "@type": "Person",
        name: siteConfig.founder.name,
        jobTitle: siteConfig.founder.title,
      },
    },
    ...(formation.pricing.inter && {
      offers: {
        "@type": "Offer",
        price: formation.pricing.inter.amount.toString(),
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
    }),
  };

  return (
    <>
      <JsonLd data={courseJsonLd} />

      <PageHeader
        title={formation.title}
        description={formation.subtitle}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Formations", href: "/formations" },
          { label: formation.shortTitle, href: `/formations/${formation.slug}` },
        ]}
      />

      {/* Quick info cards */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid sm:grid-cols-3 gap-6">
            <Card className="rounded-2xl card-shadow">
              <CardContent className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <IconTime className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Durée</p>
                  <p className="font-semibold">{formation.duration}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl card-shadow">
              <CardContent className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <IconPartager className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Public visé</p>
                  <p className="font-semibold">
                    {formation.audience.slice(0, 2).join(", ")}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl card-shadow">
              <CardContent className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <IconTodo className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Prérequis</p>
                  <p className="font-semibold">
                    {formation.prerequisites ?? "Aucun prérequis"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 lg:py-24 bg-bg-alt">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeader
            title="Objectifs pédagogiques"
            subtitle="Ce que vous saurez faire à l'issue de la formation"
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {formation.objectives.map((objective) => (
              <li key={objective} className="flex items-start gap-3">
                <IconCheckCircle className="size-5 shrink-0 text-primary mt-0.5" />
                <span className="text-sm leading-relaxed">{objective}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Programme (modules) */}
      {formation.modules.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeader
              title="Programme détaillé"
              subtitle={`${formation.modules.length} modules pour une montée en compétences progressive`}
            />
            <Accordion type="single" collapsible className="mt-10 w-full">
              {formation.modules.map((mod) => (
                <AccordionItem
                  key={mod.number}
                  value={`module-${mod.number}`}
                >
                  <AccordionTrigger className="text-left text-base font-medium">
                    <span className="flex items-center gap-3">
                      <Badge variant="outline" className="shrink-0 tabular-nums">
                        {mod.number}
                      </Badge>
                      <span>{mod.title}</span>
                      <span className="ml-auto text-xs font-normal text-muted-foreground hidden sm:inline">
                        {mod.duration}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-10">
                      <p className="mb-3 text-xs text-muted-foreground sm:hidden">
                        {mod.duration}
                      </p>
                      <ul className="grid gap-2">
                        {mod.topics.map((topic) => (
                          <li
                            key={topic}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <IconTodo className="size-3.5 shrink-0 mt-0.5 text-primary/60" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* Pedagogy */}
      {formation.pedagogy.length > 0 && (
        <section className="py-16 lg:py-24 bg-bg-alt">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeader
              title="Méthode pédagogique"
              subtitle="Une approche concrète et orientée métier"
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {formation.pedagogy.map((item) => (
                <Card key={item} className="rounded-2xl card-shadow">
                  <CardContent className="flex items-start gap-3">
                    <IconSuivre className="size-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Results */}
      {formation.results.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeader
              title="Résultats attendus"
              subtitle="Ce que vous emporterez avec vous dès le lendemain"
            />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {formation.results.map((result) => (
                <li key={result} className="flex items-start gap-3">
                  <IconKing className="size-5 shrink-0 text-primary mt-0.5" />
                  <span className="text-sm leading-relaxed">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Pricing */}
      <section className="py-16 lg:py-24 bg-bg-alt">
        <div className="container mx-auto px-4 max-w-2xl">
          <SectionHeader title="Tarifs" subtitle="Deux formats pour répondre à vos besoins" />
          <div className="mt-10">
            <Tabs defaultValue="inter" className="w-full">
              <TabsList className="mx-auto grid w-full max-w-xs grid-cols-2">
                <TabsTrigger value="inter">
                  <IconPartager className="size-4" />
                  Inter
                </TabsTrigger>
                <TabsTrigger value="intra">
                  <IconCash className="size-4" />
                  Intra
                </TabsTrigger>
              </TabsList>

              {/* Inter pricing */}
              <TabsContent value="inter">
                <Card className="mt-6 rounded-2xl card-shadow">
                  <CardContent className="text-center space-y-4">
                    <h3 className="font-heading text-lg font-semibold">
                      Formation inter-entreprises
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Rejoignez une session ouverte avec d'autres professionnels
                    </p>
                    <Separator />
                    {formation.pricing.inter ? (
                      <div>
                        <span className="text-4xl font-bold font-heading">
                          {formation.pricing.inter.amount}&nbsp;&euro;
                        </span>
                        <span className="text-muted-foreground ml-1">
                          HT / personne
                        </span>
                      </div>
                    ) : (
                      <p className="text-muted-foreground">
                        Tarif sur demande
                      </p>
                    )}
                    <ul className="text-sm text-left space-y-2 max-w-xs mx-auto">
                      <li className="flex items-center gap-2">
                        <IconCheckCircle className="size-4 text-primary shrink-0" />
                        Sessions à Lyon ou en distanciel
                      </li>
                      <li className="flex items-center gap-2">
                        <IconCheckCircle className="size-4 text-primary shrink-0" />
                        16 participants maximum
                      </li>
                      <li className="flex items-center gap-2">
                        <IconCheckCircle className="size-4 text-primary shrink-0" />
                        Support post-formation inclus
                      </li>
                    </ul>
                    <Button asChild size="lg" className="w-full max-w-xs">
                      <Link href={siteConfig.contact.googleCalendarUrl} target="_blank" rel="noopener noreferrer">
                        <IconCalendarDays className="size-4 mr-2" />
                        Réserver un créneau
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Intra pricing */}
              <TabsContent value="intra">
                <Card className="mt-6 rounded-2xl card-shadow">
                  <CardContent className="text-center space-y-4">
                    <h3 className="font-heading text-lg font-semibold">
                      Formation intra-entreprise
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Formation dédiée dans vos locaux ou en distanciel
                    </p>
                    <Separator />
                    <div>
                      <span className="text-4xl font-bold font-heading">
                        {formation.pricing.intra.amount}&nbsp;&euro;
                      </span>
                      <span className="text-muted-foreground ml-1">
                        HT / jour
                      </span>
                    </div>
                    <ul className="text-sm text-left space-y-2 max-w-xs mx-auto">
                      <li className="flex items-center gap-2">
                        <IconCheckCircle className="size-4 text-primary shrink-0" />
                        Contenu adapté à votre cabinet
                      </li>
                      <li className="flex items-center gap-2">
                        <IconCheckCircle className="size-4 text-primary shrink-0" />
                        Dans vos locaux partout en France
                      </li>
                      <li className="flex items-center gap-2">
                        <IconCheckCircle className="size-4 text-primary shrink-0" />
                        Nombre de participants flexible
                      </li>
                    </ul>
                    <Button asChild size="lg" className="w-full max-w-xs">
                      <Link href={siteConfig.contact.googleCalendarUrl} target="_blank" rel="noopener noreferrer">
                        <IconCalendarDays className="size-4 mr-2" />
                        Demander un devis
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeader
            title="Ce qu'en disent les participants"
            subtitle={`${siteConfig.stats.satisfactionScore}/${siteConfig.stats.satisfactionMax} de satisfaction sur ${siteConfig.stats.respondentCount} répondants`}
          />
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqItems && faqItems.length > 0 && (
        <section className="py-16 lg:py-24 bg-bg-alt">
          <div className="container mx-auto px-4 max-w-3xl">
            <FaqSection items={faqItems} title="Questions fréquentes" />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <SectionHeader
            title="Prêt à vous former ?"
            subtitle="Réservez un appel gratuit de 15 minutes pour définir la formation adaptée à vos besoins."
          />
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href={siteConfig.contact.googleCalendarUrl} target="_blank" rel="noopener noreferrer">
                <IconCalendarDays className="size-4 mr-2" />
                Réserver un appel
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Nous contacter
                <IconArrowRight className="size-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default async function FormationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const formation = formations.find((f) => f.slug === slug);

  if (!formation) notFound();

  if (formation.isComingSoon) {
    return <ComingSoonFormation formation={formation} />;
  }

  return <FullFormation formation={formation} />;
}

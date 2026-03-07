import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  IconEcouter,
  IconSymbole,
  IconCash,
  IconAction,
  IconTime,
  IconPartager,
  IconCalendarDays,
  IconArrowRight,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Conférences IA pour experts-comptables et avocats",
  description:
    "Interventions et conférences sur l'IA générative pour vos événements professionnels. Par Vénissien Ducarre, expert-comptable et formateur IA. Demandez un devis.",
  alternates: { canonical: "/formations/conferences" },
};

const themes = [
  {
    icon: IconSymbole,
    title: "IA générative et métiers du chiffre",
    description:
      "Comprendre les fondamentaux de l'IA générative et ses applications concrètes pour les experts-comptables, commissaires aux comptes et leurs collaborateurs.",
  },
  {
    icon: IconEcouter,
    title: "ChatGPT au quotidien en cabinet",
    description:
      "Comment ChatGPT peut transformer les pratiques du cabinet : rédaction, analyse, extraction de données et communication client. Avec démonstrations live.",
  },
  {
    icon: IconCash,
    title: "L'IA Act et ses impacts pour les professions réglementées",
    description:
      "Décryptage de la réglementation européenne sur l'IA, ses implications pour les métiers du chiffre et du droit, et les bonnes pratiques de conformité.",
  },
  {
    icon: IconAction,
    title: "Piloter la transformation IA de son cabinet",
    description:
      "Comment structurer l'intégration de l'IA dans un cabinet : gouvernance, formation des équipes, choix des outils et pilotage du changement.",
  },
] as const;

const formats = [
  {
    icon: IconSymbole,
    title: "Keynote",
    duration: "20 - 45 min",
    description:
      "Intervention percutante en ouverture ou clôture d'événement. Un message fort pour sensibiliser et inspirer votre audience.",
  },
  {
    icon: IconEcouter,
    title: "Conférence",
    duration: "45 min - 1h30",
    description:
      "Intervention complète avec démonstrations live et temps de questions-réponses. Idéale pour un événement professionnel ou une assemblée générale.",
  },
  {
    icon: IconPartager,
    title: "Table ronde",
    duration: "1h - 1h30",
    description:
      "Échanges avec d'autres intervenants autour des enjeux de l'IA pour votre secteur. Format participatif et dynamique.",
  },
] as const;

export default function ConferencesPage() {
  return (
    <>
      <PageHeader
        title="Conférences IA pour événements professionnels"
        description="Sensibilisez vos équipes, associés ou partenaires aux enjeux de l'IA générative. Des interventions concrètes, adaptées aux professions du chiffre et du droit."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Formations", href: "/formations" },
          { label: "Conférences", href: "/formations/conferences" },
        ]}
      />

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            L&apos;IA générative transforme les métiers du chiffre et du droit.
            Mais entre le battage médiatique et la réalité terrain, vos
            collaborateurs ont besoin d&apos;un éclairage concret, donné par
            quelqu&apos;un qui pratique leur métier.{" "}
            {siteConfig.founder.name} intervient depuis{" "}
            {siteConfig.stats.yearStarted} auprès de cabinets, ordres
            professionnels et événements sectoriels. Fort de plus de{" "}
            {siteConfig.stats.professionalsTrainedCount} professionnels formés,
            il propose des interventions adaptées à votre contexte et à votre
            audience.
          </p>
        </div>
      </section>

      {/* Themes */}
      <section className="py-12 md:py-16 bg-bg-alt">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeader
            title="Thèmes de conférence"
            subtitle="Des sujets adaptés aux enjeux actuels de votre profession"
          />
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {themes.map((theme) => (
              <Card key={theme.title} className="rounded-2xl card-shadow">
                <CardContent className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <theme.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg">
                      {theme.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {theme.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeader
            title="Formats d'intervention"
            subtitle="Choisissez le format le mieux adapté à votre événement"
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {formats.map((format) => (
              <Card key={format.title} className="text-center rounded-2xl card-shadow">
                <CardContent className="flex flex-col items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <format.icon className="size-6" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">
                    {format.title}
                  </h3>
                  <Badge variant="outline" className="text-xs">
                    <IconTime className="size-3 mr-1" />
                    {format.duration}
                  </Badge>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {format.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker bio */}
      <section className="py-12 md:py-16 bg-bg-alt">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <SectionHeader title="Votre intervenant" />
          <div className="mt-8 space-y-4">
            <p className="font-heading text-xl font-semibold">
              {siteConfig.founder.name}
            </p>
            <p className="text-sm text-muted-foreground">
              {siteConfig.founder.title}
            </p>
            <Separator className="mx-auto max-w-xs" />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
              {siteConfig.founder.bio}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <SectionHeader
            title="Invitez l'IA dans votre prochain événement"
            subtitle="Discutons de votre projet pour définir le format, le thème et la durée les plus pertinents pour votre audience."
          />
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link
                href={siteConfig.contact.googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
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

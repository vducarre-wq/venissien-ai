import type { Metadata } from "next";
import Link from "next/link";
import { formations } from "@/data/formations";
import { faqByPage } from "@/data/faq";
import { FaqSection } from "@/components/shared/faq-section";
import { PageHeader } from "@/components/shared/page-header";
import { JsonLd } from "@/components/shared/json-ld";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { IconTime, IconPartager, IconArrowRight, IconMagic } from "@/components/icons";

export const metadata: Metadata = {
  title: "Formations IA pour cabinets comptables et avocats | Venissien.ai",
  description:
    "3 niveaux de formation IA : initiation ChatGPT, prompt engineering avancé, transformation cabinet. Par un expert-comptable praticien. Réservez votre place.",
};

const coursesJsonLd = {
  "@context": "https://schema.org",
  "@graph": formations.map((f) => ({
    "@type": "Course",
    name: f.title,
    description: f.description,
    provider: {
      "@type": "Organization",
      name: "Venissien.ai",
      url: "https://venissien.ai",
    },
    ...(f.pricing.inter && {
      offers: {
        "@type": "Offer",
        price: f.pricing.inter.amount.toString(),
        priceCurrency: "EUR",
        availability: f.isComingSoon
          ? "https://schema.org/PreOrder"
          : "https://schema.org/InStock",
      },
    }),
  })),
};

export default function FormationsPage() {
  return (
    <>
      <JsonLd data={coursesJsonLd} />

      <PageHeader
        title="Formations IA pour professionnels du chiffre et du droit"
        description="Chaque formation est conçue et animée par Vénissien Ducarre, expert-comptable praticien. Le contenu s'appuie sur des cas d'usage réels, issus de sa pratique quotidienne au cabinet AUM Conseil. Choisissez le niveau adapté à votre profil."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Formations", href: "/formations" },
        ]}
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {formations.map((formation) => (
              <Card
                key={formation.slug}
                className={`relative flex flex-col rounded-2xl card-shadow card-shadow-hover transition-all duration-300 ${
                  formation.level === 2
                    ? "border-primary ring-2 ring-primary/20"
                    : ""
                } ${formation.isComingSoon ? "opacity-90" : ""}`}
              >
                {formation.level === 2 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-white">
                      Le plus populaire
                    </Badge>
                  </div>
                )}

                <CardHeader className="space-y-3">
                  <Badge
                    variant={formation.isComingSoon ? "secondary" : "outline"}
                    className="w-fit"
                  >
                    {formation.isComingSoon ? (
                      <>
                        <IconMagic className="size-3 mr-1" /> Bientôt disponible
                      </>
                    ) : (
                      formation.badgeLabel
                    )}
                  </Badge>
                  <h3 className="font-heading text-xl font-bold">
                    {formation.shortTitle}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {formation.description}
                  </p>
                </CardHeader>

                <CardContent className="flex-1 space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <IconTime className="size-4" />
                    <span>{formation.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <IconPartager className="size-4" />
                    <span>{formation.audience.slice(0, 2).join(", ")}</span>
                  </div>

                  {!formation.isComingSoon && (
                    <div className="pt-4 border-t">
                      {formation.pricing.inter && (
                        <div className="mb-1">
                          <span className="text-2xl font-bold font-heading">
                            {formation.pricing.inter.amount} €
                          </span>
                          <span className="text-muted-foreground text-sm ml-1">
                            HT / personne (inter)
                          </span>
                        </div>
                      )}
                      <div className="text-sm text-muted-foreground">
                        ou {formation.pricing.intra.amount} € HT / jour (intra)
                      </div>
                    </div>
                  )}
                </CardContent>

                <CardFooter>
                  <Button
                    asChild
                    className="w-full"
                    variant={formation.level === 2 ? "default" : "outline"}
                  >
                    <Link href={`/formations/${formation.slug}`}>
                      {formation.isComingSoon ? "Être informé" : "En savoir plus"}
                      <IconArrowRight className="size-4 ml-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-bg-alt">
        <div className="container mx-auto px-4 max-w-3xl">
          <FaqSection
            items={faqByPage["formations-overview"]}
            title="Questions fréquentes"
          />
        </div>
      </section>
    </>
  );
}

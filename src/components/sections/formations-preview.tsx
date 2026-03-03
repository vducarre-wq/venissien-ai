import Link from "next/link";
import { IconArrowRight, IconTime } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { formations } from "@/data/formations";

export function FormationsPreview() {
  return (
    <section className="py-16 lg:py-24 bg-bg-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Nos formations"
          subtitle="Trois niveaux progressifs, conçus par un expert-comptable praticien."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {formations.map((formation) => (
            <Card
              key={formation.slug}
              className={`relative h-full flex flex-col card-shadow card-shadow-hover transition-all duration-300 rounded-2xl ${
                formation.isComingSoon ? "opacity-80" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Badge
                    variant={formation.isComingSoon ? "secondary" : "default"}
                  >
                    {formation.badgeLabel}
                  </Badge>
                  {formation.isComingSoon && (
                    <Badge variant="outline" className="text-xs">
                      Bientôt disponible
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl">
                  {formation.shortTitle}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {formation.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col gap-3 mt-auto">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <IconTime className="size-4" aria-hidden="true" />
                  <span>{formation.duration}</span>
                </div>
                <p className="text-lg font-bold text-foreground">
                  {formation.pricing.inter
                    ? `${formation.pricing.inter.amount} ${formation.pricing.inter.unit}`
                    : "Sur devis"}
                </p>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  variant={formation.isComingSoon ? "secondary" : "default"}
                  className="w-full rounded-lg"
                  disabled={formation.isComingSoon}
                >
                  <Link href={`/formations/${formation.slug}`}>
                    En savoir plus
                    <IconArrowRight className="size-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

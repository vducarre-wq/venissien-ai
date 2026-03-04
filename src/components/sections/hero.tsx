import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconCalendar, IconPartager, IconKing, IconStar, IconAction, IconMagic, IconSmile } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RotatingText } from "@/components/ui/rotating-text";
import { siteConfig } from "@/data/site-config";

const rotatingWords = [
  "Experts-Comptables",
  "Avocats",
  "Collaborateurs",
  "Assistants",
];

const badges = [
  "Gagnez du temps sur vos missions",
  "Renforcez votre relation client",
  "Développez de nouvelles missions",
];

const badgeIcons = [IconAction, IconKing, IconMagic];

export function Hero() {
  return (
    <section className="relative flex items-center bg-bg-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-6 overflow-hidden">
            <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-extrabold leading-tight text-foreground">
              Conseils & Formations IA pour{" "}
              <RotatingText
                words={rotatingWords}
                className="text-primary"
              />
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
              Intégrez l&apos;IA dans votre pratique quotidienne. Des formations
              conçues et animées par un expert-comptable qui utilise ces outils
              au cabinet, chaque jour.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {badges.map((label, index) => {
                const Icon = badgeIcons[index];
                return (
                  <Badge key={label} variant="secondary" className="text-base px-4 py-2">
                    <Icon className="size-5 text-primary" aria-hidden="true" />
                    {label}
                  </Badge>
                );
              })}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button asChild size="lg" className="rounded-lg px-8 py-3.5 font-semibold">
                <a
                  href={siteConfig.contact.googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconCalendar className="size-4" />
                  Réserver un appel découverte
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3.5 font-semibold">
                <Link href="/formations">
                  Découvrir les formations
                  <IconArrowRight className="size-4" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <IconPartager className="size-5 text-primary" aria-hidden="true" />
                <span className="font-semibold text-foreground">
                  +{siteConfig.stats.professionalsTrainedCount}
                </span>{" "}
                professionnels formés
              </div>
              <div className="flex items-center gap-2">
                <IconSmile className="size-5 text-primary" aria-hidden="true" />
                <span className="font-semibold text-foreground">
                  {siteConfig.stats.satisfactionScore}/{siteConfig.stats.satisfactionMax}
                </span>{" "}
                de satisfaction
              </div>
              <a
                href={siteConfig.stats.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <IconStar className="size-5 text-yellow-400" aria-hidden="true" />
                <span className="font-semibold text-foreground">
                  5/5
                </span>{" "}
                {siteConfig.stats.googleReviewCount} avis Google
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/images/hero-group.png"
                alt="Formation IA pour professionnels du chiffre et du droit"
                fill
                className="object-contain rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { IconCalendar, IconArrowRight } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";

export function CtaSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-primary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-3xl mx-auto">
          Prêt à intégrer l&apos;IA dans votre quotidien ?
        </h2>
        <p className="mt-5 text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
          Réservez un appel découverte gratuit de 15 minutes pour discuter de
          vos besoins.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-primary font-bold rounded-lg hover:bg-gray-100 px-8 py-4"
          >
            <a
              href={siteConfig.contact.googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconCalendar className="size-4" />
              Réserver un appel
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-white text-white rounded-lg hover:bg-white/10 px-8 py-3.5 font-semibold"
          >
            <Link href="/formations">
              Voir les formations
              <IconArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

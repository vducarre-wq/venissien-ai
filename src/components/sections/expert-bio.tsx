import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconKing, IconCash, IconTodo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";

const credentials = [
  {
    icon: IconCash,
    label: "Fondateur du cabinet AUM Conseil",
  },
  {
    icon: IconTodo,
    label: "Formateur IA depuis 2023",
  },
  {
    icon: IconKing,
    label: "Membre de l'Ordre des Experts-Comptables",
  },
];

export function ExpertBio() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Portrait */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden">
              <Image
                src="/images/venissien-portrait.jpeg"
                alt={`${siteConfig.founder.name}, ${siteConfig.founder.title}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 288px, 384px"
              />
            </div>
          </div>

          {/* Bio content */}
          <div className="flex flex-col gap-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Votre formateur
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              {siteConfig.founder.name}
            </h2>
            <p className="text-lg text-primary font-medium">
              {siteConfig.founder.title}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {siteConfig.founder.bio}
            </p>

            {/* Credentials */}
            <ul className="flex flex-col gap-3 pt-2" aria-label="Qualifications">
              {credentials.map((credential) => (
                <li
                  key={credential.label}
                  className="flex items-center gap-3 text-sm"
                >
                  <div className="flex items-center justify-center size-8 rounded-full bg-primary/10 shrink-0">
                    <credential.icon
                      className="size-4 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <span>{credential.label}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button asChild variant="outline" size="lg" className="rounded-lg">
                <Link href="/a-propos">
                  En savoir plus
                  <IconArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

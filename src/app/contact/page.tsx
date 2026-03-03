import type { Metadata } from "next";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconLinkedin,
  IconCalendar,
  IconTime,
} from "@/components/icons";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeader } from "@/components/shared/section-header";
import { LeadForm } from "@/components/shared/lead-form";
import { GoogleCalendarEmbed } from "@/components/shared/google-calendar-embed";
import { JsonLd } from "@/components/shared/json-ld";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Contact - Formation IA pour experts-comptables | Venissien.ai",
  description:
    "Une question sur nos formations IA ? Un projet de formation intra ? Contactez-nous. Réponse sous 24h. Appel découverte gratuit de 15 minutes.",
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact - Venissien.ai",
  url: siteConfig.url + "/contact",
  mainEntity: {
    "@type": "Organization",
    name: siteConfig.name,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lyon",
      addressCountry: "FR",
    },
  },
};

const contactInfo = [
  {
    icon: IconMail,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: IconPhone,
    label: "Téléphone",
    value: siteConfig.contact.phoneDisplay,
    href: `tel:${siteConfig.contact.phone}`,
  },
  {
    icon: IconMapPin,
    label: "Localisation",
    value: siteConfig.contact.location,
    href: undefined,
  },
  {
    icon: IconLinkedin,
    label: "LinkedIn",
    value: "Profil LinkedIn",
    href: siteConfig.contact.linkedinUrl,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageJsonLd} />

      <PageHeader
        title="Contactez-nous"
        description="Une question ? Un projet de formation ? Échangeons."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      {/* Main content: two-column layout */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left column: Lead form */}
            <div>
              <SectionHeader
                title="Envoyez-nous un message"
                subtitle="Décrivez votre besoin et nous vous répondons sous 24h."
                centered={false}
              />
              <LeadForm className="mt-8" />
            </div>

            {/* Right column: Calendar + contact info */}
            <div className="flex flex-col gap-8">
              {/* Calendar booking card */}
              <Card className="rounded-2xl card-shadow border-primary/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                      <IconCalendar
                        className="size-5 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold">
                        R&eacute;server un appel d&eacute;couverte
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        15 minutes, gratuit et sans engagement
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button asChild size="lg" className="w-full">
                    <a
                      href={siteConfig.contact.googleCalendarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconCalendar className="size-4" />
                      Choisir un cr&eacute;neau
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Google Calendar embed */}
              <GoogleCalendarEmbed
                url={siteConfig.contact.googleCalendarUrl}
                className="min-h-[500px]"
              />

              {/* Direct contact info */}
              <Card className="rounded-2xl card-shadow">
                <CardHeader className="pb-3">
                  <h3 className="font-heading text-lg font-semibold">
                    Coordonn&eacute;es directes
                  </h3>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="flex items-center justify-center size-9 rounded-lg bg-muted shrink-0">
                        <item.icon
                          className="size-4 text-muted-foreground"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">
                          {item.label}
                        </span>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-medium hover:text-primary transition-colors"
                            {...(item.external
                              ? {
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                }
                              : {})}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-sm font-medium">
                            {item.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance bottom */}
      <section className="py-12 bg-bg-alt">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="flex items-center justify-center gap-2 text-primary mb-3">
            <IconTime className="size-5" aria-hidden="true" />
          </div>
          <h2 className="font-heading text-2xl font-bold tracking-tight">
            R&eacute;ponse garantie sous 24h
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Que vous pr&eacute;f&eacute;riez le formulaire, un appel ou un
            email, nous nous engageons &agrave; vous r&eacute;pondre en moins de
            24 heures ouvr&eacute;es.
          </p>
        </div>
      </section>
    </>
  );
}

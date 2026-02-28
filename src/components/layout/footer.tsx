import Link from "next/link";
import Image from "next/image";
import { IconMail, IconPhone, IconMapPin, IconLinkedin } from "@/components/icons";
import { footerNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 -- Brand */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/images/logo-venissien-ai.png"
                alt={siteConfig.name}
                width={140}
                height={38}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              {siteConfig.founder.shortBio}
            </p>
          </div>

          {/* Column 2 -- Formations */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">
              Formations
            </h3>
            <ul className="space-y-2.5">
              {footerNavigation.formations.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 -- Entreprise */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">
              Entreprise
            </h3>
            <ul className="space-y-2.5">
              {footerNavigation.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {footerNavigation.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 -- Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2.5 text-sm text-gray-400 transition-colors hover:text-primary"
                >
                  <IconMail className="size-4 shrink-0" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center gap-2.5 text-sm text-gray-400 transition-colors hover:text-primary"
                >
                  <IconPhone className="size-4 shrink-0" />
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2.5 text-sm text-gray-400">
                  <IconMapPin className="size-4 shrink-0" />
                  {siteConfig.contact.location}
                </span>
              </li>
              <li>
                <a
                  href={siteConfig.contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-gray-400 transition-colors hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <IconLinkedin className="size-4 shrink-0" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} venissien.ai &mdash; AUM Conseil. Tous droits r&eacute;serv&eacute;s.
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { IconChevronRight } from "@/components/icons";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
}

export function PageHeader({
  title,
  description,
  breadcrumbs,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "w-full bg-bg-alt border-b",
        className
      )}
    >
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Fil d'Ariane" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <li key={crumb.href} className="flex items-center gap-1">
                    {index > 0 && (
                      <IconChevronRight className="size-3.5 shrink-0" aria-hidden="true" />
                    )}
                    {isLast ? (
                      <span aria-current="page" className="text-foreground font-medium">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="hover:text-primary transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { blogArticles, formatDate } from "@/data/blog";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IconArrowRight, IconTime } from "@/components/icons";
import { JsonLd } from "@/components/shared/json-ld";

export const metadata: Metadata = {
  title: "Blog – Vision & décryptage IA | Venissien.ai",
  description:
    "Articles, analyses et points de vue de Vénissien Ducarre sur l'IA générative appliquée aux métiers du chiffre et du droit. Décryptage, retours d'expérience et convictions.",
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog Venissien.ai",
  description:
    "Articles et analyses sur l'IA générative pour les professionnels du chiffre et du droit.",
  url: "https://venissien.ai/blog",
  author: {
    "@type": "Person",
    name: "Vénissien Ducarre",
    jobTitle: "Expert-Comptable & Formateur IA",
  },
  publisher: {
    "@type": "Organization",
    name: "Venissien.ai",
    url: "https://venissien.ai",
  },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={blogJsonLd} />

      <PageHeader
        title="Blog"
        description="Analyses, retours d'expérience et convictions sur l'IA générative appliquée aux métiers du chiffre et du droit."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article) => (
              <Card
                key={article.slug}
                className="flex flex-col rounded-2xl card-shadow card-shadow-hover transition-all duration-300"
              >
                <CardHeader className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="w-fit">
                      {article.category}
                    </Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <IconTime className="size-3" />
                      {article.readingTime}
                    </span>
                  </div>
                  <h2 className="font-heading text-xl font-bold leading-tight">
                    {article.title}
                  </h2>
                </CardHeader>

                <CardContent className="flex-1">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                </CardContent>

                <CardFooter className="flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">
                    <span>{formatDate(article.publishedAt)}</span>
                  </div>
                  <Button asChild variant="ghost" size="sm">
                    <Link href={`/blog/${article.slug}`}>
                      Lire
                      <IconArrowRight className="size-4 ml-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

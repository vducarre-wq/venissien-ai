import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogArticles, getArticleBySlug, formatDate } from "@/data/blog";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconArrowLeft, IconTime } from "@/components/icons";
import { JsonLd } from "@/components/shared/json-ld";
import { siteConfig } from "@/data/site-config";

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: `${article.title} | Blog Venissien.ai`,
    description: article.excerpt,
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Venissien.ai",
      url: "https://venissien.ai",
    },
    mainEntityOfPage: `https://venissien.ai/blog/${article.slug}`,
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />

      <PageHeader
        title={article.title}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: article.title, href: `/blog/${article.slug}` },
        ]}
      />

      <article className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 mb-10 pb-8 border-b">
            <Badge variant="outline">{article.category}</Badge>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <IconTime className="size-4" />
              {article.readingTime}
            </span>
            <span className="text-sm text-muted-foreground">
              {formatDate(article.publishedAt)}
            </span>
            <span className="text-sm text-muted-foreground">
              Par{" "}
              <Link
                href="/a-propos"
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                {article.author.name}
              </Link>
            </span>
          </div>

          {/* Article content */}
          {article.content ? (
            <div
              className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-2">
                Cet article sera bientôt disponible.
              </p>
              <p className="text-sm text-muted-foreground">
                Suivez-nous sur{" "}
                <a
                  href={siteConfig.contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  LinkedIn
                </a>{" "}
                pour être informé de sa publication.
              </p>
            </div>
          )}

          {/* Back to blog */}
          <div className="mt-16 pt-8 border-t">
            <Button asChild variant="outline">
              <Link href="/blog">
                <IconArrowLeft className="size-4 mr-2" />
                Retour au blog
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
}

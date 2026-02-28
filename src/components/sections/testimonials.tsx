import { SectionHeader } from "@/components/shared/section-header";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site-config";

export function Testimonials() {
  const featuredTestimonials = testimonials
    .filter((t) => t.featured)
    .slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-bg-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Ce que disent nos participants"
          subtitle={`+${siteConfig.stats.respondentCount} professionnels ont évalué nos formations`}
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

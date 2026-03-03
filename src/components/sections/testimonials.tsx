"use client";

import { TestimonialCard } from "@/components/shared/testimonial-card";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site-config";
import { Star } from "lucide-react";

export function Testimonials() {
  const duplicated = [...testimonials, ...testimonials];

  return (
    <section className="py-16 lg:py-24 bg-bg-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground">
          Ce que disent nos participants
        </h2>
        <div className="flex items-center justify-center gap-2 mt-3">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="size-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <a
            href={siteConfig.stats.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {siteConfig.stats.googleReviewCount} avis Google
          </a>
        </div>
      </div>

      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-bg-alt to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-bg-alt to-transparent z-10" />

        {/* Scrolling track */}
        <div className="flex gap-6 animate-testimonial-scroll hover:[animation-play-state:paused] w-max">
          {duplicated.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.id}-${index}`}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

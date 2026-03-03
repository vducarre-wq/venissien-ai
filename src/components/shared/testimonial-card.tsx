import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  return (
    <Card
      className={cn(
        "rounded-2xl card-shadow bg-card/50 w-[320px] md:w-[380px] shrink-0 select-none",
        className
      )}
    >
      <CardContent className="flex flex-col gap-3 p-5">
        {/* Stars */}
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "size-4",
                i < testimonial.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-200 text-gray-200"
              )}
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-sm leading-relaxed text-foreground/90 line-clamp-5">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        {/* Author + Date */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-border/50">
          <span className="text-sm font-semibold">
            {testimonial.authorName}
          </span>
          <span className="text-xs text-muted-foreground">
            {testimonial.date}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

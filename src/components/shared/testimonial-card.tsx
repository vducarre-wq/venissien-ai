import { IconQuote } from "@/components/icons";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <Card
      className={cn(
        "rounded-2xl card-shadow card-shadow-hover transition-all duration-300 bg-card/50",
        className
      )}
    >
      <CardContent className="flex flex-col gap-4">
        <IconQuote className="size-6 text-primary/40 shrink-0" aria-hidden="true" />
        <blockquote className="text-sm italic leading-relaxed text-foreground/90">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <Separator className="bg-border/50" />
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-semibold">{testimonial.authorName}</span>
          {(testimonial.authorTitle || testimonial.company) && (
            <span className="text-xs text-muted-foreground">
              {[testimonial.authorTitle, testimonial.company]
                .filter(Boolean)
                .join(" — ")}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

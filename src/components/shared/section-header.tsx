import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      <div
        className={cn(
          "mt-3 h-1 w-12 rounded-full bg-primary",
          centered && "mx-auto"
        )}
        aria-hidden="true"
      />
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed"
          style={centered ? { marginInline: "auto" } : undefined}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

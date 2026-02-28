import { cn } from "@/lib/utils";

interface GoogleCalendarEmbedProps {
  url: string;
  className?: string;
}

export function GoogleCalendarEmbed({ url, className }: GoogleCalendarEmbedProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border bg-card min-h-[600px]",
        className
      )}
    >
      <iframe
        src={url}
        title="Prendre rendez-vous"
        loading="lazy"
        className="absolute inset-0 h-full w-full border-0"
        allow="clipboard-write"
      />
    </div>
  );
}

import Image from "next/image";
import { clientLogos } from "@/data/clients";

export function ClientLogos() {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="py-12 lg:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground mb-10">
          Ils nous font confiance
        </p>
      </div>

      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Marquee track */}
        <div className="flex animate-marquee w-max">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center justify-center mx-8 md:mx-12 shrink-0"
            >
              <Image
                src={logo.imagePath}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-10 md:h-14 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

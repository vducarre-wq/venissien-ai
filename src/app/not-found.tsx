import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconArrowLeft } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="font-heading text-8xl md:text-9xl font-bold text-primary/20">
        404
      </h1>
      <h2 className="mt-4 font-heading text-2xl md:text-3xl font-bold tracking-tight">
        Page non trouvée
      </h2>
      <p className="mt-3 text-muted-foreground max-w-md leading-relaxed">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Button asChild className="mt-8" size="lg">
        <Link href="/">
          <IconArrowLeft className="size-4" />
          Retour à l&apos;accueil
        </Link>
      </Button>
    </section>
  );
}

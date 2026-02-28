import { IconTime, IconAction, IconSymbole } from "@/components/icons";
import { SectionHeader } from "@/components/shared/section-header";

const problems = [
  {
    icon: IconTime,
    title: "Perte de temps sur les tâches répétitives",
    description:
      "L'IA peut automatiser jusqu'à 40% des tâches administratives en cabinet.",
  },
  {
    icon: IconAction,
    title: "Concurrence digitale croissante",
    description:
      "Les cabinets qui n'adoptent pas l'IA risquent de perdre en compétitivité.",
  },
  {
    icon: IconSymbole,
    title: "Manque de compétences IA",
    description:
      "88% des professionnels du chiffre n'ont pas de formation structurée à l'IA.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Pourquoi se former à l'IA ?"
          subtitle="Les enjeux auxquels font face les professionnels du chiffre et du droit aujourd'hui."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="flex flex-col items-center text-center gap-4 p-6"
            >
              <div className="flex items-center justify-center size-16 rounded-full bg-primary/10">
                <problem.icon
                  className="size-8 text-primary"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-bold">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

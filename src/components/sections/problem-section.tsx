import { IconTime, IconAction, IconSymbole } from "@/components/icons";
import { SectionHeader } from "@/components/shared/section-header";

const problems = [
  {
    icon: IconTime,
    title: "Des heures perdues sur des tâches répétitives",
    description:
      "Rédaction de courriers, extraction de données, mise en forme de tableaux : ces tâches consomment un temps précieux que l'IA peut réduire significativement.",
  },
  {
    icon: IconAction,
    title: "Une profession en pleine transformation",
    description:
      "L'Ordre des experts-comptables a fait de l'IA un axe stratégique. Les cabinets qui intègrent ces outils gagnent en productivité et en attractivité.",
  },
  {
    icon: IconSymbole,
    title: "Un besoin de formation structurée",
    description:
      "Regarder des tutos ne suffit pas. Pour exploiter l'IA en cabinet, il faut une méthode adaptée aux contraintes métier : confidentialité, fiabilité, déontologie.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Pourquoi se former à l'IA générative ?"
          subtitle="Les professionnels du chiffre et du droit font face à des mutations profondes. L'IA n'est plus une option."
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

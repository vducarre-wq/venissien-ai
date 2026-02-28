import { IconPartager, IconKing, IconEcouter } from "@/components/icons";
import { siteConfig } from "@/data/site-config";

const stats = [
  {
    icon: IconPartager,
    value: `${siteConfig.stats.professionalsTrainedCount}+`,
    label: "professionnels formés",
  },
  {
    icon: IconKing,
    value: `${siteConfig.stats.satisfactionScore}/${siteConfig.stats.satisfactionMax}`,
    label: "satisfaction",
  },
  {
    icon: IconEcouter,
    value: String(siteConfig.stats.googleReviewCount),
    label: "avis Google",
  },
];

export function StatsBanner() {
  return (
    <section className="bg-primary py-16 lg:py-20" aria-label="Statistiques clés">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center gap-3"
            >
              <stat.icon
                className="size-8 text-white/80"
                aria-hidden="true"
              />
              <p className="text-4xl md:text-5xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-white/80 text-sm uppercase tracking-wider font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

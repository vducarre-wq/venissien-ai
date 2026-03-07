/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://venissien.ai",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/"] },
    ],
  },
  exclude: ["/api/*"],
  changefreq: "weekly",
  priority: 0.7,
  additionalPaths: async () => {
    return [
      { loc: "/", priority: 1.0, changefreq: "weekly" },
      { loc: "/formations", priority: 0.9, changefreq: "weekly" },
      {
        loc: "/formations/niveau-1-initiation-ia",
        priority: 0.9,
        changefreq: "monthly",
      },
      {
        loc: "/formations/niveau-2-perfectionnement",
        priority: 0.9,
        changefreq: "monthly",
      },
      {
        loc: "/formations/niveau-3-transformation-cabinet",
        priority: 0.7,
        changefreq: "monthly",
      },
      {
        loc: "/formations/atelier-dashboard-fec",
        priority: 0.9,
        changefreq: "weekly",
      },
      {
        loc: "/formations/conferences",
        priority: 0.7,
        changefreq: "monthly",
      },
      { loc: "/a-propos", priority: 0.7, changefreq: "monthly" },
      { loc: "/blog", priority: 0.8, changefreq: "weekly" },
      { loc: "/contact", priority: 0.8, changefreq: "monthly" },
    ];
  },
};

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/formations/bootcamp",
        destination: "/formations/niveau-3-transformation-cabinet",
        permanent: true,
      },
      {
        source: "/formations/ateliers-live",
        destination: "/formations/atelier-dashboard-fec",
        permanent: true,
      },
      // Redirections des anciennes pages Systeme.io
      {
        source: "/promptotheque",
        destination: "/formations",
        permanent: true,
      },
      {
        source: "/paiement",
        destination: "/formations",
        permanent: true,
      },
      {
        source: "/paiement/:path*",
        destination: "/formations",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;

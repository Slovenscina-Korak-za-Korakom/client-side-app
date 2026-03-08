import { MetadataRoute } from "next";
import { routing, getPathname } from "@/i18n/routing";
import { BASE_URL } from "@/lib/seo";

type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

const publicRoutes: Array<{
  route: string;
  priority: number;
  changeFrequency: ChangeFrequency;
}> = [
  { route: "/", priority: 1.0, changeFrequency: "weekly" },
  { route: "/about-us", priority: 0.8, changeFrequency: "monthly" },
  { route: "/pricing", priority: 0.9, changeFrequency: "monthly" },
  { route: "/legal/terms-of-service", priority: 0.3, changeFrequency: "yearly" },
  { route: "/legal/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { route: "/legal/license", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const lastModified = new Date();

  for (const { route, priority, changeFrequency } of publicRoutes) {
    for (const locale of routing.locales) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const path = getPathname({ locale, href: route as any });
      const url = `${BASE_URL}/${locale}${path === "/" ? "" : path}`;
      entries.push({ url, lastModified, changeFrequency, priority });
    }
  }

  return entries;
}

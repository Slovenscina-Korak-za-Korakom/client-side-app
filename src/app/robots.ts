import { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/*/dashboard",
          "/*/calendar",
          "/*/language-club",
          "/*/tutors",
          "/*/courses",
          "/*/settings",
          "/*/daily-practice",
          "/*/welcome",
          "/*/dobrodosli",
          "/*/добро-пожаловать",
          "/*/benvenuto",
          "/api/",
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}

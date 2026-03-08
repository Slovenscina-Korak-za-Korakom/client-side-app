import { getPathname } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

export const BASE_URL = "https://slovenscinakzk.com";

/**
 * Generates canonical URL and hreflang alternates for a given internal route.
 * Use in generateMetadata for all public pages.
 *
 * @param route - Internal route key (must match a key in routing.ts pathnames, e.g. "/about-us")
 * @param currentLocale - The current page locale
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getAlternates(route: string, currentLocale: string) {
  const languages: Record<string, string> = {};

  for (const locale of routing.locales) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const path = getPathname({ locale, href: route as any });
    languages[locale] = `${BASE_URL}/${locale}${path === "/" ? "" : path}`;
  }
  languages["x-default"] = languages["en"];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const currentPath = getPathname({ locale: currentLocale, href: route as any });
  const canonical = `${BASE_URL}/${currentLocale}${currentPath === "/" ? "" : currentPath}`;

  return { canonical, languages };
}

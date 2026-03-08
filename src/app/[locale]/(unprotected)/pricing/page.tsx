import { FAQ } from "@/components/content/faq";
import { EmailComponent } from "@/components/content/info/email-component";
import PricingContent from "@/components/content/pricing-page";
import LanguageClub from "@/components/content/language-club-pricing";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import {Metadata} from "next";
import { getAlternates } from "@/lib/seo";

export async function generateMetadata({ params }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.pricing" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: getAlternates("/pricing", locale),
  };
}

export default function PricingPage() {
  const t = useTranslations("pricing.hero");
  return (
    <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 gradient-primary-subtle-reversed opacity-60 dark:opacity-40" />
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-sm font-bold uppercase tracking-wider text-sl-accent mb-4">
          {t("subtitle")}
        </h2>
        <p className="mt-2 text-balance text-5xl font-bold tracking-tighter text-sl-primary sm:text-6xl lg:text-7xl">
          {t("title")}
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-pretty tracking-tight text-center text-lg font-medium text-sl-secondary sm:text-xl/8">
        {t("description")}
      </p>

      <PricingContent />
      <LanguageClub />
      <div
        id="FAQ"
        className="mt-40 relative isolate overflow-hidden py-16 sm:py-24 lg:py-32 mx-auto max-w-lg md:max-w-4xl px-6 lg:px-8"
      >
        <FAQ />
      </div>
      <EmailComponent />
    </section>
  );
}

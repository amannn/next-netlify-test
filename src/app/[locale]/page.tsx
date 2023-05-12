import { Suspense } from "react";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Hero } from "components/Hero";
import FeaturedPostsSection, {
  FeaturedPostsSectionSkeleton,
} from "components/FeaturedPostsSection/FeaturedPostsSection";
import { AboutUsSection } from "components/AboutUsSection";
import { Footer } from "components/Footer";
import { AppLocale } from "types/global";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Home.Metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Home({ params }: { params: { locale: AppLocale } }) {
  return (
    <div className="flex flex-col">
      <Hero locale={params.locale} />

      <Suspense fallback={<FeaturedPostsSectionSkeleton />}>
        {/* @ts-expect-error Server Component */}
        <FeaturedPostsSection locale={params.locale} />
      </Suspense>

      <AboutUsSection />

      <Footer locale={params.locale} />
    </div>
  );
}

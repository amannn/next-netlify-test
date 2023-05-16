'use client'

import { Hero } from "components/Hero";
import { FeaturedPostsSection } from "components/FeaturedPostsSection/FeaturedPostsSection";
import { AboutUsSection } from "components/AboutUsSection";
import { Footer } from "components/Footer";
import { AppLocale } from "types/global";

export default function Home({ params }: { params: { locale: AppLocale } }) {
  return (
    <div className="flex flex-col">
      <Hero locale={params.locale} />

      <FeaturedPostsSection locale={params.locale} />

      <AboutUsSection />

      <Footer locale={params.locale} />
    </div>
  );
}

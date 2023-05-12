import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AppLocale } from "types/global";
import { getCountry } from "utils/api";

interface CountryPageProps {
  params: {
    country: string;
    locale: AppLocale;
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Home.Metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { country } = await getCountry(params.country, params.locale);

  return (
    <div className="flex flex-col">
      <div className="w-[1024px] mx-auto py-24">
        <h1 className="text-6xl font-bold">{country.name}</h1>
      </div>
    </div>
  );
}

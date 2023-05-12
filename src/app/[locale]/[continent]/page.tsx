import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AppLocale } from "types/global";
import { getContinent } from "utils/api";

interface ContinentPageProps {
  params: {
    continent: string;
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

export default async function ContinentPage({ params }: ContinentPageProps) {
  const { continent } = await getContinent(params.continent, params.locale);

  return (
    <div className="flex flex-col">
      <div className="w-[1024px] mx-auto py-24">
        <h1 className="text-6xl font-bold">{continent.name}</h1>
      </div>
    </div>
  );
}

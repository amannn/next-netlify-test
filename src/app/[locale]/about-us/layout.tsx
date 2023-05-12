import { Navbar } from "components/Navbar";
import { Footer } from "components/Footer";
import { AppLocale } from "types/global";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("AboutUs.Metadata");

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL(process.env.baseUrl || "https://example.com"),
  };
}

export default function AboutUsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: AppLocale };
}) {
  return (
    <div>
      <Navbar locale={params.locale} />

      <div>{children}</div>

      <Footer locale={params.locale} />
    </div>
  );
}

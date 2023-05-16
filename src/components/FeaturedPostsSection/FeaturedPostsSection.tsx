import type { AppLocale } from "types/global";

import { SectionWithTitle } from "../SectionWIthTitle/SectionWithTitle";
import { useTranslations } from "next-intl";

export const FeaturedPostsSection = ({ locale }: { locale: AppLocale }) => {
  const t = useTranslations("Home.Featured");

  return (
    <SectionWithTitle title={t("title")}>
      <div className="flex flex-col">
        <h4 className="text-3xl mb-4">{t("error1")}</h4>
        <div>{locale}</div>
      </div>
    </SectionWithTitle>
  );
};

import { useTranslations } from "next-intl";
import { poppins } from "utils/fonts";

export default function ALilIntroductionPage() {
  const t = useTranslations("AboutUs");

  return (
    <div className="flex flex-col py-6 lg:py-8 mx-auto w-11/12 2xl:w-3/4 ">
      <div className="rich-text-copy flex flex-col gap-y-6 text-2xl mb-12">
        <h1
          style={poppins.style}
          className="text-6xl font-semibold text-left pt-12 pb-10"
        >
          {t("title")}
        </h1>
      </div>
    </div>
  );
}

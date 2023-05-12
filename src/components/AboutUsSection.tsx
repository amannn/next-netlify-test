import { poppins } from "utils/fonts";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";

export const AboutUsSection: React.FC = () => {
  const t = useTranslations("Home.AboutUs");

  return (
    <div className="lg:h-[450px] xl:h-[500px] flex flex-col-reverse lg:flex-row gap-8 my-16 w-full xl:w-11/12">
      <div className="bg-gray-100 flex flex-col justify-center items-end w-full lg:w-7/12 xl:w-2/3 py-16 xl:py12 px-6 lg:p-12 xl:p-24">
        <div>
          <h6
            style={poppins.style}
            className="mb-4 xl:mb-12 uppercase font-semibold text-gray-400 text-sm tracking-widest"
          >
            {t("title")}
          </h6>
          <p className="text-left text-3xl lg:max-w-[650px] mb-4 xl:mb-12 ">
            {t("content")}
          </p>
          <Link
            className="h-16 w-56 flex justify-center items-center bg-black text-white"
            href="/about-us"
            style={poppins.style}
          >
            <span>{t("cta")}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

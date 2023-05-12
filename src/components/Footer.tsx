import Image from "next/image";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import { AppLocale } from "types/global";

import logoPic from "../../public/images/logo.jpeg";
import { NewsletterForm } from "./NewsletterForm";
import { LocaleSwitch } from "./LocaleSwitch";

interface FooterProps {
  locale: AppLocale;
}

export const Footer: React.FC<FooterProps> = ({ locale }) => {
  const t = useTranslations("Global.Footer");
  const localeSwitch = useTranslations("Global.LocaleSwitch");

  return (
    <div className="flex flex-col items-center xl:items-start pt-16 lg:pt-20 pb-10 xl:px-48 mt-10 lg:mt-16 bg-accent">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-24 px-12 xl:px-0 w-full">
        <p className="text-center lg:text-left text-4xl mb-4 lg:mb-0">
          {t("message")}
        </p>

        <NewsletterForm
          inputPlaceholder={t("inputPlaceholder")}
          inputError={t("inputError")}
          ctaText={t("cta")}
        />
      </div>

      <div className="w-full flex flex-col-reverse lg:flex-row items-center lg:items-end lg:justify-between gap-y-3 lg:px-12 xl:px-0">
        <div className="flex gap-2 items-center">
          <div className="hidden lg:block">
            <LocaleSwitch
              currentLocale={locale}
              helpText={localeSwitch("helpText")}
            />
          </div>
          <span className="text-sm xl:text-lg">©2023 | Next on Netlify</span>
        </div>

        <Link className="relative h-20 w-56" href="/" target="_blank">
          <Image
            src={logoPic}
            alt="the logo"
            sizes="100%"
            fill
            style={{ objectFit: "contain" }}
          />
        </Link>
      </div>
    </div>
  );
};

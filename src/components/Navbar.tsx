import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import { LocaleSwitch } from "components/LocaleSwitch";

import logoPic from "../../public/images/logo.jpeg";
import { AppLocale } from "types/global";

interface NavbarProps {
  locale: AppLocale;
}

export const Navbar: React.FC<NavbarProps> = ({ locale }) => {
  const t = useTranslations("Global.LocaleSwitch");

  return (
    <div className="flex justify-center w-full h-24 bg-primary">
      <div className="w-full mx-6 md:mx-0 md:w-2/3 h-full flex items-center justify-between">
        <Link className="relative h-full w-44 md:w-56" href="/">
          <Image
            src={logoPic}
            alt="the logo"
            sizes="100%"
            fill
            style={{ objectFit: "contain" }}
          />
        </Link>

        <LocaleSwitch helpText={t("helpText")} currentLocale={locale} />
      </div>
    </div>
  );
};

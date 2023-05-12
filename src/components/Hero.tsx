import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { LocaleSwitch } from "components/LocaleSwitch";

import homeHeroPic from "../../public/images/home-hero.jpeg";
import logoPic from "../../public/images/logo.jpeg";
import { AppLocale } from "types/global";

interface NavbarProps {
  locale: AppLocale;
}

const Navbar: React.FC<NavbarProps> = ({ locale }) => {
  const t = useTranslations("Global.LocaleSwitch");

  return (
    <div className="h-24 xl:h-24 flex items-center justify-between mb-4 lg:mb-20 xl:mb-28">
      <Link
        className="relative w-44 md:w-56 lg:w-72 xl:w-56 h-full xl:h-20"
        href="/"
        target="_blank"
      >
        <Image
          src={logoPic}
          alt="the logo"
          sizes="100%"
          fill
          style={{ objectFit: "contain" }}
        />
      </Link>

      <LocaleSwitch currentLocale={locale} helpText={t("helpText")} />
    </div>
  );
};

interface CircularButtonLinkProps {
  href: string;
  className?: string;
}

interface HeroProps {
  locale: AppLocale;
}

export const Hero: React.FC<HeroProps> = ({ locale }) => {
  const t = useTranslations("Home.Hero");

  return (
    <div className="w-full pb-20 lg:pb-40 relative bg-black text-white flex justify-center">
      <div className="flex flex-col px-6 lg:px-16 xl:px-48 z-10">
        <Navbar locale={locale} />
        <h1 className="text-5xl lg:text-7xl leading-[3.5rem] lg:leading-[5.5rem] font-bold w-full lg:w-3/4">
          {t("title")}
        </h1>
      </div>
      <Image
        src={homeHeroPic}
        alt="Picture of the author"
        placeholder="blur"
        sizes="100vw"
        priority
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

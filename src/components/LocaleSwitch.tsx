"use client";

import { usePathname } from "next-intl/client";
import { useRouter } from "next/navigation";
import { Switch } from "@headlessui/react";
import { AppLocale } from "types/global";

interface LocaleSwitchProps {
  helpText: string;
  currentLocale: AppLocale;
}

export const LocaleSwitch: React.FC<LocaleSwitchProps> = ({
  helpText,
  currentLocale,
}) => {
  const isItalian = currentLocale === "it";
  const router = useRouter();
  const pathname = usePathname();

  const onToggle = () => {
    const nextLocale = currentLocale === "it" ? "en" : "it";
    router.replace(`/${nextLocale}${pathname}`);
  };

  return (
    <Switch
      checked={isItalian}
      onChange={onToggle}
      className={`${isItalian ? "bg-blue-600" : "bg-red-500"}
          relative inline-flex items-center h-[28px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-background duration-600 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">{helpText}</span>
      <span
        aria-hidden="true"
        className={`${
          isItalian
            ? "translate-x-[26px] bg-ita-flag"
            : "translate-x-0 bg-uk-flag"
        }
           bg-cover bg-center bg-no-repeat border-2 border-white pointer-events-none inline-block h-[22px] w-[22px] transform rounded-full bg-white shadow-lg ring-0 transition duration-600 ease-in-out`}
      />
    </Switch>
  );
};

"use client";

import { BugFixingIcon } from "icons/BugFixing";
import { useParams } from "next/navigation";
import { AppLocale } from "types/global";

const ERROR_MESSAGES = {
  it: "Oops, sembra che si sia verificato un error inatteso. I nostri developer sono stati informati. Ti preghiamo di riprovare più tardi.",
  en: "An error happened. Our devs have been informed and are already working towards a fix. Please try again soon.",
};

export default function PostError() {
  const params = useParams() as { locale?: AppLocale } | null;
  const locale = params?.locale || "en";

  return (
    <div className="flex flex-col items-center w-full py-12">
      <BugFixingIcon className="h-[180px] w-[320px] lg:h-[480px] lg:w-[620px]" />
      <h2 className="text-2xl lg:text-4xl w-[320px] w-[620px] mt-8">{ERROR_MESSAGES[locale]}</h2>
    </div>
  );
}

import "../../globals.css";

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { useLocale } from "next-intl";

import { crimsonText } from "utils/fonts";
import { AppLocale } from "types/global";

interface Props {
  children: React.ReactNode;
  params: { locale: AppLocale };
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: "%s | Next Netlify",
      default: "Next on Netlify",
    },
  };
}

export default function LocaleLayout({ children, params }: Props) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale} style={crimsonText.style}>
      <body>{children}</body>
    </html>
  );
}

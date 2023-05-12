import { Navbar } from "components/Navbar";
import { Footer } from "components/Footer";
import { AppLocale } from "types/global";

export default function ContinentLayout({
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

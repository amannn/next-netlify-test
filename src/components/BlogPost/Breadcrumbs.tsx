import Link from "next-intl/link";
import { poppins } from "utils/fonts";

interface BreadcrumbsProps {
  country: {
    name: string;
    slug: string;
    continent: {
      name: string;
      slug: string;
    };
  };
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ country }) => {
  const { continent } = country;

  return (
    <div style={poppins.style} className="flex text-xl gap-x-2">
      <Link href={`/${continent.slug}`}>{continent.name}</Link>

      <span className="font-bold mx-2 text-primary">/</span>

      <Link href={`/${continent.slug}/${country.slug}`}>{country.name}</Link>
    </div>
  );
};

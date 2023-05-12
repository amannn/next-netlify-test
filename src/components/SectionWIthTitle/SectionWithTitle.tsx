import { PropsWithChildren } from "react";

interface SectionWithTitleProps {
  title: string;
  greyBackground?: boolean;
}

export const SectionWithTitle: React.FC<
  PropsWithChildren<SectionWithTitleProps>
> = ({ title, greyBackground = false, children }) => {
  return (
    <section
      className={`flex flex-col py-16 lg:py-20 px-6 lg:px-16 xl:px-48 ${
        greyBackground ? "bg-gray-100" : "bg-white"
      }`}
    >
      <h1 className="text-5xl lg:text-6xl font-bold mb-4">{title}</h1>

      <div className="border-b-4 rounded-full border-amber-400 w-24 mb-16" />

      <div>{children}</div>
    </section>
  );
};

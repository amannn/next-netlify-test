import { PropsWithChildren } from "react";

interface LoadingSectionWithTitleProps {
  greyBackground?: boolean;
}

export const LoadingSectionWithTitle: React.FC<
  PropsWithChildren<LoadingSectionWithTitleProps>
> = ({ greyBackground = false, children }) => {
  return (
    <section
      className={`flex flex-col py-20 px-48 ${
        greyBackground ? "bg-gray-100" : "bg-white"
      }`}
    >
      {/* @TODO Use different color for greyBackgrund */}
      <div className="w-2/3 my-4 animate-pulse bg-gray-300 h-10 pulse" />

      <div className="border-b-4 rounded-full border-amber-400 w-24 mb-16" />

      <div>{children}</div>
    </section>
  );
};

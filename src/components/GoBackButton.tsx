"use client";

import { useRouter } from "next/navigation";

interface GoBackButtonProps {
  copy: string;
}

export const GoBackButton: React.FC<GoBackButtonProps> = ({ copy }) => {
  const router = useRouter();

  const onGoBackHome = () => {
    router.push("/");
  };

  return (
    <button
      onClick={onGoBackHome}
      type="button"
      className="bg-white px-6 pt-2 pb-4  w-fit font-bold inline-block"
    >
      <span className="text-6xl text-black">{copy}</span>
    </button>
  );
};

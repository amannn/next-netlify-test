import "../globals.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-primary h-screen w-screen flex items-center">
      <div className="w-5/6 mx-auto h-3/4 flex flex-col justify-center relative">
        <h2 className="text-8xl sm:text-6xl w-[720px] font-bold mb-8 sm:mb-3">
          Page Not Found
        </h2>
        <Link
          href="/"
          className="bg-white px-6 pt-2 pb-4 w-fit font-bold inline-block"
        >
          <span className="text-8xl sm:text-6xl text-black">
            back to homepage
          </span>
        </Link>
      </div>
    </div>
  );
}

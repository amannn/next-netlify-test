import parse from "html-react-parser";
import Image from "next/image";
import { AppLocale, Post } from "types/global";
import { Breadcrumbs } from "./Breadcrumbs";

interface BlogPostProps {
  post: Post;
  locale: AppLocale;
  copy: {
    writtenByText: string;
  };
}

export const BlogPost: React.FC<BlogPostProps> = ({ post, copy }) => {
  return (
    <div className="flex flex-col py-8 lg:py-12">
      <div className="flex flex-col items-center">
        <h1 className="lg:w-4/5 xl:w-3/5 my-8 lg:my-16 text-6xl font-semibold text-center">
          {post.title}
        </h1>

        {post.country ? <Breadcrumbs country={post.country} /> : null}
      </div>

      <div className="flex flex-col my-12 lg:my-24">
        <div className="loading-background relative w-full h-[450px] lg:h-[650px]">
          <Image
            className="loading-background"
            sizes="100%"
            fill
            src={post.mainImage.url}
            alt="main picutre" // @TODO ee if we can use description to make it more accessible
            style={{ objectFit: "cover" }}
          />
        </div>
        <span className="text-xs italic mt-1 mx-4 text-gray-600">
          {parse(post.mainImage.description)}
        </span>
      </div>

      <div className="w-full px-6 lg:px-0 lg:w-[720px] mx-auto mt-10 text-2xl">
        {parse(post.description)}
      </div>

      <p className="w-full px-6 lg:px-0 lg:w-[720px] mx-auto border-t border-t-gray-200 mt-10 lg:mt-16 pt-10 lgpt-16 text-2xl">
        <span className="text-gray-500">{copy.writtenByText}</span>{" "}
        {post.author.name}
      </p>
    </div>
  );
};

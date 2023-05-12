import type { Metadata } from "next";
import { AppLocale } from "types/global";
import { BlogPost } from "components/BlogPost/BlogPost";
import { getPost } from "utils/api";
import { getTranslations } from "next-intl/server";

interface PostPageProps {
  params: {
    slug: string;
    locale: AppLocale;
  };
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug, locale } = params;
  const { post } = await getPost(slug, locale);

  return {
    title: post.title,
    description: post.description,
    metadataBase: new URL(process.env.baseUrl || "https://example.com"),
  };
}

export default async function PostPage({
  params: { slug, locale },
}: PostPageProps) {
  const { post } = await getPost(slug, locale);
  const t = await getTranslations("Post");

  return (
    <BlogPost
      post={post}
      locale={locale}
      copy={{ writtenByText: t("writtenBy") }}
    />
  );
}

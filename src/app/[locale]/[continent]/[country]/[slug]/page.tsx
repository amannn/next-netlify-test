import { useTranslations } from "next-intl";

const PostPage = () => {
  const t = useTranslations("Post");

  return <div>This blog is written by {t("writtenBy")}</div>;
};

export default PostPage;

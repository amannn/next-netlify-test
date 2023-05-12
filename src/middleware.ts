import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "it"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "en",
});

// See "Matching Paths" below to learn more
export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!icons|_next/static|_next/image|sitemap.xml|favicon.ico).*)"],
};

// @TODO Checkout https://docs.netlify.com/integrations/frameworks/next-js/middleware/#next-js-advanced-middleware-with-the-netlify-next-library
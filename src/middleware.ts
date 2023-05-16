import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

const intlMiddleware = createMiddleware({
  locales: ["en", "it"],
  defaultLocale: "en",
});

export function middleware(req: NextRequest) {
  console.log('middleware processing '+ req.nextUrl.href);
  return intlMiddleware(req);
}

// See "Matching Paths" below to learn more
export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)']
};

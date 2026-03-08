import createMiddleware from "next-intl/middleware";
import {routing} from "./i18n/routing";
import {clerkMiddleware} from "@clerk/nextjs/server";

// export async function middleware(request) {
//   return await updateSession(request)
// }

// export default createMiddleware(routing);

// export const config = {
//   // Match only internationalized pathnames
//   // matcher: ['/', '/(sl|ru|en)/:path*']
//   matcher: [
//     '/',
//     '/(sl|ru|en)/:path*',
//     '/((?!_next/static|_next/image|favicon.ico|public).*)'
//   ]
// };

export default clerkMiddleware(async (auth, req) => {
  // Skip i18n middleware for API routes
  if (req.nextUrl.pathname.startsWith("/api/")) {
    return;
  }

  const i18nMiddleware = createMiddleware(routing);
  return await i18nMiddleware(req);
});

export const config = {
  matcher: [
    // Match root or locale-prefixed paths only
    "/",
    "/(sl|ru|en|it)/:path*",
    "/api/:path*",

    // Match all other paths EXCEPT /sign-in and _next, assets etc.
    "/((?!sign-in|_next/static|_next/image|images|assets|favicon.ico|sitemap.xml|robots.txt|auth/confirm|auth/callback|auth/update-password|.*\\.(?:svg|jpg|jpeg|png|gif|ico|txt|xml)$).*)",
  ],
};

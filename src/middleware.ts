import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(ru|en|ua)/:path*", "/login/:path*", "/register/:path*", "/support/:path*", "/community/:path*", "/chat/:path*", "/product/:path*", "/store/:path*"],
};

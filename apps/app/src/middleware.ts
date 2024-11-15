import { type NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";
import { createClient } from "../lib/supabase/middleware";
import * as i18n from "./app/i18n";

const getLocale = (request: NextRequest) => {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  const defaultLocale = i18n.defaultLanguage;
  const locales: string[] = i18n.locales;
  try {
    return match(languages, locales, defaultLocale);
  } catch (e) {
    return defaultLocale;
  }
};

export async function middleware(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const url = request.nextUrl.clone();
    const cookies = request.cookies;
    if (!searchParams.has("lang")) {
      const locale = getLocale(request);
      url.searchParams.set("lang", locale);
    }

    const langCookies = cookies.get("lang");
    const langSearch = searchParams.get("lang");
    if (langCookies && langCookies.value !== langSearch) {
      url.searchParams.set("lang", langCookies.value);
    }

    // const locale = 'zh';
    // url.searchParams.set('lang', locale);

    // This `try/catch` block is only here for the interactive tutorial.
    // Feel free to remove once you have Supabase connected.
    const { supabase, response } = createClient(request);

    // Refresh session if expired - required for Server Components
    // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (request.nextUrl.pathname.startsWith("/early-access")) {
      if (request.nextUrl.searchParams.has("lang")) {
        return response;
      }
      return NextResponse.redirect(url);
    }

    if (!user && request.nextUrl.pathname.startsWith("/auth")) {
      // no user, potentially respond by redirecting the user to the login page
      url.pathname = "/early-access";
      return NextResponse.redirect(url);
    }
    if (
      !user &&
      !request.nextUrl.pathname.startsWith("/auth") &&
      request.nextUrl.pathname.startsWith("/app")
    ) {
      // no user, potentially respond by redirecting the user to the login page
      url.pathname = "/auth/login";
      return NextResponse.redirect(url);
    }
    if (user && request.nextUrl.pathname === "/") {
      // user is logged in, potentially redirect to the app
      url.pathname = "/app";
      return NextResponse.redirect(url);
    }
    if (user && request.nextUrl.pathname.startsWith("/auth")) {
      // user is logged in, potentially redirect to the app
      url.pathname = "/app";
      return NextResponse.redirect(url);
    }
    if (
      request.nextUrl.pathname === url.pathname &&
      request.nextUrl.search === url.search
    ) {
      return response;
    }

    return NextResponse.redirect(url);
  } catch (e) {
    // If you are here, a Supabase client could not be created!
    // This is likely because you have not set up environment variables.
    // Check out http://localhost:3000 for Next Steps.
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
  }
}

export const config = {
  matcher: [
    "/",
    "/home",
    "/pricing",
    "/support",
    "/early-access/:path*",
    "/app/:path*",
    "/auth/:path*",
  ],
};

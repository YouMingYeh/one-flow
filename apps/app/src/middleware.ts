import { NextResponse, type NextRequest } from 'next/server';
import Negotiator from 'negotiator';
import { match } from '@formatjs/intl-localematcher';
import { createClient } from '../lib/supabase/middleware';
import * as i18n from './app/i18n';

const getLocale = (request: NextRequest) => {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const defaultLocale = 'en';
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

    if (!searchParams.has('lang')) {
      const locale = getLocale(request);
      url.searchParams.set('lang', locale);
    }

    // This `try/catch` block is only here for the interactive tutorial.
    // Feel free to remove once you have Supabase connected.
    const { supabase, response } = createClient(request);

    // Refresh session if expired - required for Server Components
    // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (request.nextUrl.pathname.startsWith('/early-access')) {
      if (request.nextUrl.searchParams.has('lang')) {
        return response;
      }
      return NextResponse.redirect(url);
    }

    if (!user && request.nextUrl.pathname.startsWith('/auth')) {
      // no user, potentially respond by redirecting the user to the login page
      url.pathname = '/early-access';
      return NextResponse.redirect(url);
    }
    if (
      !user &&
      !request.nextUrl.pathname.startsWith('/auth') &&
      request.nextUrl.pathname !== '/'
    ) {
      // no user, potentially respond by redirecting the user to the login page
      url.pathname = '/auth/login';
      return NextResponse.redirect(url);
    }
    if (user && request.nextUrl.pathname === '/') {
      // user is logged in, potentially redirect to the app
      url.pathname = '/app';
      return NextResponse.redirect(url);
    }
    if (user && request.nextUrl.pathname.startsWith('/auth')) {
      // user is logged in, potentially redirect to the app
      url.pathname = '/app';
      return NextResponse.redirect(url);
    }
    if (request.nextUrl.href === url.href) {
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
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     */

    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

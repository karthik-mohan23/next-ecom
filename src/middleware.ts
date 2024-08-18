import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const getCookies = cookies();
  const token = getCookies.get("token")?.value || "";

  const protectedPaths = ["/checkout", "/profile"];

  const publicPaths = ["/login", "/register"];

  const isProtectedPath = protectedPaths.includes(path);

  const isPublicPath = publicPaths.includes(path);

  // Redirect logic for authenticated users
  if (token !== "" && isPublicPath) {
    // Redirect authenticated users from public paths to the home page
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  // Redirect logic for unauthenticated users
  if (token === "" && isProtectedPath) {
    // Redirect unauthenticated users from protected paths to the login page
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: ["/login", "/register", "/checkout", "/profile"],
};

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

  // Redirect authenticated users to home page
  if (token !== "" && isPublicPath) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  // Redirect unauthenticated users to the login page
  if (token === "" && isProtectedPath) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: ["/login", "/register", "/checkout", "/profile"],
};

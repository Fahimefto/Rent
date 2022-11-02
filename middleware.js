import { NextResponse } from "next/server";

export default function middleware(req) {
  const cook = req.cookies.get("access_token");

  if (req.nextUrl.pathname.startsWith("/profile")) {
    if (cook === undefined) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    if (!cook) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
  if (req.nextUrl.pathname.startsWith("/create")) {
    if (cook === undefined) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    if (!cook) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
  if (req.nextUrl.pathname.startsWith("/login")) {
    if (cook) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    if (cook) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
  if (req.nextUrl.pathname.startsWith("/register")) {
    if (cook) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    if (cook) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
}

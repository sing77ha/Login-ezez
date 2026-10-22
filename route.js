import { NextResponse } from "next/server";
import { COOKIE } from "@/lib/session";

export async function POST(request) {
  const res = NextResponse.redirect(new URL("/", request.url), 303);
  res.cookies.delete(COOKIE);
  return res;
}

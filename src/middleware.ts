import { NextRequest, NextResponse } from "next/server";
import properties from "./properties";
import { GlobalApiResponseBody } from "./modules/common/http/types";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (pathname.startsWith("/api")) {
    const apiKey = request.headers.get("X-API-KEY");

    if (!apiKey || apiKey !== properties.server.secretKey) {
      const response: GlobalApiResponseBody<null> = {
        code: "4001",
        message: "Missing or invalid API key",
        payload: null,
      };
      return NextResponse.json(response, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};

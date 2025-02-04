import { NextRequest, NextResponse } from "next/server";
import properties from "./properties";
import { GlobalApiResponseBody } from "./modules/common/http/types";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (pathname.startsWith("/api")) {
    const apiKey = request.headers.get("X-API-KEY");

    if (!apiKey || apiKey !== properties.server.secretKey) {
      const response: GlobalApiResponseBody<null> = {
        respCode: "4001",
        respMsg: "Missing or invalid API key",
        data: null,
      };
      return NextResponse.json(response, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};

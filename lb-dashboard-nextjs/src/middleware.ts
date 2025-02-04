import { NextRequest, NextResponse } from "next/server";
import properties from "./properties";
import { GlobalApiResponseBody } from "./modules/common/http/types";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // const apiKey = req.headers.get("X-API-KEY");

  // if (!apiKey || apiKey !== properties.server.secretKey) {
  //   const response: GlobalApiResponseBody<null> = {
  //     respCode: "4001",
  //     respMsg: "Missing or invalid API key",
  //     data: null,
  //   };
  //   return NextResponse.json(response, { status: 401 });
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};

// import { NextRequest, NextResponse } from "next/server";

// const PUBLIC_ROUTES = ["/", "/login", "/forgot"];
// const PROTECTED_ROUTES = ["/dashboard", "/settings"];

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   if (PUBLIC_ROUTES.includes(pathname)) {
//     return NextResponse.next();
//   }

//   if (PROTECTED_ROUTES.some((route) => pathname.startsWith(route))) {
//     const sessionId = request.cookies.get("session-id");

//     if (!sessionId) {
//       const loginUrl = new URL("/login", request.url);
//       return NextResponse.redirect(loginUrl);
//     }

//     return NextResponse.next();
//   }

//   const notFoundUrl = new URL("/404", request.url);
//   return NextResponse.redirect(notFoundUrl);
// }

// export const config = {
//   matcher: ["/", "/login", "/forgot", "/dashboard/:path*", "/settings/:path*"],
// };

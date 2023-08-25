import { NextRequest, NextResponse } from "next/server";
import { basicAuth } from "./middleware/basicAuth";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

export function middleware(req: NextRequest) {
  console.log(`middleware`);
  if (process.env.ENV !== "local") {
    return NextResponse.next();
  }
  const pathName = req.nextUrl.pathname;
  // console.log(pathName);
  if (
    pathName.startsWith("/((?!api|_next/static|_next/image|favicon.ico).*)")
  ) {
    // console.log(`basic認証かけるとこ`);
  } else {
    // console.log(`basic認証かけないとこ`);
  }
  const isBasicAuth = basicAuth(req);
  if (isBasicAuth) {
    return NextResponse.next();
  } else {
    return new Response("Auth required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Secure Area"',
      },
    });
  }
}

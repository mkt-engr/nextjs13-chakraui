import { NextRequest, NextResponse } from "next/server";

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

const USER_NAME = process.env.BASIC_USER;
const PASSWORD = process.env.BASIC_PASSWORD;

export function middleware(req: NextRequest) {
  if (process.env.ENV !== "local") {
    return NextResponse.next();
  }
  const basicAuth = req.headers.get("authorization");

  if (basicAuth) {
    const auth = basicAuth.split(" ")[1];
    const [user, password] = atob(auth).split(":");

    if (user === USER_NAME && password === PASSWORD) {
      return NextResponse.next();
    }
  }

  return new Response("Auth required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}

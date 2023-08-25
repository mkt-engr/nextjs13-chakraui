import { NextRequest, NextResponse } from "next/server";

const USER_NAME = process.env.BASIC_USER;
const PASSWORD = process.env.BASIC_PASSWORD;

export const basicAuth = (req: NextRequest) => {
  const basicAuth = req.headers.get("authorization");
  console.log(`basicAuth`);
  if (basicAuth) {
    const auth = basicAuth.split(" ")[1];
    const [user, password] = atob(auth).split(":");

    if (user === USER_NAME && password === PASSWORD) {
      return true;
    }
  }
  return false;
};

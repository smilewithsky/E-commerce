import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("access_token")?.value;
  const { pathname } = req.nextUrl;

  const isAuthPath = pathname.startsWith("/Auth");

  if (token && isAuthPath) {
    return NextResponse.next();
  }

  // ✅ Nếu không có token và đang truy cập trang cần auth (ví dụ: /dashboard)
  const isProtectedPath = !isAuthPath && !token;
  if (isProtectedPath) {
    return NextResponse.redirect(new URL("/Auth/Login", req.url));
  }
  return NextResponse.next(); // Cho phép đi tiếp
}

export const config = {
  matcher: ["/(|Auth.*)"],
};

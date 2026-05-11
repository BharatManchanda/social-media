import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./lib/jwt";

export function proxy(req: NextRequest) {
    const token = req.cookies.get("token")?.value;

    const protectedRoutes = ["/"];

    const isProtected = protectedRoutes.some((route) =>
        req.nextUrl.pathname.startsWith(route)
    );

    if (isProtected && !token) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
        if (token) verifyToken(token);
    } catch (err) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/",
    ],
};
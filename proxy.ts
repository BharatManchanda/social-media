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
        if (token) {
            const decoded = verifyToken(token);

            // clone request headers
            const requestHeaders = new Headers(req.headers);

            // pass user data
            requestHeaders.set("x-user-id", decoded.id);
            requestHeaders.set("x-user-email", decoded.email);

            return NextResponse.next({
                request: {
                    headers: requestHeaders,
                },
            });
        };
    } catch (err) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/",
        "/api/post",
    ],
};
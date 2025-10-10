import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {

    if (request.nextUrl.pathname.startsWith("/index") || request.nextUrl.pathname.startsWith("/home")) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    const isAuthentication = false;

    if (request.nextUrl.pathname.startsWith("/sign") && !isAuthentication) {
        return NextResponse.redirect(new URL("/signup", request.url));
    }

    if (request.nextUrl.pathname.startsWith("/signin") && isAuthentication) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    const isMaintenance = false;

    if (isMaintenance) {
        return NextResponse.redirect(new URL("/maintenance", request.url));
    }

    return NextResponse.next();
}
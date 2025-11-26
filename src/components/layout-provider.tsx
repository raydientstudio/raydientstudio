'use client';

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "./header";
import MainFooter from "./main-footer"
import { Main } from "./semantic/main";
import BriefFooter from "./brief-footer";

export function LayoutProvider({ children }: { children: ReactNode; }) {

    const pathname = usePathname();

    const briefFooterRoutes = [
        "/home",
        "/not-found",
        "/error",
        "/signup",
        "/login",
        "/docs",
        "/docs/introduction",
        "/docs/terms-and-conditions",
        "/docs/privacy-policy",
        "/docs/cookie-policy",
        "/docs/refund-and-replacement-policy",
        "/docs/shipping-and-delivery-policy",
        "/docs/cancellation-policy",
        "/docs/intellectual-property-policy",
        "/docs/partnership-program-policy",
        "/docs/warranty-and-guarantee-policy",
        "/docs/end-user-license-agreement",
        "/docs/non-disclosure-agreement",
        "/docs/service-level-agreement"
    ];

    const isBriefFooter = briefFooterRoutes.includes(pathname);

    const docsRoutes = [
        "/docs",
        "/docs/introduction",
        "/docs/terms-and-conditions",
        "/docs/privacy-policy",
        "/docs/cookie-policy",
        "/docs/refund-and-replacement-policy",
        "/docs/shipping-and-delivery-policy",
        "/docs/cancellation-policy",
        "/docs/intellectual-property-policy",
        "/docs/partnership-program-policy",
        "/docs/warranty-and-guarantee-policy",
        "/docs/end-user-license-agreement",
        "/docs/non-disclosure-agreement",
        "/docs/service-level-agreement"
    ];

    const isDocsPage = docsRoutes.includes(pathname);

    return (
        <>
            {isDocsPage ? null : <Header />}
            <Main display={"flex"} direction={"column"} justify={"center"} items={"start"} role={"main"} aria-hidden={"false"} className={isDocsPage ? "bg-surface" : "bg-background"}>{children}</Main>
            {isBriefFooter ? (isDocsPage ? null : <BriefFooter />) : <MainFooter />}
        </>
    );
}
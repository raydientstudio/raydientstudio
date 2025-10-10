import { Fragment, memo } from "react";
import { FlexLayout } from "./layout/flex-layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";
import { Separator } from "./ui/separator";
import { SidebarTrigger } from "./ui/sidebar";
import ThemeChanger from "./theme-changer";

const docsRoutes = [
    { path: "/docs", title: "Docs" },
    { path: "/docs/introduction", title: "Introduction" },
    { path: "/docs/terms-and-conditions", title: "Terms and Conditions" },
    { path: "/docs/privacy-policy", title: "Privacy Policy" },
    { path: "/docs/cookie-policy", title: "Cookie Policy" },
    { path: "/docs/refund-and-replacement-policy", title: "Refund and Replacement Policy" },
    { path: "/docs/shipping-and-delivery-policy", title: "Shipping and Delivery Policy" },
    { path: "/docs/cancellation-policy", title: "Cancellation Policy" },
    { path: "/docs/intellectual-property-policy", title: "Intellectual Property Policy" },
    { path: "/docs/partnership-program-policy", title: "Partnership Program Policy" },
    { path: "/docs/warranty-and-guarantee-policy", title: "Warranty and Guarantee Policy" },
    { path: "/docs/end-user-license-agreement", title: "End User License Agreement" },
    { path: "/docs/non-disclosure-agreement", title: "Non-Disclosure Agreement" },
    { path: "/docs/service-level-agreement", title: "Service Level Agreement" },
];

const DocsHeader = ({ index }: { index: number }) => {

    const currentRoute = docsRoutes[index] || docsRoutes[0];

    const breadcrumbItems = [
        { isLink: true, title: "Home", href: "/" },
        ...(index > 0 ? [{ isLink: true, title: "Docs", href: "/docs" }] : []),
        { isLink: false, title: currentRoute.title },
    ];

    return (
        <header className="fixed z-10 top-0 left-0 right-0 flex h-16 shrink-0 rounded-b-lg border-b border-border border-dashed bg-surface backdrop-blur supports-[backdrop-filter]:bg-surface/80 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <FlexLayout direction={"row"} items={"center"} gapX={2} paddingX={4} width={"full"}>
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="data-[orientation=vertical]:h-4" />
                <Breadcrumb>
                    <BreadcrumbList>
                        {breadcrumbItems.map((item, idx) => (
                            <Fragment key={idx}>
                                <BreadcrumbItem>
                                    {item.isLink ? (
                                        <BreadcrumbLink href={item.href}>{item.title}</BreadcrumbLink>
                                    ) : (
                                        <BreadcrumbPage>{item.title}</BreadcrumbPage>
                                    )}
                                </BreadcrumbItem>
                                {idx < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
                            </Fragment>
                        ))}
                    </BreadcrumbList>
                </Breadcrumb>
                <FlexLayout marginLeft={"auto"}>
                    <ThemeChanger />
                </FlexLayout>
            </FlexLayout>
        </header>
    );
};

export default memo(DocsHeader);
"use client";

import { Fragment, memo } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Separator } from "./ui/separator";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";
import ThemeChanger from "./theme-changer";

const docsRoutes = [
  { path: "/docs", title: "Docs" },
  { path: "/docs/introduction", title: "Introduction" },
  { path: "/docs/terms-and-conditions", title: "Terms and Conditions" },
  { path: "/docs/privacy-policy", title: "Privacy Policy" },
  { path: "/docs/cookie-policy", title: "Cookie Policy" },
  {
    path: "/docs/refund-and-replacement-policy",
    title: "Refund and Replacement Policy",
  },
  {
    path: "/docs/shipping-and-delivery-policy",
    title: "Shipping and Delivery Policy",
  },
  { path: "/docs/cancellation-policy", title: "Cancellation Policy" },
  {
    path: "/docs/intellectual-property-policy",
    title: "Intellectual Property Policy",
  },
  { path: "/docs/partnership-policy", title: "Partnership Policy" },
  {
    path: "/docs/warranty-and-guarantee-policy",
    title: "Warranty and Guarantee Policy",
  },
  {
    path: "/docs/end-user-license-agreement",
    title: "End User License Agreement",
  },
  { path: "/docs/non-disclosure-agreement", title: "Non-Disclosure Agreement" },
  { path: "/docs/service-level-agreement", title: "Service Level Agreement" },
];

const DocsHeader = ({ index }: { index: number }) => {
  const { state } = useSidebar(); // Access the sidebar state ("expanded" or "collapsed")

  const currentRoute = docsRoutes[index] || docsRoutes[0];

  const breadcrumbItems = [
    { isLink: true, title: "Home", href: "/" },
    ...(index > 0 ? [{ isLink: true, title: "Docs", href: "/docs" }] : []),
    { isLink: false, title: currentRoute.title },
  ];

  return (
    <header className={`fixed z-10 top-0 flex h-16 shrink-0 rounded-b-lg border-b border-border border-dashed bg-surface backdrop-blur supports-backdrop-filter:bg-surface/80 items-center transition-[left,width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12
            ${state === "expanded" ? "left-0 md:left-64 w-[calc(100%-0px)] md:w-[calc(100%-256px)]" : "left-0 md:left-12 w-[calc(100%-0px)] md:w-[calc(100%-48px)]"}`}>
      <div className="flex flex-row items-center gap-x-2 p-x-4 w-full">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="data-[orientation=vertical]:h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbItems.map((item, idx) => (
              <Fragment key={idx}>
                <BreadcrumbItem>
                  {item.isLink ? (
                    <BreadcrumbLink href={item.href}>
                      {item.title}
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{item.title}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {idx < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        <div className="ml-auto">
            <ThemeChanger />
        </div>
      </div>
    </header>
  );
};

export default memo(DocsHeader);
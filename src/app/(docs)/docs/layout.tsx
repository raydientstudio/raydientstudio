import Main from "@/components/main";
import { AppSidebar, DocsHeader, DocsFooter } from "@/components";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default function DocsLayout({ children }: { children: ReactNode }) {
    return (
        <Main>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    {children}
                    <DocsFooter raw={"/docs"} previous={"/"} next={"/docs/introduction"} />
                </SidebarInset>
            </SidebarProvider>
        </Main>
    );
}
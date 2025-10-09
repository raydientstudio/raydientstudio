'use client';

import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { FlexLayout } from "@/components/layout/flex-layout";
import Link from "next/link";

const RouterButton = ({
    onClick,
    variant,
    size,
    radius,
    children,
}: {
    onClick: () => void;
    variant: "destructive" | "elevated" | "filled" | "linked" | "outlined" | "text" | "tonal";
    size: "small" | "badge" | "default" | "natural" | "large" | "action" | "icon" | "social" | "wide";
    radius: "none" | "small" | "medium" | "large" | "full" | null | undefined;
    children: React.ReactNode;
}) => (
    <Button onClick={onClick} variant={variant} size={size} radius={radius}>
        {children}
    </Button>
);

export default function CookiePolicy() {
    const router = useRouter();
    const navigateTo = (path: string) => router.push(path);

    return (
        <FlexLayout
            direction="col"
            justify="start"
            items="start"
            paddingX={4}
            paddingY={8}
            spaceY={4}
        >
            <div className="mt-16">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Cookie Policy</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="space-y-4">
                <h2 className="text-3xl font-bold text-primary">Cookie Policy</h2>
                <p className="text-sm text-muted-foreground">
                    Effective Date: 24/07/2025 – Present <br />
                    Business Name: Raydient Studio <br />
                    Website: <Link className="text-blue-600 underline" href="https://raydientstudio.com" target="_blank" rel="noopener">raydientstudio.com</Link>
                </p>

                <p>
                    We use cookies and similar tracking technologies to enhance user experience, improve website performance, and deliver relevant content.
                </p>

                <h3 className="text-xl font-semibold mt-6">1. What Are Cookies</h3>
                <p>
                    Cookies are small text files stored on your device when you visit our website. They help us remember your preferences, understand how visitors interact with the site, and ensure essential features operate correctly.
                </p>

                <h3 className="text-xl font-semibold mt-6">2. Types of Cookies We Use</h3>
                <div className="space-y-2">
                    <p><strong>2.1 Essential Cookies</strong><br />
                        Necessary for basic website functionality, including secure login and smooth navigation.
                    </p>
                    <p><strong>2.2 Performance Cookies</strong><br />
                        Help us analyze website usage to improve speed, navigation, and user experience.
                    </p>
                    <p><strong>2.3 Functional Cookies</strong><br />
                        Enable us to remember your preferences, such as language or display settings.
                    </p>
                    <p><strong>2.4 Marketing Cookies (if applicable)</strong><br />
                        Used to deliver relevant advertisements or promotional content, either by us or third parties.
                    </p>
                </div>

                <h3 className="text-xl font-semibold mt-6">3. Your Control</h3>
                <p>
                    You can manage or disable cookies through your browser settings. Disabling essential cookies may impact core functionality.
                </p>

                <h3 className="text-xl font-semibold mt-6">4. Data Privacy</h3>
                <p>
                    All cookie-related data is handled in accordance with our{" "}
                    <Link href="/docs/privacy-policy" className="text-blue-600 underline">
                        Privacy Policy
                    </Link>{" "}
                    and is not shared with third parties without your consent.
                </p>
            </div>

            <div className="flex flex-row items-center justify-between w-full pt-8">
                <RouterButton onClick={() => navigateTo("/docs/privacy-policy")} variant="tonal" size="small" radius="medium">
                    <IconArrowLeft />
                    Privacy Policy
                </RouterButton>
                <RouterButton onClick={() => navigateTo("/docs/refund-and-replacement-policy")} variant="tonal" size="small" radius="medium">
                    Refund & Replacement Policy
                    <IconArrowRight />
                </RouterButton>
            </div>
        </FlexLayout>
    );
}
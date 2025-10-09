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

export default function PrivacyPolicy() {
    const router = useRouter();
    const navigateTo = (path: string) => router.push(path);

    return (
        <FlexLayout
            display="flex"
            direction="col"
            justify="start"
            items="start"
            paddingX={4}
            paddingY={8}
            spaceY={6}
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
                            <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="space-y-4">
                <h2 className="text-3xl font-bold text-primary">Privacy Policy</h2>
                <p className="text-sm text-muted-foreground">
                    Effective Date: 24/07/2025 – Present
                    <br />
                    Raydient Studio (“we,” “our,” or “us”) is committed to safeguarding your privacy and protecting any personal information that you provide while using our website, products, or services.
                </p>

                <p>
                    This Privacy Policy outlines how we collect, use, disclose, and protect your data in accordance with applicable laws.
                </p>

                <h3 className="text-xl font-semibold mt-6">1. Information We Collect</h3>
                <div className="space-y-2">
                    <p><strong>a. Personal Information:</strong></p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Phone number (if provided)</li>
                        <li>Billing and payment details</li>
                        <li>Order history and transaction data</li>
                    </ul>

                    <p><strong>b. Non-Personal Information:</strong></p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Browser type and version</li>
                        <li>Device information</li>
                        <li>IP address</li>
                        <li>Time and date of visit</li>
                        <li>Usage data through cookies or similar technologies</li>
                    </ul>
                </div>

                <h3 className="text-xl font-semibold mt-6">2. How We Use Your Information</h3>
                <ul className="list-disc list-inside space-y-1">
                    <li>Process orders and transactions</li>
                    <li>Communicate order status and support queries</li>
                    <li>Send promotional emails or updates (if opted-in)</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6">3. Sharing Your Information</h3>
                <p>
                    We do not sell, rent, or lease your personal data to third parties. We may share your information with:
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Trusted third-party service providers (e.g., payment processors) solely to facilitate services</li>
                    <li>Legal or regulatory authorities if required by law</li>
                </ul>
                <p>All third-party service providers are bound by confidentiality and data protection agreements.</p>

                <h3 className="text-xl font-semibold mt-6">4. Data Protection & Security</h3>
                <p>We implement appropriate measures to protect your data including:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>SSL encryption</li>
                    <li>Secure servers</li>
                    <li>Limited access to personal data by authorized personnel only</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6">5. Your Rights</h3>
                <p>You may have the right to:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Access the personal data we hold about you</li>
                    <li>Correct or update your information</li>
                    <li>Request deletion of your data (subject to legal requirements)</li>
                    <li>Withdraw consent for marketing communications</li>
                </ul>
                <p>To exercise these rights, contact us at <Link href="mailto:info@raydientstudio.com" className="text-blue-600 underline">info@raydientstudio.com</Link>.</p>

                <h3 className="text-xl font-semibold mt-6">6. Cookies Policy</h3>

                <p>
                    We use cookies and similar tracking technologies to enhance user experience, improve website performance, and deliver relevant content.
                </p>

                <h4 className="font-semibold">6.1 What Are Cookies</h4>
                <p>
                    Cookies are small text files stored on your device when you visit our site. They help us remember preferences, understand interactions, and ensure functionality.
                </p>

                <h4 className="font-semibold">6.2 Types of Cookies We Use</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Essential Cookies</strong> – Required for core functionality.</li>
                    <li><strong>Performance Cookies</strong> – Help analyze usage and improve experience.</li>
                    <li><strong>Functional Cookies</strong> – Remember settings and preferences.</li>
                    <li><strong>Marketing Cookies</strong> – May be used for personalized ads or content.</li>
                </ul>

                <h4 className="font-semibold">6.3 Your Control</h4>
                <p>
                    You can manage or disable cookies via browser settings. Some site features may not work correctly without essential cookies.
                </p>

                <h4 className="font-semibold">6.4 Data Privacy</h4>
                <p>
                    All data collected through cookies is handled per this policy and never shared externally.
                </p>

                <h3 className="text-xl font-semibold mt-6">7. Third-Party Links</h3>
                <p>
                    Our site may link to third-party websites. We are not responsible for their practices and encourage reviewing their privacy policies.
                </p>

                <h3 className="text-xl font-semibold mt-6">8. Children’s Privacy</h3>
                <p>
                    We do not knowingly collect information from children under 13. If such data is identified, we will promptly delete it.
                </p>

                <h3 className="text-xl font-semibold mt-6">9. Policy Updates</h3>
                <p>
                    We may update this Privacy Policy anytime. Continued use of our services indicates acceptance of the changes.
                </p>

                <h3 className="text-xl font-semibold mt-6">10. Contact Us</h3>
                <p>
                    For privacy-related concerns:
                    <br />
                    Email: <Link href="mailto:info@raydientstudio.com" className="text-blue-600 underline">info@raydientstudio.com</Link>
                    <br />
                    Business Name: Raydient Studio™
                    <br />
                    Location: India
                </p>
            </div>

            <div className="flex flex-row items-center justify-between w-full pt-8">
                <RouterButton onClick={() => navigateTo("/docs/terms-and-conditions")} variant="tonal" size="small" radius="medium">
                    <IconArrowLeft />
                    Terms and Conditions
                </RouterButton>
                <RouterButton onClick={() => navigateTo("/docs/cookie-policy")} variant="tonal" size="small" radius="medium">
                    Cookie Policy
                    <IconArrowRight />
                </RouterButton>
            </div>
        </FlexLayout>
    );
}
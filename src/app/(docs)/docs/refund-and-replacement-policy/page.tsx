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

export default function RefundAndReplacementPolicy() {
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
                            <BreadcrumbPage>Refund and Replacement Policy</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="space-y-4">
                <h2 className="text-3xl font-bold text-primary">Refund, Revision & No Return Policy</h2>
                <p className="text-sm text-muted-foreground">
                    Effective Date: 24/07/2025 – Present
                    <br />
                    Business Name: Raydient Studio (hereinafter referred to as “Raydient Studio,” “we,” “us,” or “our”)
                    <br />
                    Website: <Link href="https://raydientstudio.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">raydientstudio.com</Link>
                </p>

                {/* 1. Revision Policy */}
                <h3 className="text-xl font-semibold mt-6">1. Revision Policy</h3>
                <p><strong>1.1 Standard Revisions:</strong> All projects include a defined number of revisions, as specified in the official proposal or service agreement. Revisions are intended to refine the original deliverable within the agreed scope, not to initiate entirely new concepts or change approved directions.</p>
                <p><strong>1.2 Additional Revisions:</strong> If you require revisions beyond the included number, additional charges may apply, communicated transparently before proceeding.</p>

                {/* 2. Replacement Policy */}
                <h3 className="text-xl font-semibold mt-6">2. Replacement Policy</h3>
                <p>
                    As Raydient Studio is a service-based agency and does not sell digital products as stand-alone purchases, the concept of “replacement” does not typically apply.
                </p>
                <p>
                    In the rare event of technical errors or deliverable corruption, we will correct or re-deliver the affected files promptly at no additional cost within the agreed project timeline.
                </p>

                {/* 3. Refund Policy */}
                <h3 className="text-xl font-semibold mt-6">3. Refund Policy</h3>
                <p><strong>3.1 General Principle:</strong> Due to the custom, creative, and service-oriented nature of our work, all payments are non-refundable. This ensures fairness for the time, expertise, and resources allocated to your project.</p>

                <p><strong>3.2 Exceptional Refund Eligibility:</strong> Refunds will only be considered under exceptional circumstances, such as:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Non-delivery of services where no work has commenced due to internal scheduling failure.</li>
                    <li>Duplicate payment due to a technical error on our payment gateway.</li>
                </ul>

                <p><strong>3.3 Refund Conditions:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Requests must be submitted within 7 days of payment.</li>
                    <li>Refunds will be processed via the original payment method within 7–10 business days.</li>
                    <li>Refunds will not be granted once project work has commenced or resources have been allocated.</li>
                </ul>

                {/* 4. No Return Policy */}
                <h3 className="text-xl font-semibold mt-6">4. No Return Policy</h3>
                <p>
                    As a service-based agency, returns are not applicable since services such as design drafts, consultations, and development code are non-returnable and non-reversible once delivered.
                </p>

                {/* 5. Process for Refund Requests */}
                <h3 className="text-xl font-semibold mt-6">5. Process for Refund Requests</h3>
                <p>
                    To request a refund under exceptional eligibility, please email:
                    <br />
                    <strong>Email:</strong> <Link href="mailto:issue@raydientstudio.com" className="text-blue-600 underline">issue@raydientstudio.com</Link>
                </p>
                <p>Include the following:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Project Reference ID or Invoice Number</li>
                    <li>Detailed reason for the request</li>
                    <li>Any supporting proof (e.g. duplicate payment receipts)</li>
                </ul>
                <p><strong>Response Timeline:</strong> You will receive an acknowledgement within 1–3 business days. Approved refunds will be processed within 7–10 business days.</p>

                {/* 6. Purpose of the Policy */}
                <h3 className="text-xl font-semibold mt-6">6. Purpose of This Policy</h3>
                <p>This policy has been established to:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Ensure clarity, fairness, and professionalism in our client engagements</li>
                    <li>Protect the time and expertise invested by Raydient Studio’s team</li>
                    <li>Uphold the integrity of our operational, ethical, and legal standards</li>
                </ul>
            </div>

            <div className="flex flex-row items-center justify-between w-full pt-8">
                <RouterButton onClick={() => navigateTo("/docs/cookie-policy")} variant="tonal" size="small" radius="medium">
                    <IconArrowLeft />
                    Cookie Policy
                </RouterButton>
                <RouterButton onClick={() => navigateTo("/docs/shipping-and-delivery-policy")} variant="tonal" size="small" radius="medium">
                    Shipping Policy
                    <IconArrowRight />
                </RouterButton>
            </div>
        </FlexLayout>
    );
}

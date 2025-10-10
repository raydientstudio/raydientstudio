'use client';

import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import {
	SidebarInset,
	SidebarProvider,
} from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { IconChevronLeft, IconChevronRight, IconCopy } from "@tabler/icons-react";
import { FlexLayout } from "@/components/layout/flex-layout";
import DocsHeader from "@/components/docs-header";
import { docsRoutes } from "@/utils/routes";

const policies = [
	{
		title: "Terms and Conditions (T&C):",
		description: "Outlines the rules, obligations, and guidelines governing the use of Raydient Studio’s website, services, or projects.",
	},
	{
		title: "Privacy Policy:",
		description: "Describes how Raydient Studio collects, processes, stores, protects, and uses personal data and client information.",
	},
	{
		title: "Cookie Policy:",
		description: "We use cookies and similar tracking technologies to enhance user experience, improve website performance, and provide relevant content.",
	},
	{
		title: "Refund and Replacement Policy:",
		description: "Defines the conditions, eligibility, and processes for obtaining refunds or replacements related to services and projects.",
	},
	{
		title: "Shipping & Delivery Policy:",
		description: "Details the process, timelines, and responsibilities associated with delivering projects or services digitally.",
	},
	{
		title: "Cancellation Policy:",
		description: "Sets out the terms and procedure for cancelling booked projects or service contracts.",
	},
	{
		title: "Intellectual Property (IP) Policy:",
		description: "Clarifies ownership rights, usage permissions, and restrictions on Raydient Studio’s intellectual property and client deliverables.",
	},
	{
		title: "Partnership Program Policy:",
		description: "Defines the structure, terms, and commitments under Raydient Studio’s brand partnership program for continuous services and support.",
	},
	{
		title: "Warranty and Guarantee Policy:",
		description: "Provides details on the coverage, duration, conditions, and claims procedure for warranties and guarantees on services or project deliverables.",
	},
	{
		title: "End-User License Agreement (EULA):",
		description: "Specifies the licensing terms, permitted usage, and restrictions applicable to software or digital products provided by Raydient Studio.",
	},
	{
		title: "Non-Disclosure Agreement (NDA):",
		description: "Establishes confidentiality obligations between Raydient Studio and clients, contractors, or partners to protect sensitive information.",
	},
	{
		title: "Service Level Agreement (SLA):",
		description: "Defines service standards, performance expectations, responsibilities, and remedies associated with Raydient Studio’s service delivery.",
	},
];

const RouterButton = ({ onClick, variant, size, radius, children }: { onClick: () => void, variant: "destructive" | "elevated" | "filled" | "linked" | "outlined" | "text" | "tonal", size: "small" | "badge" | "default" | "natural" | "large" | "action" | "icon" | "social" | "wide", radius: "none" | "small" | "medium" | "large" | "full" | null | undefined, children: React.ReactNode }) => (
	<Button onClick={onClick} variant={variant} size={size} radius={radius}>
		{children}
	</Button>
);

export default function Introduction() {

	const router = useRouter();

	const navigateTo = (path: string) => router.push(path);

	return (
		<>
			<SidebarProvider>
				<AppSidebar />
				<SidebarInset>
					<DocsHeader index={1} />
					<FlexLayout display={"flex"} direction={"col"} justify={"start"} items={"start"} width={"full"} height={"fit-content"} paddingX={4} paddingY={6} spaceY={6}>
						<FlexLayout display={"flex"} direction={"col"} spaceY={4} marginTop={16}>
							<h2 className="text-3xl font-bold text-primary">
								Introduction
							</h2>
							<ol className="space-y-4 list-decimal list-inside text-base leading-relaxed">
								{policies.map((policy, index) => (
									<li key={index}>
										<strong>{policy.title}</strong> {policy.description}
									</li>
								))}
							</ol>
						</FlexLayout>
						<FlexLayout display="flex" direction="row" items="center" width="full">
							<Button onClick={() => navigateTo("/docs")} variant="tonal" size="small" radius="medium">
								<IconCopy />
								Copy Docs
							</Button>
							<FlexLayout direction={"row"} marginLeft={"auto"} spaceX={2}>
								<RouterButton onClick={() => navigateTo(docsRoutes[1])} variant="tonal" size="icon" radius="medium">
									<IconChevronLeft />
								</RouterButton>
								<RouterButton onClick={() => navigateTo(docsRoutes[3])} variant="tonal" size="icon" radius="medium">
									<IconChevronRight />
								</RouterButton>
							</FlexLayout>
						</FlexLayout>
					</FlexLayout>
				</SidebarInset>
			</SidebarProvider >
		</>
	);
}
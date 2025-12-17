'use client';

import Link from "next/link";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { FlexLayout } from "@/components/layout/flex-layout";
import { docsRoutes } from "@/utils/routes";
import DocsHeader from "@/components/docs-header";
import DocsFooter from "@/components/docs-footer";

export default function DocsPage() {
	return (
		<>
			<SidebarProvider>
				<AppSidebar />
				<SidebarInset>
					<DocsHeader index={0} />
					<FlexLayout display={"flex"} direction={"col"} justify={"start"} items={"start"} width={"full"} height={"fit-content"} paddingX={4} paddingY={6} spaceY={6}>
						<FlexLayout display={"flex"} direction={"col"} spaceY={4} marginTop={16}>
							<h2 className="text-3xl font-bold text-primary">
								Docs
							</h2>

							<p className="text-sm text-muted-foreground">
								Effective Date: 24/07/2025 – Present <br />
								Business Name: Raydient Studio (hereinafter referred to as “Raydient Studio,” “we,” “us,” or “our”) <br />
								Website: <Link className="text-link hover:underline active:underline" href="https://raydientstudio.com" target="_blank" rel="noopener">raydientstudio.com</Link>
							</p>

							<p>
								Welcome to the centralized documentation hub of Raydient Studio™, your trusted remote-first premium design and frontend development agency. This portal serves as the authoritative source for all operational, legal, licensing, and service-related policies that govern our engagement with clients, partners, and third parties.
							</p>

							<p>
								All documents presented herein have been curated to establish clarity, uphold contractual fairness, ensure data and intellectual property compliance, and reflect our commitment to delivering world-class digital services under a legally sound and transparent framework.
							</p>

							<p>
								Whether you are a client, collaborator, or vendor, we strongly advise you to review the relevant documents before entering into any agreement, submitting a project request, or engaging in business with Raydient Studio™.
							</p>

							<h3 className="text-xl font-semibold mt-6">
								Legal Standing
							</h3>

							<p>
								All policies, agreements, and terms published under this portal are legally binding within applicable jurisdictions and may be updated periodically to reflect regulatory changes or internal process improvements.
							</p>

							<p>
								Your use of any Raydient Studio™ services constitutes your full acceptance of the latest versions of these documents.
							</p>

							<p>
								Unauthorized usage, misrepresentation, or violation of these documents may result in contractual termination or legal action.
							</p>

							<h3 className="text-xl font-semibold mt-6">
								Contact for Documentation Inquiries
							</h3>

							<p>
								For any documentation-related concerns, clarifications, or formal questions regarding our service terms, business operations, or licensing structure, please contact:
							</p>

							<p>
								Email: <Link href="mailto:info@raydientstudio.com" className="text-link hover:underline active:underline">info@raydientstudio.com</Link> <br />
								Business Name: Raydient Studio™ <br />
								Location: West Bengal, India
							</p>

							<p>
								This documentation portal is maintained with utmost precision to uphold transparency, trust, and regulatory alignment in all our professional dealings.
							</p>
						</FlexLayout>
						<DocsFooter raw={"/docs"} previous={"/"} next={docsRoutes[2]} />
					</FlexLayout>
				</SidebarInset>
			</SidebarProvider>
		</>
	);
}
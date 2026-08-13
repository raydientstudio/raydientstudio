"use client";

import { IconArrowLeft, IconArrowRight, IconBrandGithub, IconBrandGoogleDrive, IconBrandHtml5, IconBrandOpenai, IconChevronUp, IconCopy } from "@tabler/icons-react";
import Button from "./ui/button";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { ButtonGroup, ButtonGroupSeparator } from "./ui/button-group";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useSidebar } from "./ui/sidebar";

const DocsFooter = ({ raw, previous, next }: { raw: string, previous: string, next: string }) => {

    // --- Hooks ---
    const router = useRouter();
    const { state } = useSidebar();

    // --- Handlers ---
    const navigateTo = useCallback(
        (path: string) => {
            router.push(path);
        },
        [router]
    );

    return (
        <div className={`fixed z-10 bottom-0 flex h-16 shrink-0 rounded-t-lg border-t border-border border-dashed bg-surface backdrop-blur supports-backdrop-filter:bg-surface/80 items-center transition-[left,width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12
                 ${state === "expanded" ? "left-0 md:left-64 w-[calc(100%-0px)] md:w-[calc(100%-256px)]" : "left-0 md:left-12 w-[calc(100%-0px)] md:w-[calc(100%-48px)]"}`}>
            <div className="flex flex-row items-center gap-x-2 p-x-4 w-full">
                <ButtonGroup orientation={"horizontal"}>
                    <Button onClick={() => navigateTo(raw)} variant="tonal" size="small" radius="medium" className="text-button-14">
                        <IconCopy />
                        Copy Docs
                    </Button>
                    <ButtonGroupSeparator />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="tonal" size="small" radius="medium">
                                <IconChevronUp />
                            </Button>
                        </DropdownMenuTrigger>
                        {/* DropdownMenuContent would go here */}
                        <DropdownMenuContent align="end">
                            {/* Add dropdown items here */}
                            <DropdownMenuGroup>
                                <DropdownMenuItem><IconBrandHtml5 /> View as HTML</DropdownMenuItem>
                                <DropdownMenuItem><IconBrandGithub /> Open in GitHub</DropdownMenuItem>
                                <DropdownMenuItem><IconBrandOpenai /> Open in ChatGPT</DropdownMenuItem>
                                <DropdownMenuItem><IconBrandGoogleDrive /> Open in Google Drive</DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </ButtonGroup>

                <div className="flex md:hidden flex-row ml-auto space-x-2">
                    <Button aria-label="arrow-left" onClick={() => navigateTo(previous)} asIcon variant="tonal" size="route" radius="medium">
                        <IconArrowLeft />
                    </Button>
                    <Button aria-label="arrow-right" onClick={() => navigateTo(next)} asIcon variant="tonal" size="route" radius="medium">
                        <IconArrowRight />
                    </Button>
                </div>
                <div className="hidden md:flex flex-row ml-auto space-x-4">
                    <Button onClick={() => navigateTo(previous)} variant="tonal" size="medium" radius="medium">
                        <IconArrowLeft />
                        Previous
                    </Button>
                    <Button onClick={() => navigateTo(next)} variant="tonal" size="medium" radius="medium">
                        Next
                        <IconArrowRight />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DocsFooter;
"use client";

import { IconBrandGithub, IconBrandGoogleDrive, IconBrandHtml5, IconBrandOpenai, IconChevronLeft, IconChevronRight, IconChevronUp, IconCopy } from "@tabler/icons-react";
import { FlexLayout } from "./layout/flex-layout";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { ButtonGroup } from "./ui/button-group";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

const DocsFooter = ({raw, previous, next} : {raw: string, previous: string, next: string}) => {

    // --- Hooks ---
    const router = useRouter();

    // --- Handlers ---
    const navigateTo = useCallback(
        (path: string) => {
            router.push(path);
        },
        [router]
    );
    
	return (
        <FlexLayout display="flex" direction="row" items="center" width="full">
            <ButtonGroup>
                <Button onClick={() => navigateTo(raw)} variant="tonal" size="small" radius="medium">
                    <IconCopy />
                    Copy Docs
                </Button>
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
            
            <FlexLayout display={{ initial: "flex", medium: "hidden" }} direction={"row"} marginLeft={"auto"} spaceX={2}>
                <Button onClick={() => navigateTo(previous)} variant="tonal" size="icon" radius="medium">
                    <IconChevronLeft />
                </Button>
                <Button onClick={() => navigateTo(next)} variant="tonal" size="icon" radius="medium">
                    <IconChevronRight />
                </Button>
            </FlexLayout>
            <FlexLayout display={{ initial: "hidden", medium: "flex" }} direction={"row"} marginLeft={"auto"} spaceX={4}>
                <Button onClick={() => navigateTo(previous)} variant="tonal" size="default" radius="medium">
                    <IconChevronLeft />
                    Previous
                </Button>
                <Button onClick={() => navigateTo(next)} variant="tonal" size="default" radius="medium">
                    Next
                    <IconChevronRight />
                </Button>
            </FlexLayout>
        </FlexLayout>
	);
};

export default DocsFooter;
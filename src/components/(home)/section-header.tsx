import React, { ReactNode } from "react";
import { JetBrains_Mono } from "@/fonts/local";
import { IconSquareFilled } from "@tabler/icons-react";
import { FlexLayout } from "../layout/flex-layout";

type Info = {
    title: string;
    subtitle: string | ReactNode;
};

export default function SectionHeader({ info }: { info: Info }) {
    return (
        <FlexLayout display={"flex"} direction={"col"} justify={"start"} items={"start"} align={"left"} width={"full"} height={"fit-content"} gapY={2}>
            <FlexLayout display={"inline-flex"} direction={"row"} justify={"start"} items={"start"} gapX={1}>
                <IconSquareFilled size={12} className="text-foreground" />
                <h2 className={`${JetBrains_Mono.className} antialiased translate-y-px md:translate-y-0 text-xs font-medium tracking-tight leading-none items-center text-muted-foreground`}>
                    {info.title}
                </h2>
            </FlexLayout>
            <h3 className="text-xl font-medium text-foreground normal-case leading-[1.3]">
                {info.subtitle}
            </h3>
        </FlexLayout>
    );
}
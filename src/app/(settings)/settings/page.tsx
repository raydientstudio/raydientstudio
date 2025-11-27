'use client';

import { useSettings } from "@/hooks/use-settings";
import { Separator } from "@/components/ui/separator";
import { Settings, SettingsItem, SettingsTitle } from "@/components/settings";
import { IconArrowsTransferUpDown } from "@tabler/icons-react";
import { Section } from "@/components/semantic/section";
import { Container } from "@/components/semantic/container";

export default function SettingsPage() {
    
    /* Hooks */
    const { isScrollbarDisabled, toggleScrollbar } = useSettings();

    return (
        <Section distance={6}>
            <Container distance={4}>
                <Settings display={"flex"} direction={"col"} spaceY={4} marginTop={16} width={"full"} height={"fit"}>
                    <SettingsTitle>Settings</SettingsTitle>
                    <Separator />
                    <SettingsItem icon={IconArrowsTransferUpDown} label={"Disable Scrollbar"} state={isScrollbarDisabled} action={toggleScrollbar} />
                </Settings>
            </Container>
        </Section>
    );
}
"use client";

import { useSettings } from "@/hooks/use-settings";
import { Separator } from "@/components/ui/separator";
import { Settings, SettingsItem, SettingsTitle } from "@/components/settings";
import { IconArrowsTransferUpDown } from "@tabler/icons-react";
import { BellDotIcon } from "lucide-react";

export default function SettingsPage() {
    
    /* Hooks */
    const { isScrollbarDisabled, toggleScrollbar } = useSettings();

    return (
        <section className="py-6">
            <div className="px-4">
                <Settings className="flex flex-col space-y-4 mt-16 w-full h-fit">
                    <SettingsTitle>Settings</SettingsTitle>
                    <Separator />
                    <SettingsItem icon={BellDotIcon} label={"Enable Notifications"} state={isScrollbarDisabled} action={toggleScrollbar} />
                    <SettingsItem icon={IconArrowsTransferUpDown} label={"Disable Scrollbar"} state={isScrollbarDisabled} action={toggleScrollbar} />
                </Settings>
            </div>
        </section>
    );
}
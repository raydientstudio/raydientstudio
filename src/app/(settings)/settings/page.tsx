'use client';

import { useSettings } from "@/hooks/use-settings";
import { Switch } from '@/components/ui/switch';
import { Label } from "@/components/ui/label";
import { FlexLayout } from "@/components/layout/flex-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {

    const { isScrollbarDisabled, toggleScrollbar } = useSettings();

    return (
        <FlexLayout display={"flex"} direction={"col"} justify={"start"} items={"start"} width={"full"} height={"fit-content"} paddingX={4} paddingY={6} spaceY={6}>
            <FlexLayout display={"flex"} direction={"col"} spaceY={4} marginTop={16} width={"full"}>
                <h2 className="text-3xl font-bold text-primary">
                    Settings
                </h2>
                <Separator />
                <Card className="group overflow-hidden bg-card border-border w-full transition-all duration-300 px-4 py-4 hover:-translate-y-1">
                    <CardContent className="flex flex-row justify-between items-center space-x-4 p-0">
                        <Label htmlFor="scrollbar-toggle">Disable Scrollbar</Label>
                        <Switch id="scrollbar-toggle" checked={isScrollbarDisabled} onCheckedChange={toggleScrollbar} />
                    </CardContent>
                </Card>
            </FlexLayout>
        </FlexLayout>
    );
}
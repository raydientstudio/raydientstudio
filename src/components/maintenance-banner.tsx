import React from "react";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch-old";
import { useSettings } from "../hooks/use-settings";

function MaintenanceBanner() {

    const { isMaintenance, toggleMaintenance } = useSettings();
    
    return (
        <>
            <div className="bg-yellow-200 text-yellow-900 p-4 text-center font-semibold">
                The site is currently under maintenance. Some features may be unavailable.
            </div>
            <div className="flex items-center space-x-2">
                <Switch id="scrollbar-toggle" checked={isMaintenance} onCheckedChange={toggleMaintenance} />
                <Label htmlFor="scrollbar-toggle">Disable Maintenance Mode</Label>
            </div>
        </>
    )

};

export default MaintenanceBanner;
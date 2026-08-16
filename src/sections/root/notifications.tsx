"use client";

import React from "react";
import Button from "../../components/ui/button";
import { BellDotIcon } from "lucide-react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "../../components/ui/drawer";
import { useMobileMenu } from "../../components/mobile-menu";

export default function Notifications() {

    const { isMenuOpen } = useMobileMenu();
    
    return (
        <Drawer> {/* Drawer for Notifications */}
            <DrawerTrigger asChild>
                <Button asIcon disabled={ isMenuOpen } aria-label={"notifications"} variant="outline" size="medium" radius={"full"}>
                    <BellDotIcon />
                </Button>
            </DrawerTrigger>
            {/* Drawer content can be added here */}
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Notifications</DrawerTitle>
                    <DrawerDescription>No new notifications</DrawerDescription>
                    <DrawerClose asChild>
                        <Button variant="text">Close</Button>
                    </DrawerClose>
                </DrawerHeader>
                <DrawerFooter>
                    <p>No new notifications</p>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
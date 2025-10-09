"use client";

import React, { memo } from "react";
import { Button } from "../ui/button";

export const HeroButton = memo(
    ({
        onClick,
        variant,
        size,
        radius,
        children,
    }: {
        onClick: () => void;
        variant:
        | "alert"
        | "primary"
        | "secondary"
        | "destructive"
        | "elevated"
        | "filled"
        | "linked"
        | "outlined"
        | "text"
        | "tonal";
        size:
        | "small"
        | "badge"
        | "default"
        | "natural"
        | "large"
        | "action"
        | "icon"
        | "social"
        | "wide";
        radius: "none" | "small" | "medium" | "large" | "full" | null | undefined;
        children: React.ReactNode;
    }) => (
        <Button onClick={onClick} variant={variant} size={size} radius={radius}>
            {children}
        </Button>
    )
);
HeroButton.displayName = "HeroButton";
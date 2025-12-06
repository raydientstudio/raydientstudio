"use client";

import Icon500 from "@/components/mipmap/icon-500";
import { Button } from "@/components/ui/button";

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    return (
        <div>
            <p>
                {error.message}
            </p>
            <Button onClick={() => reset()}>
                Try Again
            </Button>
            <Icon500 />
        </div>
    );
}
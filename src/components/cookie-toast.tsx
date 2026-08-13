'use client';

import { useEffect } from 'react';
import { toast } from "@/hooks/use-toast";
import Button from "@/components/ui/button";
import Link from "next/link";

export default function CookieToast() {

    useEffect(() => {
        const hasAccepted = localStorage.getItem('cookie-consent');
        if (!hasAccepted) {
            toast({
                title: "We use cookies",
                description: (
                    <div className="flex flex-col gap-2 pt-2 text-sm font-sans">
                        <p>
                            This site uses cookies to enhance your experience. By continuing, you agree to our{" "}
                            <Link aria-label='cookie' href="/docs/cookie-policy" className="hover:underline hover:text-primary transition-colors duration-300 ease-in-out">
                                cookie policy
                            </Link>.
                        </p>
                        <div className="flex gap-2 justify-end">
                            <Button
                                size="small"
                                variant={"text"}
                                onClick={() => {
                                    localStorage.setItem('cookie-consent', 'accepted');
                                }}
                            >
                                Accept
                            </Button>
                            <Button
                                size="small"
                                variant={"alert"}
                                onClick={() => {
                                    // Optionally hide or close the toast manually here
                                }}
                            >
                                Dismiss
                            </Button>
                        </div>
                    </div>
                ),
                duration: 10000,
            });
        }
    }, []);

    return null;
}
import React from "react";
import Link from "next/link";

interface BriefFooterProps {
    className?: string;
}

export default function BriefFooter({ className }: BriefFooterProps) {
    return (
        <footer className={`bg-surface border-t border-border border-dashed relative w-full py-6 rounded-t-lg ${className || ""}`}>
            <div className="px-5">
                <div className="flex flex-col gap-y-3 max-w-7xl mx-auto">
                    {/* Copyright & Attribution */}
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-xs sm:text-sm gap-2">
                        <div className="flex flex-wrap text-center md:text-left justify-center md:justify-start">
                            <p className="text-muted-foreground">
                                Copyright © 2025{" "}
                                <Link href="https://raydientstudio.com">
                                    <span className="text-muted-foreground hover:text-foreground">
                                        Raydient Studio
                                    </span>
                                </Link>{" "}
                                | All rights reserved.
                            </p>
                        </div>
                        <div className="flex flex-wrap text-center md:text-right justify-center md:justify-end">
                            <p className="text-muted-foreground">
                                Developed with{" "}
                                <Link href="https://nextjs.org">
                                    <span className="text-muted-foreground hover:text-foreground">
                                        NextJS
                                    </span>
                                </Link>{" "}
                                | Powered by{" "}
                                <Link href="https://vercel.com">
                                    <span className="text-muted-foreground hover:text-foreground">
                                        Vercel
                                    </span>
                                </Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
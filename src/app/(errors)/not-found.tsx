"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { IconChevronRight, IconRefresh, IconSquareFilled } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { JetBrains_Mono } from "@/fonts/local";

export default function NotFound() {

    const router = useRouter()

    const navigateTo = useCallback(
        (path: string) => {
            router.push(path)
        },
        [router]
    )

    return (
        <section className="w-full h-auto bg-surface rounded-b-lg py-8">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-center items-center w-full h-fit max-w-7xl gap-6 mt-16 mx-auto">
                    <div className="flex flex-col justify-start items-start w-full h-fit gap-y-2">

                        <div className="flex flex-row justify-start items-start gap-x-1.5">
                            <IconSquareFilled size={14} className="text-foreground" />
                            <p className={`${JetBrains_Mono.className} antialiased font-semibold whitespace-nowrap text-error text-sm uppercase leading-none items-center translate-y-[0.5px] md:translate-y-0`}>
                                Error code 404
                            </p>
                        </div>

                        <div className="flex flex-col justify-start items-start gap-y-2">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-start text-primary uppercase tracking-normal leading-[1.1]">
                                Ooops!!
                            </h1>
                            <p className="text-sm sm:text-base md:text-base lg:text-lg font-normal text-start text-muted-foreground tracking-normal leading-[1.4] py-1 max-w-xl">
                                <span className="font-bold text-primary">Not Found:</span> The requested URL was not found on this server at <Link href={"/"} className="text-link">Raydient Studio</Link>.
                            </p>
                        </div>

                        <div className="flex flex-row overflow-visible justify-start items-start gap-x-4 md:gap-x-6">
                            <Button onClick={() => navigateTo("/")} variant="filled" size="default" radius="large">
                                <IconRefresh />
                                Try Again
                            </Button>
                            <Button onClick={() => navigateTo("/docs/404")} variant="tonal" size="default" radius="large">
                                Learn More
                                <IconChevronRight />
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full h-fit gap-y-2">
                        <Image src="/404.svg" width={424} height={244} alt="404" />
                    </div>
                </div>
            </div>
        </section>
    )
}
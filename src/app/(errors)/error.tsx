"use client";

import { Icon500 } from "@/icons";
import { IconRefresh, IconSquareFilled } from "@tabler/icons-react";
import Button from "@/components/ui/button";
import { ErrorProps } from "../error";

const InternalServerError = ({ error, reset }: ErrorProps) => {
    return (
        <section className="w-full h-fit bg-surface rounded-b-lg py-8">
            <div className="w-full max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-center items-center w-full h-fit max-w-7xl gap-6 mt-16 mx-auto">
                    <div className="flex flex-col justify-start items-start w-full h-fit gap-y-2">

                        <div className="flex flex-row justify-start items-start gap-x-1.5">
                            <IconSquareFilled size={14} className="text-foreground" />
                            <p className="font-mono font-semibold whitespace-nowrap text-foreground text-sm uppercase leading-none items-center translate-y-[0.5px] md:translate-y-0">
                                Error code 500
                            </p>
                        </div>

                        <div className="flex flex-col justify-start items-start gap-y-2">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-start text-primary uppercase tracking-normal leading-[1.1]">
                                Ooops!!
                            </h1>
                            <p className="text-sm sm:text-base md:text-base lg:text-lg font-normal text-start text-muted-foreground tracking-normal leading-[1.4] py-1 max-w-xl">
                                <span className="font-bold text-primary">Error:</span> {error.message}.
                            </p>
                        </div>

                        <div className="flex flex-row overflow-visible justify-start items-start gap-x-4 md:gap-x-6">
                            <Button onClick={() => reset()} variant="default" size="medium" radius="small">
                                <IconRefresh />
                                Try Again
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start w-full h-fit gap-y-2 py-6">
                        <Icon500 width={192} height={64} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InternalServerError;
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import {
    IconChevronRight,
    IconRefresh,
    IconSquareFilled,
} from "@tabler/icons-react";
import Button from "@/components/ui/button";
import { Icon404 } from "@/icons";
import CrosshairCorner from "@/sections/root/crosshair-corners";

const PageNotFound = () => {
    const router = useRouter();

    const navigateTo = useCallback(
        (path: string) => {
            router.push(path);
        },
        [router],
    );

    return (
        <section className="w-full h-fit justify-center items-center px-6 py-12">
            <div className="flex flex-col justify-center items-center gap-y-12 max-w-7xl mx-auto">
                <div className="overflow-visible relative isolate -top-16 flex flex-col justify-center items-center w-full h-fit gap-y-2 p-6 bg-surface border border-dashed border-border">
                    {/* True crosshair corners */}
                    <CrosshairCorner />
                    <div className="hidden flex-row justify-start items-start gap-x-1.5">
                        <IconSquareFilled
                            size={14}
                            className="text-foreground"
                        />
                        <p className="font-mono font-semibold whitespace-nowrap text-foreground text-sm uppercase leading-none items-center translate-y-[0.5px] md:translate-y-0">
                            Error code 404
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-y-2">
                        <svg
                            width={"180"}
                            height={"160"}
                            viewBox="0 0 300 260"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mb-8 overflow-visible hidden"
                        >
                            <path
                                d="M150 30 L250 250 L50 250 Z"
                                fill="none"
                                stroke="#d4d4d4"
                                strokeWidth={"1.5"}
                                strokeDasharray={"5 5"}
                            />
                            <circle
                                cx="250"
                                cy="250"
                                r="45"
                                fill="#fff"
                                stroke="#e5e5e5"
                                strokeWidth={"1.5"}
                            />
                            <path
                                d="M250 250 L250 205 A45 45 0 0 0 205 250 Z"
                                fill="currentColor"
                            />
                        </svg>
                        <svg
                            data-testid="not-found/triangle-visual"
                            fill="none"
                            height="167"
                            viewBox="0 0 138 167"
                            width="138"
                            xmlns="http://www.w3.org/2000/svg"
                            className="overflow-visible mb-8"
                        >
                            <g filter="url(#filter0_dd_2882_16663)">
                                <circle
                                    cx="132"
                                    cy="113.5"
                                    fill="var(--surface)"
                                    r="32.5"
                                    shapeRendering="crispEdges"
                                ></circle>
                                <circle
                                    cx="132"
                                    cy="113.5"
                                    r="33"
                                    shapeRendering="crispEdges"
                                    stroke="var(--border)"
                                ></circle>
                            </g>
                            <path
                                d="M66.4338 5.25L68.4779 1.75L68.9097 2.00216L69.5 0.991427L70.0903 2.00215L70.522 1.74999L72.5662 5.24998L72.1344 5.50214L74.1785 9.00214L74.6103 8.74998L76.6544 12.25L76.2226 12.5021L78.2668 16.0021L78.6985 15.75L80.7426 19.25L80.3109 19.5021L82.355 23.0021L82.7868 22.75L84.8309 26.25L84.3991 26.5021L86.4432 30.0021L86.875 29.75L88.9191 33.25L88.4874 33.5022L90.5315 37.0022L90.9632 36.75L93.0073 40.25L92.5756 40.5022L94.6197 44.0022L95.0515 43.75L97.0956 47.25L96.6638 47.5022L98.7079 51.0022L99.1397 50.75L101.184 54.25L100.752 54.5022L102.796 58.0022L103.228 57.75L105.272 61.25L104.84 61.5022L106.884 65.0022L107.316 64.75L109.36 68.25L108.929 68.5022L110.973 72.0022L111.404 71.75L113.449 75.25L113.017 75.5022L115.061 79.0022L115.493 78.75L117.537 82.25L117.105 82.5022L119.149 86.0022L119.581 85.75L121.625 89.25L121.193 89.5022L123.237 93.0022L123.669 92.75L125.713 96.25L125.281 96.5022L127.326 100.002L127.757 99.75L129.801 103.25L129.37 103.502L131.414 107.002L131.846 106.75L133.89 110.25L133.458 110.502L135.502 114.002L135.934 113.75L137.978 117.25L137.546 117.502L138.129 118.5H136.956V119H132.868V118.5H128.779V119H124.691V118.5H120.603V119H116.515V118.5H112.426V119H108.338V118.5H104.25V119H100.162V118.5H96.0735V119H91.9853V118.5H87.897V119H83.8088V118.5H79.7206V119H75.6323V118.5H71.5441V119H67.4559V118.5H63.3676V119H59.2794V118.5H55.1912V119H51.1029V118.5H47.0147V119H42.9265V118.5H38.8382V119H34.75V118.5H30.6618V119H26.5735V118.5H22.4853V119H18.3971V118.5H14.3088V119H10.2206V118.5H6.13235V119H2.04412V118.5H0.871045L1.45381 117.502L1.02205 117.25L3.06616 113.75L3.49792 114.002L5.54204 110.502L5.11028 110.25L7.1544 106.75L7.58616 107.002L9.63028 103.502L9.19852 103.25L11.2426 99.75L11.6744 100.002L13.7185 96.5022L13.2868 96.25L15.3309 92.75L15.7626 93.0022L17.8067 89.5022L17.375 89.25L19.4191 85.75L19.8509 86.0022L21.895 82.5022L21.4632 82.25L23.5073 78.75L23.9391 79.0022L25.9832 75.5022L25.5515 75.25L27.5956 71.75L28.0273 72.0022L30.0715 68.5022L29.6397 68.25L31.6838 64.75L32.1156 65.0022L34.1597 61.5022L33.7279 61.25L35.7721 57.75L36.2038 58.0022L38.2479 54.5022L37.8162 54.25L39.8603 50.75L40.292 51.0022L42.3362 47.5022L41.9044 47.25L43.9485 43.75L44.3803 44.0022L46.4244 40.5022L45.9926 40.25L48.0368 36.75L48.4685 37.0022L50.5126 33.5022L50.0809 33.25L52.125 29.75L52.5568 30.0022L54.6009 26.5022L54.1691 26.25L56.2132 22.75L56.645 23.0022L58.6891 19.5022L58.2574 19.25L60.3015 15.75L60.7332 16.0022L62.7773 12.5022L62.3456 12.25L64.3897 8.75L64.8215 9.00216L66.8656 5.50216L66.4338 5.25Z"
                                stroke="var(--border)"
                                strokeDasharray="4 4"
                            ></path>
                            <path
                                clipRule="evenodd"
                                d="M118.006 83.0538L139 119H98.9493C98.6537 117.211 98.5 115.373 98.5 113.5C98.5 99.9938 106.493 88.3544 118.006 83.0538Z"
                                fill="var(--primary)"
                                fillRule="evenodd"
                            ></path>
                        </svg>
                        <h1 className="text-6xl lg:text-7xl text-center font-mono font-medium text-foreground uppercase tracking-normal leading-none">
                            404
                        </h1>
                        <p className="text-base text-center font-normal text-foreground leading-relaxed py-1 max-w-md">
                            Sorry, the page you're looking for couldn't be
                            found.
                        </p>
                    </div>

                    <div className="flex flex-row overflow-visible justify-center items-center gap-x-4 md:gap-x-6">
                        <Button
                            onClick={() => navigateTo("/")}
                            variant="default"
                            size="medium"
                        >
                            <IconRefresh className="hidden" />
                            Return Home
                        </Button>
                        <Button
                            onClick={() => navigateTo("/docs/404")}
                            variant="tonal"
                            size="medium"
                            className="hidden"
                        >
                            Learn More
                            <IconChevronRight />
                        </Button>
                    </div>
                </div>
                <div className="hidden flex-col justify-start items-start w-full h-fit gap-y-2 py-6">
                    <Icon404 width={192} height={64} />
                </div>
            </div>
        </section>
    );
};

export default PageNotFound;

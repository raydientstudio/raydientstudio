{/*

"use client";

import React from "react";
import { motion } from "framer-motion";

const Ticker = ({ items = [], speed = 30, direction = "left" }) => {
    const tickerVariants = {
        animate: {
            x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
            transition: {
                duration: speed,
                ease: "linear",
                repeat: Infinity,
            },
        },
    };

    return (
        <div className="overflow-hidden w-full">
            <motion.div
                className="flex whitespace-nowrap"
                variants={tickerVariants}
                animate="animate"
            >
                
                <div className="flex">
                    {items.map((item: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<Linkny>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<Linkny>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
                        <div key={index} className="px-4">
                            {item}
                        </div>
                    ))}
                </div>

               
                <div className="flex">
                    {items.map((item: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<Linkny>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<Linkny>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
                        <div key={`duplicate-${index}`} className="px-4">
                            {item}
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Ticker;

*/}
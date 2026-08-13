import { useState, useLayoutEffect } from "react";

const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
}

export const useScreen = () => {
    const [isScreen, setIsScreen] = useState(() => ({
        initial: true,
        sm: false,
        md: false,
        lg: false,
        xl: false,
    }));

    useLayoutEffect(() => {
        const mq = {
            sm: window.matchMedia(`(min-width: ${breakpoints.sm}px)`),
            md: window.matchMedia(`(min-width: ${breakpoints.md}px)`),
            lg: window.matchMedia(`(min-width: ${breakpoints.lg}px)`),
            xl: window.matchMedia(`(min-width: ${breakpoints.xl}px)`),
        };

        const updateScreen = () => {
            setIsScreen({
                initial: true,
                sm: mq.sm.matches,
                md: mq.md.matches,
                lg: mq.lg.matches,
                xl: mq.xl.matches,
            });
        };

        updateScreen();

        Object.values(mq).forEach((m) =>
            m.addEventListener("change", updateScreen)
        );

        return () =>
            Object.values(mq).forEach((m) =>
                m.removeEventListener("change", updateScreen)
            );
    }, []);

    return isScreen;
}
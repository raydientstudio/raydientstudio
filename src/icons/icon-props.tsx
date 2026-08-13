import { MouseEventHandler, SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
    className?: string;
    size?: number | string;
    viewBox?: string;
    fill?: string;
}

export type { IconProps };

import { FC } from "react";
import { IconProps } from "./icon-props";

const IconMail: FC<IconProps> = ({
    size = 24,
    viewBox = "0 0 24 24",
    className = "",
    fill = "none",
    ...props
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox={viewBox}
            fill={fill}
            {...props}
            className={className}
        >
            <path fill="currentColor" d="M3 5V4C2.44772 4 2 4.44772 2 5H3ZM21 5H22C22 4.44772 21.5523 4 21 4V5ZM21 19V20H22V19H21ZM3 19H2V20H3V19ZM3 5V6H21V5V4H3V5ZM21 5H20V19H21H22V5H21ZM21 19V18H3V19V20H21V19ZM3 19H4V5H3H2V19H3Z" />
            <path stroke="currentColor" d="M21 6L12 12L3 6" strokeWidth="2" strokeLinejoin="round" />
        </svg>
    );
};

export { IconMail as default };
import { FC } from "react";
import { IconProps } from "./icon-props";

const IconInstagram: FC<IconProps> = ({
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
            <rect
              width="16"
              height="16"
              x="4"
              y="4"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
              rx="2"
            ></rect>
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"></circle>
            <circle cx="16.5" cy="7.5" r="1" fill="currentColor"></circle>
        </svg>
    );
};

export { IconInstagram as default };
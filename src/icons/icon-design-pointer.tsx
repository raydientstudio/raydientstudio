import { FC } from "react";
import { IconProps } from "./icon-props";

const IconDesignPointer: FC<IconProps> = ({
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
            <path
                d="M16 22L12 12L22 16L18 18L16 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M5 16C5 9.5 9.5 5 16 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
            />
            <circle
                cx="19"
                cy="5"
                r="2"
                stroke="currentColor"
                strokeWidth="2"
            />
            <circle
                cx="19"
                cy="5"
                r="2"
                stroke="currentColor"
                strokeWidth="2"
            />
            <circle
                cx="19"
                cy="5"
                r="2"
                stroke="currentColor"
                strokeWidth="2"
            />
            <circle
                cx="5"
                cy="19"
                r="2"
                stroke="currentColor"
                strokeWidth="2"
            />
            <circle
                cx="5"
                cy="19"
                r="2"
                stroke="currentColor"
                strokeWidth="2"
            />
            <circle
                cx="5"
                cy="19"
                r="2"
                stroke="currentColor"
                strokeWidth="2"
            />
        </svg>
    );
};

export { IconDesignPointer as default };
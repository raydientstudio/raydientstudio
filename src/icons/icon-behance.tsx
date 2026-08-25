import { FC } from "react";
import { IconProps } from "./icon-props";

const IconBehance: FC<IconProps> = ({
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
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M3 18V6h4.5a3 3 0 1 1 0 6 3 3 0 0 1 0 6z"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12h4.5"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M14 13h7a3.5 3.5 0 1 0-7 0Zm0 0v2a3.5 3.5 0 0 0 6.64 1"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 6h3"
                ></path>
        </svg>
    );
};

export { IconBehance as default };
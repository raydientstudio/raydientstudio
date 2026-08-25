import { FC } from "react";
import { IconProps } from "./icon-props";

const IconLinkedin: FC<IconProps> = ({
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
                  fill="currentColor"
                  d="M9 11a1 1 0 1 0-2 0h2m-2 5v1h2v-1H7m1-5H7v5h2v-5zM11 16v1h2v-1h-2m2-5a1 1 0 1 0-2 0h2m-1 5h1v-5h-2v5z"
                ></path>
                <path
                  fill="currentColor"
                  d="M15 16v1h2v-1h-2m-4-3a1 1 0 1 0 2 0h-2m5 3h1v-3h-2v3zm0-3h1a3 3 0 0 0-.879-2.121l-.707.707-.707.707A1 1 0 0 1 15 13zm-.586-1.414.707-.707A3 3 0 0 0 14 10v2a1 1 0 0 1 .707.293zM14 11v-1a3 3 0 0 0-2.121.879l.707.707.707.707A1 1 0 0 1 14 12zm-1.414.586-.707-.707A3 3 0 0 0 11 13h2a1 1 0 0 1 .293-.707z"
                ></path>
                <rect
                  width="18"
                  height="18"
                  x="3"
                  y="3"
                  stroke="currentColor"
                  strokeWidth="2"
                  rx="2"
                ></rect>
                <circle cx="8" cy="8" r="1" fill="currentColor"></circle>
        </svg>
    );
};

export { IconLinkedin as default };
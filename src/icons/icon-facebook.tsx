import { FC } from "react";
import { IconProps } from "./icon-props";

const IconFacebook: FC<IconProps> = ({
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
                  d="M7 10V9a1 1 0 0 0-1 1zm0 4H6a1 1 0 0 0 1 1zm3 0h1v-1h-1zm0 7H9v1h1zm4 0v1h1v-1zm0-7v-1h-1v1zm3 0v1a1 1 0 0 0 .97-.758zm1-4 .97.242A1 1 0 0 0 18 9zm-4 0h-1v1h1zm1-3v1zm3 0v1a1 1 0 0 0 1-1zm0-4h1a1 1 0 0 0-1-1zm-8 5H9zm0 2v1h1v-1zm-3 0H6v4h2v-4zm0 4v1h3v-2H7zm3 0H9v7h2v-7zm0 7v1h4v-2h-4zm4 0h1v-7h-2v7zm0-7v1h3v-2h-3zm3 0 .97.242 1-4L18 10l-.97-.243-1 4zm1-4V9h-4v2h4zm-4 0h1V8h-2v2zm0-2h1l-.707-.707-.707-.707A2 2 0 0 0 13 8zm.293-.707L15 8V6a2 2 0 0 0-1.414.586zM15 7v1h3V6h-3zm3 0h1V3h-2v4zm0-4V2h-3v2h3zm-3 0V2a6 6 0 0 0-4.243 1.757l.707.707.708.708A4 4 0 0 1 15 4zm-3.536 1.464-.707-.707A6 6 0 0 0 9 8h2a4 4 0 0 1 1.172-2.828zM10 8H9v2h2V8zm0 2V9H7v2h3z"
                ></path>
        </svg>
    );
};

export { IconFacebook as default };
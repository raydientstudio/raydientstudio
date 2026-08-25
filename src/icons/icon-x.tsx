import { FC } from "react";
import { IconProps } from "./icon-props";

const IconX: FC<IconProps> = ({
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
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 20 4 4h4l12 16zM4 20l6.5-6.5m3-3L20 4"
                ></path>
        </svg>
    );
};

export { IconX as default };
import { FC } from "react";
import { IconProps } from "./icon-props";

const IconArrowDownRight: FC<IconProps> = ({
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
            <path d="M5 4V3H3V4H4H5ZM20 15V14H5V15V16H20V15ZM4 14H5V4H4H3V14H4ZM5 15V14V14H4H3C3 15.1046 3.89543 16 5 16V15Z" fill="currentColor" />
            <path d="M15 10L20 15L15 20" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
    );
};

export { IconArrowDownRight as default };
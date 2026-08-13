import { FC } from "react";
import { IconProps } from "./icon-props";

const IconArrowRight: FC<IconProps> = ({
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
            <path d="M3 11H2V13H3V12V11ZM3 12V13H21V12V11H3V12Z" fill="currentColor" />
            <path d="M14 5L21 12L14 19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
        </svg>
    );
};

export { IconArrowRight as default };

import { FC } from "react";
import { IconProps } from "./icon-props";

const IconMoveUpRight: FC<IconProps> = ({
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
            <path fill="currentColor" d="M4.293 18.293 3.586 19 5 20.414l.707-.707L5 19zM5 19l.707.707 14-14L19 5l-.707-.707-14 14z"></path>
            <path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="2" d="M12 5h7v7"></path>
        </svg>
    );
};

export { IconMoveUpRight as default };
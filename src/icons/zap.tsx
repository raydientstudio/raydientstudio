import { IconProps } from "./icon-props";

export default function IconZap({
    size = 24,
    viewBox = '0 0 24 24',
    className = '',
    strokeWidth = 2,
    fill = 'none',
    ...props
}: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox={viewBox}
            className={className}
            fill={fill}
            role="presentation"
            {...props}
        >
            <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
            <path d="M12.75 5V4.25H11.25V5H12H12.75ZM12 5H11.25V18H12H12.75V5H12Z" fill="currentColor" />
        </svg>
    );
};
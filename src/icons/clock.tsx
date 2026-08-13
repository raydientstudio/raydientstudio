import { IconProps } from "./icon-props";

export default function IconClock({
    opacity = '0.4',
    size = 24,
    viewBox = '0 0 24 24',
    className = '',
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
            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 8V12L14.5 13.5" stroke="#currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
        </svg>
    );
};
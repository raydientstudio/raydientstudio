import { FC, MouseEventHandler, SVGProps } from 'react';
import { cn } from '@/lib/utils';

interface IconProps extends SVGProps<SVGSVGElement> {
    overflow?: string;
    opacity?: string;
    size?: number | string;
    strokeWidth?: number | string;
    fillColor?: string;
    strokeColor?: string;
    fill?: string;
    strokeLinecap?: "inherit" | "butt" | "round" | "square";
    strokeLinejoin?: "inherit" | "miter" | "round" | "bevel";
    className?: string;
    onClick?: MouseEventHandler<SVGSVGElement>;
    viewBox?: string;
}

const Icon500: FC<IconProps> = ({
    overflow = "visible",
    opacity = "1.0",
    width = 768,
    height = 256,
    viewBox = "0 0 768 256",
    className = "",
    strokeWidth = 1.5,
    fillColor = "currentColor",
    fill = "none",
    strokeColor = "currentColor",
    strokeLinecap = "round",
    strokeLinejoin = "round",
    onClick,
    ...props
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            overflow={overflow}
            opacity={opacity}
            width={width}
            height={height}
            viewBox={viewBox}
            fill={fill || fillColor}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap={strokeLinecap}
            strokeLinejoin={strokeLinejoin}
            role="presentation"
            className={cn("raydient-studio", className)}
            {...props}
            onClick={onClick}
        >
            <path xmlns="http://www.w3.org/2000/svg" d="M208 32H32V88C32 96.8366 39.1634 104 48 104H160L208 152V208L160 256H48L0 208V176H32V208C32 216.837 39.1634 224 48 224H160C168.837 224 176 216.837 176 208V152C176 143.163 168.837 136 160 136H48L0 88V0H208V32ZM487.686 48V208L439.686 256H327.686L279.686 208V48L327.686 0H439.686L487.686 48ZM768 48V208L720 256H608L560 208V48L608 0H720L768 48ZM327.685 32C318.848 32.0003 311.686 39.1636 311.686 48V208C311.686 216.837 318.849 224 327.686 224H439.686C448.522 224 455.686 216.836 455.686 208V48C455.686 39.1634 448.521 32 439.685 32H327.685ZM608 32C599.163 32 592 39.1634 592 48V208C592 216.837 599.163 224 608 224H720C728.837 224 736 216.837 736 208V48C736 39.1634 728.837 32 720 32H608Z" fill="currentColor" />
        </svg>
    );
};

export default Icon500;
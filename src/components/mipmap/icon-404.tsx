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

const Icon404: FC<IconProps> = ({
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
            <path xmlns="http://www.w3.org/2000/svg" d="M31.9902 104.045C31.9904 108.462 35.5714 112.042 39.9883 112.042H159.953L207.939 160.028V256H175.948V152.03C175.948 147.614 172.368 144.033 167.951 144.033H47.9863L0 96.0469V0.0751953H31.9902V104.045ZM591.855 103.854C591.855 108.266 595.44 111.843 599.862 111.843H719.961L768 159.775V256H735.974V151.786C735.974 147.374 732.389 143.798 727.967 143.798H607.869L559.829 95.8652V0H591.855V103.854ZM487.97 47.9863V207.939L439.983 255.925H328.017L280.03 207.939V47.9863L328.017 0H439.983L487.97 47.9863ZM328.021 31.9902C319.185 31.9902 312.022 39.1539 312.021 47.9902V207.935C312.022 216.771 319.185 223.935 328.021 223.935H439.979C448.816 223.934 455.979 216.771 455.979 207.935V47.9902C455.979 39.154 448.816 31.9905 439.979 31.9902H328.021ZM207.939 112.042H175.948V0.0751953H207.939V112.042ZM768 111.843H735.974V0H768V111.843Z" fill="currentColor" />
        </svg>
    );
};

export default Icon404;
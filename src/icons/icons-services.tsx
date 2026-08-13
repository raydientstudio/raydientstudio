import { cn } from '@/lib/utils';
import { FC, MouseEventHandler, SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
    opacity?: string;
    size?: number | string;
    strokeWidth?: number | string;
    fillColor?: string;
    strokeColor?: string;
    fill?: string;
    strokeLinecap?: 'inherit' | 'butt' | 'round' | 'square';
    strokeLinejoin?: 'inherit' | 'miter' | 'round' | 'bevel';
    className?: string;
    onClick?: MouseEventHandler<SVGSVGElement>;
    viewBox?: string;
}

const IconPaint: FC<IconProps> = ({
    opacity = '0.4',
    size = 24,
    viewBox = '0 0 16 16',
    className = '',
    strokeWidth = 2,
    fillColor = 'currentColor',
    fill = 'none',
    strokeColor = 'currentColor',
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
    onClick,
    ...props
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox={viewBox}
            fill={fill || fillColor}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap={strokeLinecap}
            strokeLinejoin={strokeLinejoin}
            role="presentation"
            className={cn("injected-svg", className)}
            {...props}
            onClick={onClick}
        >
            <path d="M3 8.5L6.5 12L13 4" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} />
        </svg>
    );
};


export { IconPaint };
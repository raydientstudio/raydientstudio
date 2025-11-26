import { cn } from '@/lib/utils';
import React, { FC, SVGProps } from 'react';

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
    onClick?: React.MouseEventHandler<SVGSVGElement>;
    viewBox?: string;
}

const IconPaint: FC<IconProps> = ({
    opacity = '0.4',
    size = 24,
    viewBox = '0 0 24 24',
    className = '',
    strokeWidth = 1.5,
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
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
            <path opacity={opacity} d="M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1 -5 5l-5 0v2" />
            <path d="M10 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
        </svg>
    );
};

const IconVector: FC<IconProps> = ({
    opacity = '0.4',
    size = 24,
    viewBox = '0 0 24 24',
    className = '',
    strokeWidth = 1.5,
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
            <path opacity={opacity} d="M20 6V18M18 4H6M18 20H6M4 18V6" />
            <path d="M22 4C22 5.10457 21.1046 6 20 6C18.8954 6 18 5.10457 18 4C18 2.89543 18.8954 2 20 2C21.1046 2 22 2.89543 22 4Z" />
            <path d="M6 4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4Z" />
            <path d="M22 20C22 21.1046 21.1046 22 20 22C18.8954 22 18 21.1046 18 20C18 18.8954 18.8954 18 20 18C21.1046 18 22 18.8954 22 20Z" />
            <path d="M6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20C2 18.8954 2.89543 18 4 18C5.10457 18 6 18.8954 6 20Z" />
        </svg>
    );
};

const IconDevelopment: FC<IconProps> = ({
    opacity = '0.4',
    size = 24,
    viewBox = '0 0 24 24',
    className = '',
    strokeWidth = 1.5,
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
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h7" />
            <path d="M13 15.5v-6.5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v4m0 6a1 1 0 0 1 -1" />
            <path d="M16 9h2" />
            <path opacity={opacity} d="M20 21l2 -2l-2 -2" />
            <path opacity={opacity} d="M17 17l-2 2l2 2" />
        </svg>
    );
};

const IconContract: FC<IconProps> = ({
    opacity = '0.4',
    size = 24,
    viewBox = '0 0 24 24',
    className = '',
    strokeWidth = 1.5,
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
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 21h-2a3 3 0 0 1 -3 -3v-1h5.5" />
            <path d="M17 8.5v-3.5a2 2 0 1 1 2 2h-2" />
            <path d="M19 3h-11a3 3 0 0 0 -3 3v11" />
            <path opacity={opacity} d="M9 7h4" />
            <path opacity={opacity} d="M9 11h4" />
            <path opacity={opacity} d="M18.42 12.61a2.1 2.1 0 0 1 2.97 2.97l-6.39 6.42h-3v-3z" />
        </svg>
    );
};

export { IconPaint, IconVector, IconDevelopment, IconContract };
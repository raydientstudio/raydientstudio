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

const IconArrowDown: FC<IconProps> = ({
    opacity = '0.4',
    size = 24,
    viewBox = '0 0 24 24',
    className = '',
    strokeWidth = 2,
    fillColor = 'currentColor',
    fill = 'none',
    strokeColor = 'currentColor',
    strokeLinecap = 'square',
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
            <path d="M19 12L12 19L5 12" opacity={opacity} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap={strokeLinecap} />
            <path d="M12.75 5V4.25H11.25V5H12H12.75ZM12 5H11.25V18H12H12.75V5H12Z" fill={fillColor} />
        </svg>
    );
};

const IconArrowDownLeft: FC<IconProps> = ({
    opacity = '0.4',
    size = 24,
    viewBox = '0 0 24 24',
    className = '',
    strokeWidth = 2,
    fillColor = 'currentColor',
    fill = 'none',
    strokeColor = 'currentColor',
    strokeLinecap = 'square',
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
            <path d="M9.5 9.5L4 15L9.5 20.5" opacity={opacity} stroke={strokeColor} strokeWidth={strokeWidth}/>
            <path d="M5 15H20V4" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap={strokeLinecap}/>
        </svg>
    );
};

const IconArrowDownRight: FC<IconProps> = ({
    opacity = '0.4',
    size = 24,
    viewBox = '0 0 24 24',
    className = '',
    strokeWidth = 2,
    fillColor = 'currentColor',
    fill = 'none',
    strokeColor = 'currentColor',
    strokeLinecap = 'square',
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
            <path d="M14.5 9.5L20 15L14.5 20.5" opacity={opacity} stroke={strokeColor} strokeWidth={strokeWidth}/>
            <path d="M19 15H4V4" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap={strokeLinecap}/>
        </svg>
    );
};

const IconArrowLeft: FC<IconProps> = ({
    opacity = '0.4',
    size = 24,
    viewBox = '0 0 24 24',
    className = '',
    strokeWidth = 2,
    fillColor = 'currentColor',
    fill = 'none',
    strokeColor = 'currentColor',
    strokeLinecap = 'square',
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
            <path d="M12 5L5 12L12 19" opacity={opacity} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap={strokeLinecap} />
            <path d="M19 11.25H19.75V12.75H19V12V11.25ZM19 12V12.75H6V12V11.25H19V12Z" fill={fillColor} strokeWidth={strokeWidth} strokeLinecap={strokeLinecap} />
        </svg>
    );
};

const IconArrowRight: FC<IconProps> = ({
    opacity = '0.4',
    size = 24,
    viewBox = '0 0 24 24',
    className = '',
    strokeWidth = 2,
    fillColor = 'currentColor',
    fill = 'none',
    strokeColor = 'currentColor',
    strokeLinecap = 'square',
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
            <path d="M12 5L19 12L12 19" opacity={opacity} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap={strokeLinecap}/>
            <path d="M5 11.25H4.25V12.75H5V12V11.25ZM5 12V12.75H18V12V11.25H5V12Z" fill={fillColor} strokeWidth={strokeWidth} strokeLinecap={strokeLinecap} />
        </svg>
    );
};

const IconArrowUp: FC<IconProps> = ({
    opacity = '0.4',
    size = 24,
    viewBox = '0 0 24 24',
    className = '',
    strokeWidth = 2,
    fillColor = 'currentColor',
    fill = 'none',
    strokeColor = 'currentColor',
    strokeLinecap = 'square',
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
            <path d="M5 12L12 5L19 12" opacity={opacity} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap={strokeLinecap}/>
            <path d="M11.25 19V19.75H12.75V19H12H11.25ZM12 19H12.75V6H12H11.25V19H12Z" fill={fillColor} strokeWidth={strokeWidth} strokeLinecap={strokeLinecap} />
        </svg>
    );
};

const IconArrowUpLeft: FC<IconProps> = ({
    opacity = '0.4',
    size = 24,
    viewBox = '0 0 24 24',
    className = '',
    strokeWidth = 2,
    fillColor = 'currentColor',
    fill = 'none',
    strokeColor = 'currentColor',
    strokeLinecap = 'square',
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
            <path d="M9.5 14.5L4 9L9.5 3.5" opacity={opacity} stroke={strokeColor} strokeWidth={strokeWidth}/>
            <path d="M5 9H20V20" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap={strokeLinecap}/>
        </svg>
    );
};

const IconArrowUpRight: FC<IconProps> = ({
    opacity = '0.4',
    size = 24,
    viewBox = '0 0 24 24',
    className = '',
    strokeWidth = 2,
    fillColor = 'currentColor',
    fill = 'none',
    strokeColor = 'currentColor',
    strokeLinecap = 'square',
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
            
            <path d="M14.5 14.5L20 9L14.5 3.5" opacity={opacity} stroke={strokeColor} strokeWidth={strokeWidth}/>
            <path d="M19 9H4V20" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap={strokeLinecap}/>
        </svg>
    );
};

export {
    IconArrowDown,
    IconArrowDownLeft,
    IconArrowDownRight,
    IconArrowLeft,
    IconArrowRight,
    IconArrowUp,
    IconArrowUpLeft,
    IconArrowUpRight
};
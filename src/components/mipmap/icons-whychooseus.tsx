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

const IconWriting: FC<IconProps> = ({
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
            <path d="M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2z" />
            <path d="M16 7h4" />
            <path opacity={opacity} d="M18 19h-13a2 2 0 1 1 0 -4h4a2 2 0 1 0 0 -4h-3" />
        </svg>
    );
};

const IconTeam: FC<IconProps> = ({
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
            <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
            <path opacity={opacity} d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            <path opacity={opacity} d="M17 10h2a2 2 0 0 1 2 2v1" />
            <path opacity={opacity} d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            <path opacity={opacity} d="M3 13v-1a2 2 0 0 1 2 -2h2" />
        </svg>
    );
};

const IconMotion: FC<IconProps> = ({
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
            <path d="M9.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248z" />
            <path opacity={opacity} d="M17 5l4.586 5.836a1.844 1.844 0 0 1 0 2.328l-4.586 5.836" />
            <path opacity={opacity} d="M13 5l4.586 5.836a1.844 1.844 0 0 1 0 2.328l-4.586 5.836" />
        </svg>
    );
};

const IconMagic: FC<IconProps> = ({
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
            <path d="M6 21l15 -15l-3 -3l-15 15l3 3" />
            <path d="M15 6l3 3" />
            <path opacity={opacity} d="M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
            <path opacity={opacity} d="M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
        </svg>
    );
};

export { IconWriting, IconTeam, IconMotion, IconMagic };
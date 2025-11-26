import React, { FC, SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}

const Foreground: FC<IconProps> = ({ size = 24, className = '', ...props }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
            <path d="M256 512H0L256 256V512Z" fill="currentColor" />
            <path d="M512 512L256 256L512 0V512Z" fill="currentColor" />
            <path d="M256 256L0 0H256V256Z" fill="currentColor" />
        </svg>
    );
};

export default Foreground;
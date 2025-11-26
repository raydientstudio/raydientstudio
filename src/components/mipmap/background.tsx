import React, { FC, SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
	size?: number | string;
	className?: string;
}

const Background: FC<IconProps> = ({ size = 24, className = '', ...props }) => {
	return (
		<svg width={size} height={size} viewBox="0 0 1.5 1.5" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
			<path d="M0.03 0.03h1.44v1.44H0.03z" fill="currentColor" />
		</svg>
	);
};

export default Background;
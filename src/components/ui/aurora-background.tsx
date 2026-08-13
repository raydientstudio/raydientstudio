"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
	children: ReactNode;
	showRadialGradient?: boolean;
}

export const AuroraBackground = ({
	className,
	children,
	showRadialGradient = true,
	...props
}: AuroraBackgroundProps) => {
	return (
		<main>
			<div
				className={cn(
					"transition-bg relative flex h-[100vh] flex-col items-center justify-center bg-zinc-50 text-slate-950 dark:bg-zinc-900",
					className,
				)}
				{...props}
			>
				<div
					className="absolute inset-0 overflow-hidden"
					style={
						{
							"--aurora":
								"linear-gradient(100deg, #3b82f6 10%, #93c5fd 50%, #60a5fa 90%)",
							"--dark-gradient":
								"linear-gradient(100deg, #000 0%, transparent 100%)",
							"--white-gradient":
								"linear-gradient(100deg, #fff 0%, transparent 100%)",
						} as React.CSSProperties
					}
				>
					<div
						className={cn(
							`pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:200%] [background-position:50%_50%] opacity-40 will-change-transform dark:[background-image:var(--dark-gradient),var(--aurora)]`,
							showRadialGradient &&
							`[mask-image:radial-gradient(ellipse_at_100%_0%, black 10%, transparent 70%)]`,
						)}
						style={{
							animation: "auroraMove 10s infinite alternate",
						}}
					></div>
				</div>
				{children}
			</div>
			<style jsx>{`
        @keyframes auroraMove {
          0% {
            background-position: 50% 50%;
          }
          100% {
            background-position: 60% 60%;
          }
        }

        @media (max-width: 768px) {
          div[style] {
            animation: none; /* Disable animation on mobile for performance */
          }
        }
      `}</style>
		</main>
	);
};

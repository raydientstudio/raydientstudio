import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	leadingIcon?: ReactNode;
	trailingIcon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className,
			type = "text",
			leadingIcon,
			trailingIcon,
			...props
		},
		ref
	) => {
		const hasLeadingIcon = !!leadingIcon;
		const hasTrailingIcon = !!trailingIcon;

		return (
			<div className="relative w-full">
				{hasLeadingIcon && (
					<div className="pointer-events-none absolute left-3 top-1/2 flex size-4.5 -translate-y-1/2 items-center justify-center text-muted-foreground [&>svg]:size-4.5">
						{leadingIcon}
					</div>
				)}

				<input
					type={type}
					ref={ref}
					className={cn(
						"flex w-full rounded-full border border-input px-3 h-10 text-sm transition-colors duration-200 ease-in-out placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
						hasLeadingIcon && "pl-10",
						hasTrailingIcon && "pr-10",
						className
					)}
					{...props}
				/>

				{hasTrailingIcon && (
					<div className="pointer-events-none absolute right-3 top-1/2 flex size-4.5 -translate-y-1/2 items-center justify-center text-muted-foreground [&>svg]:size-4.5">
						{trailingIcon}
					</div>
				)}
			</div>
		);
	}
);

Input.displayName = "Input";

export { Input, type InputProps };
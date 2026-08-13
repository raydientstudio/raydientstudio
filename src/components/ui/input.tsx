import { forwardRef, InputHTMLAttributes } from "react";
import { TablerIcon } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	startIcon?: TablerIcon;
	endIcon?: TablerIcon;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, type = "text", startIcon: StartIcon, endIcon: EndIcon, ...props }, ref) => {
		const hasStartIcon = !!StartIcon;
		const hasEndIcon = !!EndIcon;

		return (
			<div className="relative w-full">
				{hasStartIcon && StartIcon && (
					<div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
						<StartIcon size={18} />
					</div>
				)}

				<input
					type={type}
					ref={ref}
					className={cn(
						"flex h-9 w-full rounded-full border border-input text-sm px-3 py-1 transition-colors duration-200 ease-in-out placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
						hasStartIcon && "pl-10",
						hasEndIcon && "pr-10",
						className
					)}
					{...props}
				/>

				{hasEndIcon && EndIcon && (
					<div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
						<EndIcon size={18} />
					</div>
				)}
			</div>
		);
	}
);

Input.displayName = "Input";
export { Input };
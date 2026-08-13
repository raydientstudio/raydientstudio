import type { MDXComponents } from "mdx/types";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const components: MDXComponents = {
    h1: ({ children, className, ...props }: {children: ReactNode, className: string}) => (
        <h1 className={cn("mt-2 scroll-m-20 text-heading-40 font-[450] text-primary", className)} {...props}>
            {children}
        </h1>
    ),
    h2: ({ children, className, ...props }: {children: ReactNode, className: string}) => (
        <h2 className={cn("mt-10 scroll-m-20 pb-2 text-heading-32 font-[450] text-primary first:mt-0", className)} {...props}>
            {children}
        </h2>
    ),
    h3: ({ children, className, ...props }: {children: ReactNode, className: string}) => (
        <h3 className={cn("mt-8 scroll-m-20 text-heading-24 font-[450] text-primary", className)} {...props}>
            {children}
        </h3>
    ),
    p: ({ children, className, ...props }: {children: ReactNode, className: string}) => (
        <p className={cn("not-first:mt-6 text-copy-16 text-foreground", className)} {...props}>
            {children}
        </p>
    ),
    ul: ({ children, className, ...props }: {children: ReactNode, className: string}) => (
        <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2 text-copy-16 text-foreground", className)} {...props}>
            {children}
        </ul>
    ),
    ol: ({ children, className, ...props }: {children: ReactNode, className: string}) => (
        <ol className={cn("my-6 ml-6 list-decimal [&>li]:mt-2 text-copy-16 text-foreground", className)} {...props}>
            {children}
        </ol>
    ),
    li: ({ children, className, ...props }: {children: ReactNode, className: string}) => (
        <li className={cn("mt-2 text-copy-16", className)} {...props}>
            {children}
        </li>
    ),
    blockquote: ({ children, className, ...props }: {children: ReactNode, className: string}) => (
        <blockquote className={cn("mt-6 border-l-2 border-primary pl-6 italic text-copy-16 text-muted-foreground", className)} {...props}>
            {children}
        </blockquote>
    ),
    code: ({ children, className, ...props }: {children: ReactNode, className: string}) => (
        <code className={cn("relative rounded-sm border border-border bg-accent px-[0.3rem] py-[0.2rem] text-copy-13-mono font-medium text-primary", className)} {...props}>
            {children}
        </code>
    ),
    a: ({ children, className, ...props }: {children: ReactNode, className: string}) => (
        <a className={cn("relative font-sans text-link", className)} {...props}>
            {children}
        </a>
    ),
    pre: ({ children, className, ...props }: {children: ReactNode, className: string}) => (
        <pre className={cn("mb-4 mt-6 overflow-x-auto rounded-none border border-border-primary bg-background-elevated p-4", className)} {...props}>
            {children}
        </pre>
    ),
    strong: ({ children, className, ...props }: {children: ReactNode, className: string}) => (
        <strong className={cn("font-medium", className)} {...props}>
            {children}
        </strong>
    ),
};

export function useMDXComponents(incomingComponents: MDXComponents): MDXComponents {
    return {
        ...incomingComponents,
        ...components
    }
}
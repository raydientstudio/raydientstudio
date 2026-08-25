"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CrosshairCorner from "@/sections/root/crosshair-corners";
import { IconEmail, IconRiveleStudio } from "@/icons";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function SignupForm({ className, ...props }: React.ComponentProps<"div">) {
    // --- Constants ---
    const Login = "/login";

    // --- Hooks ---
    const router = useRouter();

    // --- Handlers ---
    const navigateTo = useCallback((path: string) => router.push(path), [router]);
	return (
        <div className={cn("flex flex-col gap-6 py-10 md:py-12", className)} {...props}>
            <div className="w-full max-w-xl justify-center items-center">
              <div className="relative isolate bg-surface border border-solid border-border rounded-none w-full px-6 md:px-8 py-10 md:py-12">
              <CrosshairCorner />
                <IconRiveleStudio size={36} className="mb-2"/>
                <h1 className="text-lg font-bold font-sans capitalize tracking-normal text-gray-950 text-center">
                  Create an account
                </h1>
                <p className="mt-2 text-sm text-muted-foreground text-center">
                  Enter your details to get started.
                </p>
                <form className="mt-8 flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">
                        Email
                    </Label>
                    <Input type="email" placeholder="you@company.com" leadingIcon={ <IconEmail/> } />
                    <div className="relative hidden">
                      <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="4" width="14" height="10" rx="2"/>
                        <path d="M2.5 5 9 10l6.5-5"/>
                      </svg>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        className="h-10 w-full pl-11 pr-4 rounded-full border border-border bg-surface text-sm text-gray-950 placeholder-gray-500 focus:outline-none focus:border-neutral-500 focus:ring-0 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="font-mono text-sm text-muted-foreground">
                      Password
                    </label>
                    <div className="relative">
                      <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3.5" y="8" width="11" height="7.5" rx="1.5"/>
                        <path d="M5.5 8V5.5a3.5 3.5 0 0 1 7 0V8"/>
                      </svg>
                      <input id="password"
                        type="password"
                        placeholder="••••••••••"
                        className="h-10 w-full pl-11 pr-4 rounded-full border border-border bg-surface text-sm text-gray-950 placeholder-gray-500 focus:outline-none focus:border-black focus:ring-0 transition-colors"
                      />
                    </div>
                  </div>

                  <Button type="submit" size="large">
                    Signup
                  </Button>
                </form>

                <div className="relative flex items-center justify-center my-8">
                  <div className="absolute inset-x-0 top-1/2 h-[0.5px] bg-border -translate-y-1/2"></div>
                  <span className="relative bg-accent text-muted-foreground text-sm font-mono tracking-tight px-3 py-1 rounded-full">
                    Or continue with
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <Button type="button" aria-label="Continue with Apple" variant="outline" size="large" asWide>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="#0a0a0a">
                          <path d="M12.7 2.1c.1.9-.3 1.8-.8 2.4-.6.7-1.5 1.2-2.4 1.1-.1-.9.3-1.8.9-2.4.6-.7 1.6-1.2 2.3-1.1ZM14.9 12.4c-.3.7-.5 1-.9 1.6-.6.9-1.4 2-2.4 2-.9 0-1.1-.6-2.3-.6-1.2 0-1.5.6-2.4.6-1 0-1.7-1-2.3-1.9-1.6-2.3-1.8-5-.8-6.4.7-1 1.8-1.6 2.9-1.6 1.1 0 1.8.7 2.7.7.9 0 1.4-.7 2.7-.7.9 0 1.9.5 2.6 1.4-2.3 1.3-1.9 4.6.2 5.9Z"/>
                      </svg>
                  </Button>

                  <Button type="button" aria-label="Continue with Google" variant="outline" size="large" asWide>
                   <svg width="16" height="16" viewBox="0 0 16 16">
                      <path fill="#4285F4" d="M15.68 8.18c0-.57-.05-1.11-.14-1.64H8v3.1h4.3a3.67 3.67 0 0 1-1.6 2.41v2h2.58c1.51-1.39 2.4-3.44 2.4-5.87Z"/>
                      <path fill="#34A853" d="M8 16c2.16 0 3.97-.72 5.29-1.94l-2.58-2c-.72.48-1.63.76-2.71.76-2.08 0-3.85-1.41-4.48-3.3H.86v2.07A8 8 0 0 0 8 16Z"/>
                      <path fill="#FBBC05" d="M3.52 9.52a4.8 4.8 0 0 1 0-3.04V4.41H.86a8 8 0 0 0 0 7.18l2.66-2.07Z"/>
                      <path fill="#EA4335" d="M8 3.18c1.18 0 2.23.4 3.06 1.2l2.29-2.29A7.9 7.9 0 0 0 8 0 8 8 0 0 0 .86 4.41l2.66 2.07C4.15 4.6 5.92 3.18 8 3.18Z"/>
                    </svg>
                  </Button>

                  <Button type="button" aria-label="Continue with Meta" variant="outline" size="large" asWide>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="#000">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/>
                    </svg>
                  </Button>
                </div>

                <p className="mt-8 text-center text-base text-muted-foreground">
                  Already have an account?
                </p>
                <p className="mt-1 text-center">
                    <Link href={Login} className="text-foreground font-semibold font-mono underline">Login</Link>
                </p>

              </div>

              <p className="mt-6 text-center text-sm leading-relaxed text-muted-foreground max-w-xs">
                By continuing, you agree to our{" "}
                <a href="#" className="underline hover:text-foreground">Terms &amp; Conditions</a>{" "}
                and{" "}
                <a href="#" className="underline hover:text-foreground">Privacy Policy</a>.
              </p>

            </div>
		</div>
	)
}

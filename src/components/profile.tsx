"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import Button from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ArrowRight, User } from "lucide-react";

export default function Profile() {
    const router = useRouter();

    const navigateTo = (path: string) => {
        router.push(path);
    };

    return (
        <div className="w-full h-fit px-0 py-0">
            <div className="flex flex-col justify-center items-center gap-y-0 px-0 py-0">
                <Card className="flex flex-col justify-start items-center shadow-none">
                    <CardContent className="flex flex-col justify-start items-start gap-y-2">
                        <Avatar className="w-16 h-16 border border-border rounded-lg">
                            <AvatarImage src="https://github.com/sheikh-abdul-aziz.png" />
                            <AvatarFallback>SA</AvatarFallback>
                        </Avatar>
                        <CardTitle>Sheikh Abdul Aziz</CardTitle>
                        <CardDescription className="whitespace-normal">
                            Hi, I&apos;m Sheikh Abdul Aziz — An Entrepreneur, Frontend Developer & Web Designer — helping businesses grow with elegant design and powerful development.
                        </CardDescription>
                        <div className="flex flex-row justify-start items-center gap-x-3">
                            <Button onClick={() => navigateTo("/shop")} variant="outline" size="medium" radius="medium">
                                <User /> Follow
                            </Button>
                            <Button onClick={() => navigateTo("/about")} variant="tonal" size="medium" radius="medium">
                                Github <ArrowRight />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
"use client";

import { ModeToggle } from "@/components/ui/mode-toogle";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import Image from "next/image";

export function Header() {
    return (
        <div className="bg-slate-300 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex gap-4 items-center text-2xl">
                <Image src="/eceos_logo.png" width={100 } height={40} className="rounded" alt="eceos logo" />
                    eQHub
                </div>
                <div>
                    <Unauthenticated>
                    <SignInButton />
                    </Unauthenticated>
                    <Authenticated>
                        <div className="flex gap-4 items-center">
                            <ModeToggle />

                            <UserButton />
                        </div>
                        
                    </Authenticated>
                </div>
            </div>
        </div>
    );
}
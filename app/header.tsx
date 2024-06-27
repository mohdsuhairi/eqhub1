import { ModeToggle } from "@/components/ui/mode-toogle";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import Image from "next/image";
import { HeaderActions } from "./header-actions";

export function Header() {
    return (
        <div className="bg-emerald-600 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex gap-4 items-center text-2xl">
                <Image src="/eQHub_Logo_Header.png" width={36} height={40} className="rounded" alt="eceos logo" />
                    eQHub
                </div>
                <div className="flex gap-4 items-center">
                    <ModeToggle />
                    <HeaderActions />
                </div>
            </div>
        </div>
    );
}
"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";


export const NavbarRoutes = () => {
    const pathname = usePathname();
    const router = useRouter();

    const isInstructorPage = pathname?.startsWith("/instructor");
    const isPlayerPage = pathname?.includes("/chapter");
    return (
        <div className="flex items-center gap-x-2 ml-auto">
            {isInstructorPage || isPlayerPage ? (
                <Link href="/">
                <Button size="sm" variant="ghost">
                <LogOut className="h4 w4 mr-2"/>
                        Exit
                </Button>
                </Link>
            ): (
                <Link href="/instructor/courses">
                <Button size="sm" variant="ghost">
                    Instructor mode
                </Button>
                </Link>
            )
            }
            <UserButton
            afterSignOutUrl="/"
            />
            </div>
    )
}
"use client";

import { BarChart, BellRing, Compass, Layout, List } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";


const gustRoute = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/",
    },
    {
        icon: Compass,
        label: "Browse",
        href: "/search",
    },
    {
        icon: BellRing,
        label: "Notification",
        href: "/notification",
    }
];

const instructorRoute = [
    {
        icon: List,
        label: "Course",
        href: "/instructor/courses",
    },
    {
        icon: BarChart,
        label: "Analytics",
        href: "/instructor/analytics",

    }
]

export const SidebarRoute = () => {
    const pathname = usePathname();
    const isInstructorPage = pathname?.includes("/instructor");
    const routes = isInstructorPage? instructorRoute: gustRoute;
    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    );
};

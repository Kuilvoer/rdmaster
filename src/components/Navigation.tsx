"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Digitale Geletterdheid", href: "/digitale-geletterdheid" },
    { name: "Digitale Didactiek", href: "/digitale-didactiek" },
    { name: "Kritisch Denken", href: "/kritisch-denken" },
    { name: "Literatuurstudie", href: "/literatuurstudie" },
];

export default function Navigation() {
    const pathname = usePathname();

    return (
        <header className="sticky top-4 z-50 mx-auto w-full max-w-5xl px-4">
            <nav className="flex items-center justify-between rounded-full border border-black/5 bg-background/80 px-4 py-2 shadow-lg backdrop-blur-md">
                <Link href="/" className="text-lg font-bold font-heading text-primary">
                    RD<span className="text-foreground">Master</span>
                </Link>
                <ul className="flex flex-wrap items-center justify-center gap-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={twMerge(
                                        "relative px-3 py-1.5 text-sm font-medium transition-colors hover:text-primary",
                                        isActive ? "text-foreground" : "text-muted-foreground"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="absolute inset-0 rounded-full bg-muted -z-10"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}

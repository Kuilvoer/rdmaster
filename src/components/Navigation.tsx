"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Digitale Geletterdheid", href: "/digitale-geletterdheid" },
    { name: "Digitale Didactiek", href: "/digitale-didactiek" },
    { name: "Kritisch Denken", href: "/kritisch-denken" },
    { name: "Literatuurstudie", href: "/literatuurstudie" },
];

export default function Navigation() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-4 z-50 mx-auto w-full max-w-5xl px-4">
            <nav className="relative flex items-center justify-between rounded-full border border-black/5 bg-background/80 px-4 py-2 shadow-lg backdrop-blur-md">
                <Link href="/" className="text-lg font-bold font-heading text-primary z-50">
                    RD<span className="text-foreground">Master</span>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden z-50 p-2 text-foreground hover:text-primary transition-colors"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex flex-wrap items-center justify-center gap-1">
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

                {/* Mobile Navigation Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 mt-2 p-4 bg-background/95 backdrop-blur-xl border border-border rounded-3xl shadow-2xl md:hidden overflow-hidden"
                        >
                            <ul className="flex flex-col gap-2">
                                {navItems.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className={twMerge(
                                                    "block px-4 py-3 rounded-xl text-base font-medium transition-all",
                                                    isActive
                                                        ? "bg-primary/10 text-primary font-bold"
                                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                                )}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}

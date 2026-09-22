"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const menuStructure = [
    { name: "Home", href: "/" },
    {
        name: "Leerjaar 1",
        items: [
            { name: "Digitale Geletterdheid", href: "/digitale-geletterdheid" },
            { name: "Digitale Didactiek", href: "/digitale-didactiek" },
            { name: "Literatuurstudie", href: "/literatuurstudie" },
            { name: "Gepersonaliseerd Leren", href: "/gepersonaliseerd-leren" },
            { name: "Ethische Dilemma's", href: "/ethische-dilemmas" },
            { name: "Creëren met Technologie", href: "/creeren-met-technologie" },
            { name: "Kritisch Denken", href: "/kritisch-denken" },
            { name: "Vibecoding", href: "/vibecoding" },
        ]
    },
    { name: "Leerjaar 2", href: "#" },
    { name: "Bronnen", href: "/bronnen" },
    { name: "Begrippenlijst", href: "/begrippenlijst" },
];

export default function Navigation() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    // Helper to check if any child item is active
    const isChildActive = (items: { href: string }[]) => {
        return items.some(item => pathname === item.href);
    };

    return (
        <header className="sticky top-4 z-50 mx-auto w-full max-w-7xl px-4">
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
                <ul className="hidden md:flex items-center justify-center gap-1 absolute left-1/2 -translate-x-1/2">
                    {menuStructure.map((item) => {
                        const hasItems = item.items && item.items.length > 0;
                        const isActive = item.href ? pathname === item.href : (hasItems && isChildActive(item.items!));

                        return (
                            <li key={item.name} className="relative group">
                                {hasItems ? (
                                    <div
                                        className={twMerge(
                                            "relative px-3 py-1.5 text-sm font-medium transition-colors hover:text-primary cursor-pointer flex items-center gap-1",
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
                                        <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform duration-200" />
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href!}
                                        className={twMerge(
                                            "relative px-3 py-1.5 text-sm font-medium transition-colors hover:text-primary block",
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
                                )}

                                {/* Dropdown Menu */}
                                {hasItems && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                                        <div className="bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-xl p-2 w-64 flex flex-col gap-1">
                                            {item.items!.map((subItem) => {
                                                const isSubActive = pathname === subItem.href;
                                                return (
                                                    <Link
                                                        key={subItem.href}
                                                        href={subItem.href}
                                                        className={twMerge(
                                                            "px-4 py-2 rounded-xl text-sm font-medium transition-colors",
                                                            isSubActive 
                                                                ? "bg-primary/10 text-primary font-bold" 
                                                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                                        )}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )}
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
                            className="absolute top-full left-0 right-0 mt-2 p-4 bg-background/95 backdrop-blur-xl border border-border rounded-3xl shadow-2xl md:hidden overflow-hidden max-h-[80vh] overflow-y-auto"
                        >
                            <ul className="flex flex-col gap-2">
                                {menuStructure.map((item) => {
                                    const hasItems = item.items && item.items.length > 0;
                                    
                                    if (hasItems) {
                                        const isExpanded = openDropdown === item.name;
                                        return (
                                            <li key={item.name} className="flex flex-col">
                                                <button
                                                    onClick={() => setOpenDropdown(isExpanded ? null : item.name)}
                                                    className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all text-foreground hover:bg-muted"
                                                >
                                                    {item.name}
                                                    <ChevronDown className={twMerge("w-5 h-5 transition-transform", isExpanded && "rotate-180")} />
                                                </button>
                                                <AnimatePresence>
                                                    {isExpanded && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <ul className="pl-4 pr-2 py-2 flex flex-col gap-1 border-l-2 border-border ml-4 mt-1">
                                                                {item.items!.map((subItem) => {
                                                                    const isSubActive = pathname === subItem.href;
                                                                    return (
                                                                        <li key={subItem.href}>
                                                                            <Link
                                                                                href={subItem.href}
                                                                                onClick={() => setIsOpen(false)}
                                                                                className={twMerge(
                                                                                    "block px-4 py-2 rounded-xl text-sm font-medium transition-all",
                                                                                    isSubActive
                                                                                        ? "bg-primary/10 text-primary font-bold"
                                                                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                                                                )}
                                                                            >
                                                                                {subItem.name}
                                                                            </Link>
                                                                        </li>
                                                                    )
                                                                })}
                                                            </ul>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </li>
                                        );
                                    }

                                    const isActive = pathname === item.href;
                                    return (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href!}
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

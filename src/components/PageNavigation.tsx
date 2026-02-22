"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PageNavigationProps {
    prev?: {
        name: string;
        href: string;
    };
    next?: {
        name: string;
        href: string;
    };
}

export default function PageNavigation({ prev, next }: PageNavigationProps) {
    return (
        <div className="w-full max-w-5xl mx-auto px-4 mt-24 mb-12">
            <div className="grid grid-cols-2 gap-4">
                {/* Previous Button */}
                <div>
                    {prev && (
                        <Link
                            href={prev.href}
                            className="group flex flex-col items-start gap-2 p-6 rounded-3xl border border-border bg-card hover:border-foreground/30 transition-all duration-300"
                        >
                            <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-muted-foreground group-hover:text-foreground transition-colors">
                                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                                Vorige
                            </div>
                            <span className="font-heading text-xl md:text-2xl font-bold text-foreground">
                                {prev.name}
                            </span>
                        </Link>
                    )}
                </div>

                {/* Next Button */}
                <div>
                    {next && (
                        <Link
                            href={next.href}
                            className="group flex flex-col items-end text-right gap-2 p-6 rounded-3xl border border-border bg-card hover:border-foreground/30 transition-all duration-300"
                        >
                            <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-muted-foreground group-hover:text-foreground transition-colors">
                                Volgende
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </div>
                            <span className="font-heading text-xl md:text-2xl font-bold text-foreground">
                                {next.name}
                            </span>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

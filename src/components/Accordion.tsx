"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
    color?: string;
}

function AccordionItem({ title, children, isOpen, onClick, color = "bg-tertiary" }: AccordionItemProps) {
    return (
        <div className="border border-border rounded-xl overflow-hidden mb-4 bg-card">
            <button
                onClick={onClick}
                className="flex w-full items-center justify-between p-4 text-left font-medium transition-colors hover:bg-muted/50"
            >
                <span className="text-lg font-heading font-bold">{title}</span>
                <ChevronDown
                    className={clsx("h-5 w-5 transition-transform duration-200", isOpen && "rotate-180")}
                />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="p-4 pt-0 text-muted-foreground border-t border-border/50">
                            <div className={`w-8 h-1 ${color} mb-4 rounded-full opacity-50`} />
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function Accordion({ items }: { items: { title: string; content: React.ReactNode }[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
}

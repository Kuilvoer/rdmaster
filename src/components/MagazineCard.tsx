import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ArrowRight } from "lucide-react";

interface MagazineCardProps {
    title: string;
    category: string;
    description: string;
    href: string;
    image?: string;
    color?: "primary" | "secondary" | "tertiary";
    className?: string;
}

export default function MagazineCard({
    title,
    category,
    description,
    href,
    color = "primary",
    className,
}: MagazineCardProps) {

    const colorStyles = {
        primary: "border-primary/20 hover:border-primary/50 bg-primary/5 hover:bg-primary/10",
        secondary: "border-secondary/20 hover:border-secondary/50 bg-secondary/5 hover:bg-secondary/10",
        tertiary: "border-tertiary/20 hover:border-tertiary/50 bg-tertiary/5 hover:bg-tertiary/10",
    };

    const badgeStyles = {
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        tertiary: "bg-tertiary text-tertiary-foreground",
    };

    return (
        <Link
            href={href}
            className={twMerge(
                "group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-xl",
                colorStyles[color],
                className
            )}
        >
            <div>
                <span className={clsx("mb-4 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider", badgeStyles[color])}>
                    {category}
                </span>
                <h3 className="mb-2 font-heading text-2xl font-bold leading-tight text-foreground group-hover:underline decoration-2 underline-offset-4">
                    {title}
                </h3>
                <p className="text-muted-foreground line-clamp-3">
                    {description}
                </p>
            </div>

            <div className="mt-6 flex items-center gap-2 font-medium text-sm group-hover:gap-3 transition-all">
                Lees Meer <ArrowRight className="w-4 h-4" />
            </div>
        </Link>
    );
}

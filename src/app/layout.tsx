import type { Metadata } from "next";
import { Outfit, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
});

const playfair = Playfair_Display({
    variable: "--font-playfair",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Master Portfolio | Rody Damman",
    description: "Portfolio for Master's in Education & Technology",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/globe.svg" type="image/svg+xml" />
            </head>
            <body
                className={`${outfit.variable} ${spaceGrotesk.variable} ${playfair.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
            >
                <Navigation />
                <main className="flex-grow container mx-auto px-4 py-8">
                    {children}
                </main>
                <footer className="py-6 text-center text-muted-foreground text-sm border-t border-border mt-12">
                    © {new Date().getFullYear()} Rody Damman. Master Connect Portfolio.
                </footer>
            </body>
        </html>
    );
}

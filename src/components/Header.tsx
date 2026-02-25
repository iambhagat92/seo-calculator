"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Search, Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-6 md:gap-10">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="inline-block font-bold text-xl">Calc<span className="text-primary">Hub</span></span>
                    </Link>
                    <nav className="hidden md:flex gap-6 text-sm font-medium">
                        <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            Home
                        </Link>
                        <Link href="/calculators" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            Calculators
                        </Link>
                    </nav>
                </div>

                <div className="flex items-center gap-2">
                    {/* Global Search form would go here, omitting complex logic for header layout simplicity */}
                    <div className="hidden md:flex relative mr-4">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <input
                                type="search"
                                placeholder="Search calculators..."
                                className="flex h-9 w-full sm:w-[300px] rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8"
                            />
                        </div>
                    </div>

                    <button
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9"
                        aria-label="Toggle theme"
                    >
                        {mounted && theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </button>

                    <button
                        className="md:hidden inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden border-t p-4">
                    <nav className="flex flex-col gap-4 text-sm">
                        <Link href="/" className="font-medium" onClick={() => setIsMenuOpen(false)}>
                            Home
                        </Link>
                        <Link href="/calculators" className="font-medium" onClick={() => setIsMenuOpen(false)}>
                            Calculators
                        </Link>
                        <div className="relative mt-2">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <input
                                type="search"
                                placeholder="Search..."
                                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring pl-8"
                            />
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileDown, Menu } from "lucide-react";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-transparent md:px-12 backdrop-blur-sm">
            <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 text-white rounded-full bg-brand-orange">
                    <div className="grid grid-cols-2 gap-[2px]">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                        <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                </div>
                <span className="text-xl font-bold font-oswald text-foreground">Qurifolio</span>
            </div>

            <div className="hidden gap-8 md:flex text-sm font-medium tracking-wide uppercase text-muted-foreground font-inter">
                <Link href="#" className="hover:text-foreground transition-colors">Home</Link>
                <Link href="#" className="hover:text-foreground transition-colors">About us</Link>
                <Link href="#" className="hover:text-foreground transition-colors">Services</Link>
                <Link href="#" className="hover:text-foreground transition-colors">Project</Link>
                <Link href="#" className="hover:text-foreground transition-colors">Blog</Link>
                <Link href="#" className="hover:text-foreground transition-colors">Contact</Link>
            </div>

            <div className="flex items-center gap-4">
                <Button className="hidden md:flex bg-black text-white hover:bg-black/90 rounded-none uppercase text-xs font-bold tracking-wider px-6">
                    Download CV
                </Button>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="w-6 h-6" />
                </Button>
            </div>
        </nav>
    );
}

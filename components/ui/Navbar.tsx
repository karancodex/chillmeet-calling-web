"use client";

import { motion } from "framer-motion";
import { Mic } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import clsx from "clsx";

import Image from "next/image";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={clsx(
            "fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 transition-all duration-500 rounded-2xl",
            scrolled ? "glass shadow-2xl py-3 border-white/5" : "bg-transparent py-5"
        )}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-8 h-8 transform group-hover:rotate-12 transition-transform duration-300">
                        <Image
                            src="/images/chillmeet_logo.png"
                            alt="ChillMeet Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent tracking-tighter">
                        ChillMeet
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="/listener/apply" className="text-[10px] font-black uppercase tracking-widest text-primary hover:brightness-125 transition-all">
                        Join as Listener
                    </Link>
                    {["Pricing", "About", "Safety"].map((item) => (
                        <Link
                            key={item}
                            href={item === "Pricing" ? "/#pricing" : `/${item.toLowerCase().replace(/ /g, "-")}`}
                            className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                    <Link href="/contact" className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-white transition-all transform hover:-translate-y-0.5 active:scale-95">
                        Contact
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <a href="tel:6387197293" className="px-5 py-2.5 bg-gradient-to-r from-primary to-accent text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:shadow-lg hover:shadow-primary/20 transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2">
                        <Mic className="w-4 h-4" />
                        <span>Talk Now</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}

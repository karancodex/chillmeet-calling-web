"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Mic, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import SukunLogo from "./SukunLogo";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20);
    });

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={clsx(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-[#0B0F1A] border-b border-white/10 py-3 shadow-xl"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                        <SukunLogo className="w-full h-full" color="white" />
                    </div>
                    <span className="text-2xl font-black bg-clip-text text-transparent bg-linear-to-r from-primary via-secondary to-accent tracking-tighter">
                        Sukun
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-12">
                    <Link
                        href="/contact"
                        className="text-xs font-bold uppercase tracking-widest text-white hover:text-primary transition-colors"
                    >
                        Join as Listener
                    </Link>

                    <div className="flex items-center gap-10">
                        {["Pricing", "About", "Safety"].map((item) => (
                            <Link
                                key={item}
                                href={item === "Pricing" ? "/#pricing" : `/${item.toLowerCase().replace(/ /g, "-")}`}
                                className="text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-primary transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    <Link
                        href="/contact"
                        className="text-xs font-bold uppercase tracking-widest text-white hover:text-primary transition-colors"
                    >
                        Contact
                    </Link>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">


                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden p-2 text-white hover:text-primary transition-colors">
                        <Menu className="w-8 h-8" />
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}

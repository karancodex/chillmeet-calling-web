"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Mic, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import clsx from "clsx";
import ListnerZoneLogo from "./ListnerZoneLogo";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20);
    });

    // Close menu when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

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
                <Link href="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
                    <div className="relative w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-300">
                        <ListnerZoneLogo className="w-full h-full" color="white" />
                    </div>
                    <span className="text-xl md:text-2xl font-black bg-clip-text text-transparent bg-linear-to-r from-primary via-secondary to-accent tracking-tighter">
                        ListnerZone
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
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-white hover:text-primary transition-colors z-[60]"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-[#0B0F1A] z-40 md:hidden pt-24 px-6"
                    >
                        <div className="flex flex-col gap-8 text-center">
                            <Link
                                href="/contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-xl font-bold uppercase tracking-widest text-white hover:text-primary transition-colors"
                            >
                                Join as Listener
                            </Link>

                            <div className="flex flex-col gap-8">
                                {["Pricing", "About", "Safety"].map((item) => (
                                    <Link
                                        key={item}
                                        href={item === "Pricing" ? "/#pricing" : `/${item.toLowerCase().replace(/ /g, "-")}`}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-xl font-bold uppercase tracking-[0.2em] text-white hover:text-primary transition-colors"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>

                            <Link
                                href="/contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-xl font-bold uppercase tracking-widest text-white hover:text-primary transition-colors"
                            >
                                Contact
                            </Link>
                        </div>

                        {/* Decoration */}
                        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none">
                            <ListnerZoneLogo className="w-40 h-40" color="white" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

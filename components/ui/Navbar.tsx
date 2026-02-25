"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Mic, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import clsx from "clsx";
import ListnerZoneLogo from "./ListnerZoneLogo";
import { ThemeToggle } from "./ThemeToggle";

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

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("/#") || href.startsWith("#")) {
            const id = href.replace("/#", "").replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                e.preventDefault();
                element.scrollIntoView({ behavior: "smooth", block: "start" });
                window.history.pushState(null, "", href.startsWith("/#") ? href : `/#${id}`);
                setIsMenuOpen(false);
            }
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={clsx(
                    "fixed top-0 left-0 w-full z-50 transition-all duration-500",
                    scrolled || isMenuOpen
                        ? "bg-[#020305]/95 backdrop-blur-2xl border-b border-luxury-gold/10 py-3 md:py-4 shadow-2xl"
                        : "bg-transparent py-6 md:py-8"
                )}
            >
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
                        <div className="relative w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-500">
                            <ListnerZoneLogo className="w-full h-full" color="#D4AF37" />
                        </div>
                        <span className="text-lg md:text-2xl font-black bg-clip-text text-transparent bg-theme-gradient tracking-tighter uppercase font-display">
                            ListnerZone
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-12">
                        <Link
                            href="/contact"
                            className="text-xs font-bold uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors"
                        >
                            Join as Listener
                        </Link>

                        <div className="flex items-center gap-10">
                            {["Pricing", "Journal", "FAQ", "About", "Safety"].map((item) => {
                                const href = item === "Pricing" ? "/#pricing" : item === "Journal" ? "/blog" : item === "FAQ" ? "/faq" : `/${item.toLowerCase().replace(/ /g, "-")}`;
                                return (
                                    <Link
                                        key={item}
                                        href={href}
                                        onClick={(e) => handleAnchorClick(e, href)}
                                        className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/80 hover:text-primary transition-colors"
                                    >
                                        {item}
                                    </Link>
                                );
                            })}
                        </div>

                        <Link
                            href="/contact"
                            className="text-xs font-bold uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors"
                        >
                            Contact
                        </Link>

                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center gap-3">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-foreground hover:bg-white/10 transition-colors"
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X className="w-5 h-5 shadow-luxury-gold" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[100] bg-background flex flex-col p-8 md:hidden"
                    >
                        {/* Mobile Menu Header */}
                        <div className="flex items-center justify-between mb-16">
                            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                                <div className="w-8 h-8">
                                    <ListnerZoneLogo className="w-full h-full" color="#D4AF37" />
                                </div>
                                <span className="text-xl font-black text-foreground uppercase tracking-tighter font-display">
                                    Listner<span className="text-luxury-gold">Zone</span>
                                </span>
                            </Link>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Mobile Menu Links */}
                        <div className="flex flex-col gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <Link
                                    href="/listener/apply"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-2xl font-black text-white hover:text-luxury-gold transition-colors block uppercase tracking-tighter"
                                >
                                    Join as Listener
                                </Link>
                            </motion.div>

                            {["Pricing", "Journal", "FAQ", "About", "Safety"].map((item, idx) => {
                                const href = item === "Pricing" ? "/#pricing" : item === "Journal" ? "/blog" : item === "FAQ" ? "/faq" : `/${item.toLowerCase().replace(/ /g, "-")}`;
                                return (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + (idx + 1) * 0.05 }}
                                    >
                                        <Link
                                            href={href}
                                            onClick={(e) => {
                                                handleAnchorClick(e, href);
                                                setIsMenuOpen(false);
                                            }}
                                            className="text-4xl font-black text-white hover:text-luxury-gold transition-colors block uppercase tracking-tighter"
                                        >
                                            {item}
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="pt-8 border-t border-white/5"
                            >
                                <Link
                                    href="/contact"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-2xl font-black text-luxury-gold hover:text-white transition-colors block uppercase tracking-tighter"
                                >
                                    Contact Support
                                </Link>
                            </motion.div>
                        </div>

                        {/* Mobile Menu Footer */}
                        <div className="mt-auto pt-10">
                            <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em] mb-4">Elite Sanctuary</p>
                            <div className="flex gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                                <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                                <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

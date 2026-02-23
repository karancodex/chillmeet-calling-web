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

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("/#") || href.startsWith("#")) {
            const id = href.replace("/#", "").replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                e.preventDefault();
                element.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", href.startsWith("/#") ? href : `/#${id}`);
                setIsMenuOpen(false);
            }
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={clsx(
                "fixed top-0 left-0 w-full z-50 transition-all duration-500",
                scrolled
                    ? "bg-[#020305]/80 backdrop-blur-2xl border-b border-luxury-gold/10 py-3 md:py-4 shadow-2xl"
                    : "bg-transparent py-6 md:py-8"
            )}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
                    <div className="relative w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-500">
                        <ListnerZoneLogo className="w-full h-full" color="#D4AF37" />
                    </div>
                    <span className="text-lg md:text-2xl font-black bg-clip-text text-transparent bg-linear-to-r from-luxury-gold via-white to-luxury-gold tracking-tighter uppercase font-display">
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
                        {["Pricing", "Journal", "FAQ", "About", "Safety"].map((item) => {
                            const href = item === "Pricing" ? "/#pricing" : item === "Journal" ? "/blog" : item === "FAQ" ? "/faq" : `/${item.toLowerCase().replace(/ /g, "-")}`;
                            return (
                                <Link
                                    key={item}
                                    href={href}
                                    onClick={(e) => handleAnchorClick(e, href)}
                                    className="text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-primary transition-colors"
                                >
                                    {item}
                                </Link>
                            );
                        })}
                    </div>

                    <Link
                        href="/contact"
                        className="text-xs font-bold uppercase tracking-widest text-white hover:text-primary transition-colors"
                    >
                        Contact
                    </Link>
                </div>

                {/* Mobile Action Icon (Simplified for App Feel) */}
                <div className="md:hidden flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                        <Mic className="w-4 h-4 text-luxury-gold" />
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}

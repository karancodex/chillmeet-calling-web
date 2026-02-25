"use client";

import { motion } from "framer-motion";
import { Home, IndianRupee, ShieldCheck, HeartPulse, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "Plans", icon: IndianRupee, href: "/#pricing" },
    { name: "Safety", icon: ShieldCheck, href: "/safety" },
    { name: "About", icon: User, href: "/about" },
];

export default function BottomNav() {
    const pathname = usePathname();

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("/#") || href.startsWith("#")) {
            const id = href.replace("/#", "").replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                e.preventDefault();
                element.scrollIntoView({ behavior: "smooth", block: "start" });
                window.history.pushState(null, "", href.startsWith("/#") ? href : `/#${id}`);
            }
        }
    };

    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="md:hidden fixed bottom-0 left-0 right-0 z-[100] px-4 pb-6 pt-2 pointer-events-none"
        >
            <div className="bg-background/80 backdrop-blur-3xl border border-foreground/10 rounded-[2rem] shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.5)] flex items-center justify-around p-2 pointer-events-auto max-w-sm mx-auto">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={(e) => handleAnchorClick(e, item.href)}
                            className="relative flex flex-col items-center gap-1 p-3 group"
                        >
                            <item.icon className={clsx(
                                "w-5 h-5 transition-all duration-300",
                                isActive ? "text-luxury-gold scale-110" : "text-foreground/40 group-hover:text-foreground"
                            )} />
                            <span className={clsx(
                                "text-[8px] font-black uppercase tracking-widest transition-all duration-300",
                                isActive ? "text-luxury-gold" : "text-foreground/20 group-hover:text-foreground/60"
                            )}>
                                {item.name}
                            </span>
                            {isActive && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-foreground/5 rounded-2xl -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </Link>
                    );
                })}

                {/* Center Floating Action Button Style */}
                <Link
                    href="/#pricing"
                    onClick={(e) => handleAnchorClick(e, "/#pricing")}
                    className="flex items-center justify-center w-12 h-12 bg-luxury-gold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] active:scale-90 transition-transform -translate-y-2 border-4 border-background"
                >
                    <HeartPulse className="w-6 h-6 text-dark fill-dark/20" />
                </Link>
            </div>
        </motion.div>
    );
}

"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // Avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 animate-pulse" />
        );
    }

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-luxury-gold/50 hover:bg-white/10 transition-all group relative overflow-hidden"
            aria-label="Toggle theme"
        >
            <div className="relative z-10">
                {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-luxury-gold group-hover:rotate-45 transition-transform duration-500" />
                ) : (
                    <Moon className="w-5 h-5 text-primary group-hover:-rotate-12 transition-transform duration-500" />
                )}
            </div>

            {/* Background glow effect */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity blur-xl ${theme === 'dark' ? 'bg-luxury-gold' : 'bg-primary'}`} />
        </motion.button>
    );
}

"use client";

import { motion } from "framer-motion";
import { Sparkles, Activity, ShieldCheck, HeartHandshake, Headphones } from "lucide-react";

const ticks = [
    { text: "No Judgment", icon: Sparkles },
    { text: "100% Anonymous", icon: ShieldCheck },
    { text: "Always Available", icon: Activity },
    { text: "Elite Care", icon: HeartHandshake },
    { text: "High Fidelity", icon: Headphones },
];

export default function FastTalkBanner() {
    return (
        <section className="bg-[#020305] border-y border-white/5 py-4 overflow-hidden relative group">
            <div className="flex whitespace-nowrap">
                {/* We double the array to create a seamless infinite loop */}
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex items-center animate-marquee">
                        {ticks.map((tick, idx) => (
                            <div key={idx} className="flex items-center px-12 gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                                <span className="text-[10px] md:text-[11px] font-black text-white/40 uppercase tracking-[0.4em] group-hover:text-white transition-colors duration-700">
                                    {tick.text}
                                </span>
                                <div className="w-1.5 h-1.5 rounded-full bg-white/5" />
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Subtle Gradient Overlays for smooth edges */}
            <div className="absolute inset-y-0 left-0 w-40 bg-linear-to-r from-[#020305] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-40 bg-linear-to-l from-[#020305] to-transparent z-10" />
        </section>
    );
}

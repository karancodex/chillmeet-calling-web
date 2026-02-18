"use client";

import { Phone } from "lucide-react";

export default function FastTalkBanner() {
    return (
        <section className="py-12 relative overflow-hidden bg-dark border-y border-white/5">
            {/* Animated Ticker / Fast Access Bar */}
            <div className="container mx-auto px-6">
                <div className="glass-card p-4 md:p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-8 border-primary/20 bg-primary/5 rounded-3xl">
                    <div className="flex items-center gap-6 overflow-hidden max-w-full">
                        <div className="flex items-center gap-2 shrink-0">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[10px] font-black text-white uppercase tracking-widest">Network Live</span>
                        </div>
                        <div className="h-4 w-px bg-white/10 shrink-0" />
                        <div className="flex gap-8 animate-marquee whitespace-nowrap">
                            {["No Judgment", "100% Secure", "Always Available", "Your Voice Matters"].map((text, i) => (
                                <span key={i} className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">{text}</span>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}

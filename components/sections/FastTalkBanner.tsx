"use client";

import { motion } from "framer-motion";
import { Mic, Phone, Radio, Heart, Shield, Users, ArrowRight } from "lucide-react";
import Image from "next/image";

const stats = [
    { label: "Active Listeners", value: "140+", icon: Users },
    { label: "Hearts Healed", value: "10K+", icon: Heart },
    { label: "Trust Score", value: "4.9/5", icon: Shield },
];

export default function FastTalkBanner() {
    return (
        <section className="py-12 relative overflow-hidden bg-dark border-y border-white/5">
            {/* Animated Ticker / Fast Access Bar */}
            <div className="container mx-auto px-6">
                <div className="glass-card p-4 md:p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-8 border-primary/20 bg-primary/5">
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

                    <a href="tel:6387197293" className="shrink-0 flex items-center gap-3 px-8 py-4 bg-white text-dark rounded-xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-white/5 group">
                        <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                        Quick Connect Now
                    </a>
                </div>

                {/* Mini Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card p-8 border-white/5 flex items-center justify-between group hover:border-primary/20"
                        >
                            <div>
                                <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-1">{stat.label}</p>
                                <h4 className="text-3xl font-black text-white">{stat.value}</h4>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-all">
                                <stat.icon className="w-5 h-5 text-primary" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { User, Globe, Sparkles, Star, Mic2, MessageSquareHeart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const listeners = [
    {
        name: "Rahul",
        spec: "Resonance Guide",
        tags: ["Patient", "Kind"],
        status: "Online",
    },
    {
        name: "Karan",
        spec: "Empathy Expert",
        tags: ["Kind", "Friendly"],
        status: "Online",
    },
    {
        name: "Habib",
        spec: "Soul Listener",
        tags: ["Understanding", "Calm"],
        status: "Online",
    },
    {
        name: "Alka",
        spec: "Clarity Guide",
        tags: ["Warm", "Insightful"],
        status: "Online",
    },
    {
        name: "Raj",
        spec: "Peace Support",
        tags: ["Patient", "Neutral"],
        status: "Online",
    },
];

export default function LiveListenerPreview() {
    return (
        <section className="py-24 bg-[#020305] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {/* Header - Synced Styling */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <Sparkles className="w-3 h-3 text-luxury-gold" />
                        <span className="text-[10px] font-black text-white/60 tracking-[0.3em] uppercase">Human Connection</span>
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-display tracking-tight text-center leading-none">
                        Our Soulful <span className="text-luxury-gold italic">Active Listeners.</span>
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base font-medium max-w-xl mx-auto opacity-80">
                        Available right now to hold space for your story, providing absolute presence without judgment or distraction.
                    </p>
                </div>

                {/* Vertical Stack for Mobile / Luxury Grid for Desktop */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-16 gap-x-6 items-stretch pb-10">
                    {listeners.map((listener, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="group relative pt-12"
                        >
                            {/* Premium Card Body */}
                            <div className="h-full bg-linear-to-b from-white/[0.05] to-transparent border border-white/10 rounded-[3rem] p-8 pt-16 flex flex-col items-center text-center hover:border-luxury-gold/40 hover:bg-white/[0.08] transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative backdrop-blur-sm group-hover:shadow-luxury-gold/5">

                                {/* Absolute Shine Effect */}
                                <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-white/[0.02] to-transparent pointer-events-none" />

                                {/* Floating Profile Image Mockup - Enhanced */}
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                                    <div className="relative">
                                        {/* Dynamic Glow Background */}
                                        <div className="absolute inset-0 bg-luxury-gold/30 rounded-full blur-2xl group-hover:bg-luxury-gold/50 transition-colors duration-1000 scale-90" />

                                        {/* Outer Ring */}
                                        <div className="w-24 h-24 rounded-full p-[2px] bg-linear-to-br from-luxury-gold via-white/20 to-luxury-gold/40 relative z-10 shadow-2xl transition-transform duration-700 group-hover:rotate-12">
                                            <div className="w-full h-full rounded-full bg-[#020305] flex items-center justify-center p-1">
                                                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
                                                    <div className="absolute inset-0 bg-linear-to-tr from-luxury-gold/20 to-transparent opacity-50" />
                                                    <User className="w-10 h-10 text-white/20" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Professional Status Badge */}
                                        <div className="absolute bottom-1 right-1 px-2 py-0.5 rounded-full bg-emerald-500 text-[6px] font-black text-white uppercase tracking-tighter border-2 border-[#020305] z-30 shadow-lg shadow-emerald-500/20">
                                            LIVE
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 mb-2">
                                    <h3 className="text-2xl font-black text-white group-hover:text-luxury-gold transition-all duration-500 font-display tracking-tight leading-none">
                                        {listener.name}
                                    </h3>
                                </div>
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-1 h-1 rounded-full bg-luxury-gold/40" />
                                    <p className="text-[11px] text-white/40 font-bold uppercase tracking-[0.2em]">
                                        {listener.spec}
                                    </p>
                                    <div className="w-1 h-1 rounded-full bg-luxury-gold/40" />
                                </div>

                                {/* Premium Skills / Tags */}
                                <div className="flex flex-wrap justify-center gap-2 mb-8 items-center">
                                    {listener.tags.map(tag => (
                                        <span key={tag} className="px-4 py-1.5 bg-white/5 rounded-xl text-[9px] font-black uppercase tracking-widest text-white/60 border border-white/5 group-hover:border-luxury-gold/20 group-hover:text-white transition-all">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Call Action Button - Luxury Style */}
                                <a
                                    href="#pricing"
                                    onClick={(e) => {
                                        const element = document.getElementById("pricing");
                                        if (element) {
                                            e.preventDefault();
                                            element.scrollIntoView({ behavior: "smooth", block: "start" });
                                            window.history.pushState(null, "", "#pricing");
                                        }
                                    }}
                                    className="w-full py-4 bg-white text-dark rounded-2xl font-black uppercase text-[10px] tracking-[0.25em] mb-8 hover:bg-luxury-gold hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 shadow-2xl text-center cursor-pointer group-hover:shadow-luxury-gold/20 relative overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        Talk Now <Mic2 className="w-3.5 h-3.5" />
                                    </span>
                                </a>

                                {/* Experience & Trust Metrics */}
                                <div className="mt-auto w-full pt-6 border-t border-white/5 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity">
                                    <div className="flex items-center gap-2">
                                        <div className="flex -space-x-1">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-4 h-4 rounded-full border border-dark bg-slate-800 flex items-center justify-center overflow-hidden">
                                                    <User className="w-2.5 h-2.5 text-white/10" />
                                                </div>
                                            ))}
                                        </div>
                                        <span className="text-[8px] font-black text-white/30 uppercase tracking-widest">500+ Talks</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 py-1 px-2.5 bg-luxury-gold/10 rounded-lg border border-luxury-gold/20">
                                        <Star className="w-2.5 h-2.5 text-luxury-gold fill-luxury-gold" />
                                        <span className="text-[9px] font-black text-luxury-gold uppercase tracking-widest">4.9</span>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Corner Shines */}
                            <div className="absolute top-12 left-0 w-12 h-12 bg-luxury-gold/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-0 right-0 w-12 h-12 bg-blue-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-slate-600 text-[8px] font-black uppercase tracking-[1em] opacity-50">Verified Empathy • Secular Support • Human Presence</p>
                </div>
            </div>
        </section>
    );
}

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

                {/* Cool & Attractive Listener Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 items-stretch">
                    {listeners.map((listener, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="group relative h-full pt-10"
                        >
                            {/* Card Body */}
                            <div className="h-full bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-6 pt-12 flex flex-col items-center text-center hover:border-luxury-gold/30 hover:bg-white/[0.04] transition-all duration-500 shadow-2xl relative">

                                {/* Floating Profile Image Mockup */}
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                                    <div className="relative">
                                        {/* Pulse Effect */}
                                        <div className="absolute inset-0 bg-luxury-gold/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000" />

                                        <div className="w-20 h-20 rounded-full bg-linear-to-br from-slate-800 to-dark p-[2px] relative z-10 overflow-hidden shadow-2xl">
                                            <div className="w-full h-full rounded-full bg-dark flex items-center justify-center border border-white/10 overflow-hidden group-hover:scale-110 transition-transform duration-700">
                                                <User className="w-8 h-8 text-white/10" />
                                            </div>
                                        </div>

                                        {/* Status Dot */}
                                        <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-4 border-[#020305] z-20 shadow-lg" />
                                    </div>
                                </div>

                                <div className="mt-4 mb-1">
                                    <h3 className="text-xl font-black text-white group-hover:text-luxury-gold transition-colors font-display tracking-tight leading-none">
                                        {listener.name}
                                    </h3>
                                </div>
                                <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-6 italic">
                                    {listener.spec}
                                </p>

                                {/* Skills / Tags */}
                                <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                                    {listener.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-[8px] font-black uppercase tracking-widest text-luxury-gold/80 border border-white/5 group-hover:bg-luxury-gold/10 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Start Talk Action */}
                                <Link
                                    href="#pricing"
                                    onClick={(e) => {
                                        const element = document.getElementById("pricing");
                                        if (element) {
                                            e.preventDefault();
                                            element.scrollIntoView({ behavior: "smooth" });
                                            window.history.pushState(null, "", "/#pricing");
                                        }
                                    }}
                                    className="w-full py-3 bg-white/[0.05] border border-white/10 text-white rounded-2xl font-black uppercase text-[9px] tracking-[0.2em] mb-8 hover:bg-white hover:text-dark hover:scale-105 transition-all duration-500 shadow-xl"
                                >
                                    Talk Now
                                </Link>

                                {/* Availability Hallmarks */}
                                <div className="mt-auto w-full pt-6 border-t border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-1">
                                        <Mic2 className="w-3 h-3 text-white/10" />
                                        <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">Voice Live</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Star className="w-2.5 h-2.5 text-luxury-gold fill-luxury-gold" />
                                        <span className="text-[8px] font-black text-white uppercase tracking-widest">4.9</span>
                                    </div>
                                </div>
                            </div>
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

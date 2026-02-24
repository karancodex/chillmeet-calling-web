"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Sparkles, Star, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export default function TrustWitness() {
    return (
        <section className="py-24 bg-[#020305] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {/* Simple & Clean Header - Synced Styling */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <ShieldCheck className="w-3 h-3 text-luxury-gold" />
                        <span className="text-[10px] font-black text-white/60 tracking-[0.3em] uppercase">Vetted & Verified</span>
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-display tracking-tight text-center leading-none">
                        Trusted By <span className="text-luxury-gold italic">A Growing Community.</span>
                    </h2>
                </div>

                {/* Compact Trust Card - Based on New Premium Layout */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto bg-white/[0.03] border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center"
                >
                    {/* Left: Content Side - Compact & Clean */}
                    <div className="w-full lg:w-[55%] p-8 lg:p-14 flex flex-col justify-center relative order-2 lg:order-1">
                        {/* Shaded background like reference */}
                        <div className="absolute top-6 left-6 right-6 bottom-6 bg-white/[0.01] rounded-[2rem] -z-10" />

                        <div className="text-center lg:text-left mb-8">
                            <div className="flex justify-center lg:justify-start gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 text-luxury-gold fill-luxury-gold" />)}
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-tight mb-6 font-display">
                                Providing A <span className="text-luxury-gold italic">Safe Harbor.</span>
                            </h3>
                            <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed max-w-[400px] mb-8">
                                Behind every call is a real human, vetted for empathy and committed to your peace of mind. We provide the emotional support the world often forgets.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mb-10">
                            <div className="flex items-start gap-3 justify-start group">
                                <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center shrink-0 group-hover:bg-luxury-gold transition-all">
                                    <UserCheck className="w-5 h-5 text-luxury-gold group-hover:text-dark transition-colors" />
                                </div>
                                <p className="text-[10px] text-white/60 font-black uppercase tracking-widest leading-snug">Elite Vetting<br /><span className="text-white">Process</span></p>
                            </div>
                            <div className="flex items-start gap-3 justify-start group">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500 transition-all">
                                    <ShieldCheck className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                                </div>
                                <p className="text-[10px] text-white/60 font-black uppercase tracking-widest leading-snug">Absolute<br /><span className="text-white">Discretion</span></p>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-start">
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
                                className="px-10 py-4 bg-white text-dark rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-luxury-gold hover:scale-105 transition-all shadow-xl"
                            >
                                Start Your Journey
                            </Link>
                        </div>
                    </div>

                    {/* Right: Visual Side - Calling Simulation Mockup */}
                    <div className="w-full lg:w-[45%] relative overflow-hidden h-[400px] lg:h-[500px] bg-dark/50 order-1 lg:order-2">
                        <div className="absolute inset-4 md:inset-6 rounded-[2.5rem] overflow-hidden border border-white/10 group">
                            <Image
                                src="/images/trusted_listener_2_1770542117703.png"
                                alt="Trusted Listener"
                                fill
                                className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-[8s] brightness-100"
                                priority
                            />
                            {/* Live Calling UI Overlay - Compact Version */}
                            <div className="absolute inset-0 flex flex-col items-center justify-between p-10 z-20">
                                <div className="text-center">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse mx-auto mb-3 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                                    <p className="text-[8px] font-black text-white/40 tracking-[0.4em] uppercase mb-1">Live Sanctuary</p>
                                    <p className="text-white font-display text-xl tracking-tight">Vetted Expert</p>
                                </div>

                                <div className="flex items-end gap-1 h-8 mb-6">
                                    {[...Array(8)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="w-1 bg-luxury-gold/50 rounded-full"
                                            animate={{ height: [4, Math.random() * 20 + 5, 4] }}
                                            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                                        />
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30">
                                        <Phone className="w-4 h-4 text-red-500 rotate-[135deg]" />
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/20 animate-bounce">
                                        <Phone className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-linear-to-t from-[#020305] via-transparent to-transparent opacity-80" />
                        </div>
                    </div>
                </motion.div>

                <div className="mt-16 text-center">
                    <p className="text-slate-600 text-[8px] font-black uppercase tracking-[1em] opacity-40 italic">Verified Presence • Emotional Safety • 100% Genuine</p>
                </div>
            </div>
        </section>
    );
}

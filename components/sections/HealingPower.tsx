"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowRight, ShieldCheck, HeartPulse, UserCircle2 } from "lucide-react";
import Link from "next/link";

export default function HealingPower() {
    return (
        <section className="py-24 bg-[#020305] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/* Header - Synced Styling as per your preference */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <Sparkles className="w-3 h-3 text-luxury-gold" />
                        <span className="text-[10px] font-black text-white/60 tracking-[0.3em] uppercase">Transformative Support</span>
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-display tracking-tight text-center">
                        Mending Hearts, <span className="text-luxury-gold italic">One Breath At A Time.</span>
                    </h2>
                </div>

                {/* Content Card - Refined for Premium UI */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto bg-white/[0.03] border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch"
                >
                    {/* Left: Cinematic Image - Increased prominence */}
                    <div className="w-full lg:w-[45%] relative overflow-hidden h-[350px] lg:h-auto min-h-[400px] order-1">
                        <div className="absolute inset-4 md:inset-6 rounded-[2.5rem] overflow-hidden border border-white/10 group">
                            <Image
                                src="/images/inner_sanctuary.png"
                                alt="Inner Sanctuary"
                                fill
                                className="object-cover transition-transform duration-[8s] group-hover:scale-110"
                                priority
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-[#020305]/80 via-transparent to-transparent opacity-60" />
                        </div>
                    </div>

                    {/* Right: Modern Typographic Content */}
                    <div className="w-full lg:w-[55%] p-8 lg:p-16 flex flex-col justify-center relative order-2">
                        {/* Shaded background background */}
                        <div className="absolute inset-6 bg-white/[0.01] rounded-[2rem] -z-10 border border-white/[0.05]" />

                        <div className="text-center lg:text-left mb-10">
                            <p className="text-luxury-gold italic text-lg lg:text-2xl font-display mb-2">find your</p>
                            <h3 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-tight font-display">
                                Inner <span className="text-luxury-gold italic">Sanctuary</span>
                            </h3>
                        </div>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-center gap-5 justify-center lg:justify-start group">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 shrink-0 group-hover:border-luxury-gold/30 transition-all">
                                    <ShieldCheck className="w-6 h-6 text-luxury-gold" />
                                </div>
                                <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed max-w-[320px]">
                                    Private and anonymous conversation designed for absolute discretion.
                                </p>
                            </div>

                            <div className="flex items-center gap-5 justify-center lg:justify-start group">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 shrink-0 group-hover:border-luxury-gold/30 transition-all">
                                    <UserCircle2 className="w-6 h-6 text-luxury-gold" />
                                </div>
                                <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed max-w-[320px]">
                                    Talk to someone online who listens with empathy and without judgement.
                                </p>
                            </div>

                            <div className="flex items-center gap-5 justify-center lg:justify-start group">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 shrink-0 group-hover:border-luxury-gold/30 transition-all">
                                    <HeartPulse className="w-6 h-6 text-luxury-gold" />
                                </div>
                                <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed max-w-[320px]">
                                    Access late night talk support whenever the world feels overwhelming.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-start pt-4">
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
                                className="px-12 py-5 bg-white text-dark rounded-full font-black uppercase text-[10px] tracking-[0.2em] hover:bg-luxury-gold hover:text-white hover:scale-105 transition-all shadow-2xl active:scale-95 cursor-pointer"
                            >
                                Get Started Now
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Subtle Texture for Premium feel */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none" />
        </section>
    );
}

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

                {/* Content Card - Based on Uploaded Image Layout - COMPACT VERSION */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto bg-white/[0.03] border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center"
                >
                    {/* Left: Cinematic Image - Shorter height */}
                    <div className="lg:w-[45%] relative overflow-hidden h-[300px] lg:h-[400px]">
                        <div className="absolute inset-0 rounded-tl-[4rem] rounded-br-[4rem] overflow-hidden m-4 md:m-6">
                            <Image
                                src="/images/inner_sanctuary.png"
                                alt="Inner Sanctuary"
                                fill
                                className="object-cover transition-transform duration-[5s] hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-[#020305]/60 to-transparent" />
                        </div>
                    </div>

                    {/* Right: Modern Typographic Content - Reduced padding and text size */}
                    <div className="lg:w-[55%] p-6 lg:p-12 flex flex-col justify-center relative">
                        {/* Shaded background like uploaded image */}
                        <div className="absolute top-6 left-6 right-6 bottom-6 bg-white/[0.01] rounded-[2rem] -z-10" />

                        <div className="text-right lg:text-left mb-6">
                            <p className="text-luxury-gold italic text-md lg:text-xl font-display mb-1">find your</p>
                            <h3 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-none">Inner Sanctuary</h3>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-4 justify-end lg:justify-start group">
                                <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed max-w-[280px] order-1 lg:order-2">
                                    Private and anonymous conversation designed for absolute discretion.
                                </p>
                                <ShieldCheck className="w-6 h-6 text-luxury-gold/40 group-hover:text-luxury-gold transition-colors order-2 lg:order-1 shrink-0" />
                            </div>

                            <div className="flex items-center gap-4 justify-end lg:justify-start group">
                                <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed max-w-[280px] order-1 lg:order-2">
                                    Talk to someone online who listens with empathy and without judgement.
                                </p>
                                <UserCircle2 className="w-6 h-6 text-luxury-gold/40 group-hover:text-luxury-gold transition-colors order-2 lg:order-1 shrink-0" />
                            </div>

                            <div className="flex items-center gap-4 justify-end lg:justify-start group">
                                <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed max-w-[280px] order-1 lg:order-2">
                                    Access late night talk support whenever the world feels overwhelming.
                                </p>
                                <HeartPulse className="w-6 h-6 text-luxury-gold/40 group-hover:text-luxury-gold transition-colors order-2 lg:order-1 shrink-0" />
                            </div>
                        </div>

                        <div className="flex justify-end lg:justify-start">
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
                                className="px-8 py-3 bg-white text-dark rounded-full font-black uppercase text-[9px] tracking-widest hover:bg-luxury-gold hover:scale-105 transition-all shadow-xl"
                            >
                                Get Started
                            </Link>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4 justify-end lg:justify-start text-[7px] font-black text-white/20 uppercase tracking-[0.2em]">
                            <span>support@listnerzone.com</span>
                            <span className="hidden md:inline">•</span>
                            <span>www.listnerzone.com</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Subtle Texture for Premium feel */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none" />
        </section>
    );
}

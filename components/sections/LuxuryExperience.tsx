"use client";

import { motion } from "framer-motion";
import { Crown, ShieldCheck, Star, Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const benefits = [
    {
        icon: Crown,
        title: "Elite Listeners",
        desc: "Hand-picked professionals ready to hear your story.",
        color: "text-luxury-gold",
        bg: "bg-luxury-gold/5"
    },
    {
        icon: ShieldCheck,
        title: "Absolute Discretion",
        desc: "Military-grade privacy for your personal talks.",
        color: "text-blue-400",
        bg: "bg-blue-400/5"
    },
    {
        icon: Star,
        title: "Premium Fidelity",
        desc: "Crystal clear audio that makes distance disappear.",
        color: "text-accent",
        bg: "bg-accent/5"
    }
];

export default function LuxuryExperience() {
    return (
        <section className="py-16 lg:py-20 bg-[#020305] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {/* Header - More Compact */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-5"
                    >
                        <Sparkles className="w-3 h-3 text-luxury-gold" />
                        <span className="text-[9px] font-black text-white/50 tracking-[0.3em] uppercase">The Elite Standard</span>
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4 font-display tracking-tight text-center leading-none">
                        Beyond Support. <span className="text-luxury-gold italic">Exceptional Care.</span>
                    </h2>
                    <p className="text-slate-400 text-base max-w-xl mx-auto font-medium opacity-80">
                        A bespoke emotional sanctuary for those who demand the highest level of empathy and complete digital privacy.
                    </p>
                </div>

                {/* Floating Modern Bento Grid - ADJUSTED FOR ONE SCREEN */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">

                    {/* Main High-Impact Card (Left) - Compact */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 relative group rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/[0.02] min-h-[350px] lg:min-h-full flex flex-col justify-end p-8 md:p-10 shadow-2xl"
                    >
                        <Image
                            src="/images/hero_1.png"
                            alt="Luxury Experience"
                            fill
                            className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-[4s] brightness-50"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#020305] via-[#020305]/60 to-transparent" />

                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-5 font-display">
                                A Sanctuary For <br />
                                Your <span className="text-luxury-gold italic">Quiet Thoughts.</span>
                            </h3>
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
                                className="inline-flex items-center gap-3 px-8 py-3 bg-white text-dark rounded-full font-black uppercase text-[9px] tracking-widest hover:bg-luxury-gold hover:scale-105 transition-all shadow-xl"
                            >
                                Experience The Difference
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Column Features - Very Compact Tiles */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        {benefits.map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative p-7 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-luxury-gold/30 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden flex items-center gap-6 group"
                            >
                                <div className={clsx(
                                    "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110",
                                    benefit.bg
                                )}>
                                    <benefit.icon className={clsx("w-6 h-6", benefit.color)} />
                                </div>

                                <div className="flex-1">
                                    <h4 className="text-lg font-black text-white uppercase tracking-tight mb-1 group-hover:text-luxury-gold transition-colors font-display">
                                        {benefit.title}
                                    </h4>
                                    <p className="text-slate-500 text-xs font-medium leading-relaxed">
                                        {benefit.desc}
                                    </p>
                                </div>

                                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                                    <CheckCircle2 className="w-4 h-4 text-luxury-gold" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>

                <div className="mt-12 text-center">
                    <p className="text-slate-600 text-[8px] font-black uppercase tracking-[0.8em] opacity-50">Private • Premium • Professional</p>
                </div>
            </div>
        </section>
    );
}

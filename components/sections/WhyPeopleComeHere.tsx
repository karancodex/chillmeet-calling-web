"use client";

import { motion } from "framer-motion";
import { HeartCrack, Moon, UserMinus, Zap, HelpCircle, Ghost, CloudRain, ShieldAlert, Sparkles, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const feelings = [
    {
        title: "Romantic Breakup",
        icon: HeartCrack,
        image: "/images/tr_man.png",
        color: "text-red-400",
        span: "md:col-span-2 md:row-span-2 row-span-2",
        desc: "Healing after a sudden end."
    },
    {
        title: "Office Burnout",
        icon: Zap,
        image: "/images/tr_woman.png",
        color: "text-orange-400",
        span: "md:col-span-1 md:row-span-1",
        desc: "Strategic stress relief."
    },
    {
        title: "Soul Loneliness",
        icon: UserMinus,
        image: "/images/hero_2.png",
        color: "text-blue-400",
        span: "md:col-span-1 md:row-span-1",
        desc: "Deep human connection."
    },
    {
        title: "Overthinking",
        icon: HelpCircle,
        image: "/images/tr_boy.png",
        color: "text-amber-400",
        span: "md:col-span-2 md:row-span-1",
        desc: "Quiet the mental noise."
    },
    {
        title: "Heavy Anxiety",
        icon: Moon,
        image: "/images/hero_3.png",
        color: "text-purple-400",
        span: "md:col-span-1 md:row-span-1",
        desc: "Find your inner calm."
    },
    {
        title: "Social Pressure",
        icon: Ghost,
        image: "/images/hero_1.png",
        color: "text-pink-400",
        span: "md:col-span-1 md:row-span-1",
        desc: "Be your true self."
    },
    {
        title: "Life Transitions",
        icon: CloudRain,
        image: "/images/how_it_works_lux.png",
        color: "text-cyan-400",
        span: "md:col-span-1 md:row-span-1",
        desc: "Navigating major changes."
    },
    {
        title: "Silent Trauma",
        icon: ShieldAlert,
        image: "/images/silent_trauma.png",
        color: "text-emerald-400",
        span: "md:col-span-1 md:row-span-1",
        desc: "Safe, unheard space."
    },
];

export default function WhyPeopleComeHere() {
    return (
        <section className="py-24 bg-[#020305] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/* Header - Simple & Clean Design */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <Sparkles className="w-3 h-3 text-luxury-gold" />
                        <span className="text-[10px] font-black text-white/60 tracking-[0.3em] uppercase">The Vault of Emotions</span>
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-display tracking-tight">
                        Whatever Weighs <span className="text-luxury-gold italic">Your Heart Down.</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
                        In a world that never stops moving, we provide the luxury of being truly heard. Your private sanctuary for everything you can't say out loud.
                    </p>
                </div>

                {/* Enhanced Mosaic Grid - Linked to Pricing */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto auto-rows-[280px]">
                    {feelings.map((feeling, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05, duration: 0.8 }}
                            className={clsx(
                                "group relative rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-luxury-gold/50 transition-all duration-700 shadow-2xl",
                                feeling.span
                            )}
                        >
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
                                className="block w-full h-full relative cursor-pointer"
                            >
                                {/* Clearer Background Image */}
                                {feeling.image && (
                                    <>
                                        <Image
                                            src={feeling.image}
                                            alt={feeling.title}
                                            fill
                                            className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-110 transition-all duration-[4s] ease-out brightness-75 group-hover:brightness-90"
                                        />
                                        {/* Progressive Shadow for Text Readability */}
                                        <div className="absolute inset-0 bg-linear-to-t from-[#020305] via-[#020305]/40 to-transparent opacity-90" />
                                    </>
                                )}

                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10">
                                    <div className="flex justify-between items-start">
                                        <div className="w-12 h-12 rounded-2xl bg-[#020305]/60 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:bg-luxury-gold group-hover:rotate-6 transition-all duration-700 shadow-xl">
                                            <feeling.icon className={clsx("w-6 h-6", feeling.color, "group-hover:text-dark transition-colors")} />
                                        </div>
                                        <span className="text-[10px] font-black text-white/40 tracking-widest bg-[#020305]/40 px-3 py-1 rounded-full backdrop-blur-sm">ACT 0{idx + 1}</span>
                                    </div>

                                    <div>
                                        <h3 className="text-xl md:text-2xl font-black text-white uppercase font-display leading-[0.9] tracking-tighter mb-3 transition-colors group-hover:text-luxury-gold">
                                            {feeling.title}
                                        </h3>
                                        <p className="text-[11px] text-white/60 font-medium uppercase tracking-[0.1em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                            {feeling.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-luxury-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            </a>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 flex flex-col items-center">
                    <p className="text-slate-600 text-[10px] font-black uppercase tracking-[1em] mb-12">Private • Elite • Human</p>
                    <div className="h-px w-32 bg-linear-to-r from-transparent via-luxury-gold/30 to-transparent mx-auto" />
                </div>
            </div>
        </section>
    );
}

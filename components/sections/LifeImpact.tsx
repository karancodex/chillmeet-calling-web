"use client";

import { motion } from "framer-motion";
import { Star, Quote, Sparkles, UserCheck } from "lucide-react";
import clsx from "clsx";

const impacts = [
    {
        name: "Anonymous User",
        situation: "Office Burnout",
        quote: "I was on the verge of quitting. The pressure was suffocating. Having someone to talk to without judgment changed everything. I found my breath again.",
        color: "group-hover:text-blue-400",
        bg: "group-hover:bg-blue-400/5"
    },
    {
        name: "Anonymous User",
        situation: "Heartbreak",
        quote: "After my breakup, I felt invisible. This gave me a private space to cry, vent, and rebuild my confidence. It's more than a call; it's healing.",
        color: "group-hover:text-red-400",
        bg: "group-hover:bg-red-400/5"
    },
    {
        name: "Anonymous User",
        situation: "Midnight Anxiety",
        quote: "Midnight is the hardest time. Knowing there's an elite listener ready to hear my thoughts makes the darkness feel much less overwhelming.",
        color: "group-hover:text-purple-400",
        bg: "group-hover:bg-purple-400/5"
    },
    {
        name: "Anonymous User",
        situation: "Life Transitions",
        quote: "I was lost between major life decisions. Talking it out with a neutral, empathetic guide helped me find the clarity I was missing.",
        color: "group-hover:text-emerald-400",
        bg: "group-hover:bg-emerald-400/5"
    }
];

export default function LifeImpact() {
    return (
        <section className="py-24 bg-[#020305] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/* Header - Synced Styling */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <Sparkles className="w-3 h-3 text-luxury-gold" />
                        <span className="text-[10px] font-black text-white/60 tracking-[0.3em] uppercase">The Sound of Relief</span>
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-display tracking-tight">
                        Real Stories. <span className="text-luxury-gold italic">Pure Transformation.</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
                        Real voices of those who found their peace. Experience the human connection that turns struggle into strength.
                    </p>
                </div>

                {/* Cool, Small, Clean Cards - 4 Column Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {impacts.map((impact, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="group relative h-full"
                        >
                            <div className="h-full p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-luxury-gold/30 hover:bg-white/[0.04] transition-all duration-500 flex flex-col items-start overflow-hidden relative">

                                {/* Subtle Background Quote Mark */}
                                <Quote className="absolute -top-4 -right-4 w-24 h-24 text-white/[0.02] group-hover:text-luxury-gold/[0.05] transition-colors duration-700" />

                                <div className={clsx(
                                    "w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-8 transition-all duration-500",
                                    impact.bg
                                )}>
                                    <Quote className={clsx("w-6 h-6 text-white/20 transition-colors", impact.color)} />
                                </div>

                                <p className="text-[15px] text-slate-300 font-medium leading-relaxed mb-10 italic group-hover:text-white transition-colors relative z-10">
                                    "{impact.quote}"
                                </p>

                                <div className="mt-auto w-full pt-8 border-t border-white/5 flex items-center justify-between">
                                    <div>
                                        <p className="text-[11px] font-black text-white uppercase tracking-widest mb-1">{impact.name}</p>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-1 h-1 rounded-full bg-luxury-gold" />
                                            <p className="text-luxury-gold text-[9px] font-black tracking-widest uppercase">{impact.situation}</p>
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-luxury-gold/10 transition-colors">
                                        <UserCheck className="w-4 h-4 text-white/10 group-hover:text-luxury-gold transition-colors" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <div className="flex justify-center items-center gap-3 mb-8">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 text-luxury-gold fill-luxury-gold" />)}
                    </div>
                    <p className="text-slate-600 text-[10px] font-black uppercase tracking-[1em]">Verified Humanity • Anonymous Care</p>
                </motion.div>
            </div>
        </section>
    );
}

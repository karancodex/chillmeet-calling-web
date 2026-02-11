"use client";

import { motion } from "framer-motion";
import { HeartCrack, Moon, UserMinus, Zap, HelpCircle, Ghost, CloudRain, ShieldAlert } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

const feelings = [
    { title: "Breakup", icon: HeartCrack, color: "text-red-400", glow: "from-red-500/20", size: "large", shape: "organic-shape-1" },
    { title: "Loneliness", icon: UserMinus, color: "text-blue-400", glow: "from-blue-500/20", size: "small", shape: "organic-shape-2" },
    { title: "Overthinking", icon: HelpCircle, color: "text-amber-400", glow: "from-amber-500/20", size: "medium", shape: "organic-shape-1" },
    { title: "Stress", icon: Zap, color: "text-orange-400", glow: "from-orange-500/20", size: "small", shape: "organic-shape-2" },
    { title: "Anxiety", icon: Moon, color: "text-purple-400", glow: "from-purple-500/20", size: "medium", shape: "organic-shape-1" },
    { title: "Depression", icon: CloudRain, color: "text-cyan-400", glow: "from-cyan-500/20", size: "large", shape: "organic-shape-2" },
    { title: "Trauma", icon: ShieldAlert, color: "text-emerald-400", glow: "from-emerald-500/20", size: "small", shape: "organic-shape-1" },
    { title: "Social Fear", icon: Ghost, color: "text-pink-400", glow: "from-pink-500/20", size: "medium", shape: "organic-shape-2" },
];

export default function WhyPeopleComeHere() {
    return (
        <section className="py-32 bg-dark relative overflow-hidden">
            {/* Ambient Glows */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/5 blur-[160px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-secondary/5 blur-[160px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative">
                <motion.div
                    className="text-center mb-24"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-premium text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                        <span>Safe Space</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 text-white tracking-[-0.04em] font-display leading-[0.95]">
                        Support For <br />
                        <span className="text-gradient-premium">Every Emotion.</span>
                    </h2>
                    <p className="text-slate-500 text-sm font-medium max-w-xl mx-auto leading-relaxed">
                        A constellation of compassion for when life feels heavy. <br /> Our listeners are here to walk with you through any darkness.
                    </p>
                </motion.div>

                {/* Anti-Boxy Fluid Layout */}
                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                    {feelings.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: idx * 0.1,
                                duration: 1,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className={clsx(
                                "group relative overflow-hidden transition-all duration-700 hover:scale-105",
                                card.shape,
                                card.size === 'large' ? 'w-[320px] h-[320px]' :
                                    card.size === 'medium' ? 'w-[260px] h-[260px]' : 'w-[200px] h-[200px]',
                                "bg-slate-900/40 backdrop-blur-3xl border border-white/5 flex items-center justify-center text-center p-8",
                                "floating-slow"
                            )}
                            style={{
                                animationDelay: `${idx * 1.5}s`,
                                transform: `rotate(${idx % 2 === 0 ? '2deg' : '-2deg'})`
                            }}
                        >
                            <div className={clsx(
                                "absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-700",
                                card.glow, "to-transparent"
                            )} />

                            <div className="relative z-10 flex flex-col items-center">
                                <card.icon className={clsx("w-10 h-10 mb-4 transition-all duration-700 group-hover:scale-125 group-hover:rotate-12", card.color)} />
                                <h3 className="text-xl font-black text-white/90 font-display tracking-tight group-hover:text-white transition-colors">
                                    {card.title}
                                </h3>
                                <div className="h-0.5 w-0 bg-primary group-hover:w-8 mt-4 transition-all duration-500" />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-4 right-4 w-12 h-12 bg-white/2 rounded-full blur-xl group-hover:bg-primary/20 transition-all duration-700" />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-32 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="h-[2px] w-24 bg-linear-to-r from-transparent via-slate-800 to-transparent mx-auto mb-10" />
                    <p className="text-slate-600 text-[9px] font-black uppercase tracking-[0.6em]">Professional. Private. Empathetic.</p>
                </motion.div>
            </div>
        </section>
    );
}

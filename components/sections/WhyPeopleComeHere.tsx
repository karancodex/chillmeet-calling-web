"use client";

import { motion } from "framer-motion";
import { HeartCrack, Moon, UserMinus, Zap, HelpCircle, Ghost, CloudRain, ShieldAlert } from "lucide-react";
import Image from "next/image";

const feelings = [
    { title: "Breakup", icon: HeartCrack, color: "text-red-400", glow: "shadow-red-500/20", desc: "Healing one heart at a time." },
    { title: "Loneliness", icon: UserMinus, color: "text-blue-400", glow: "shadow-blue-500/20", desc: "You're never truly alone." },
    { title: "Overthinking", icon: HelpCircle, color: "text-amber-400", glow: "shadow-amber-500/20", desc: "Quiet the noise within." },
    { title: "Personal Stress", icon: Zap, color: "text-orange-400", glow: "shadow-orange-500/20", desc: "Let the pressure melt away." },
    { title: "Night Anxiety", icon: Moon, color: "text-purple-400", glow: "shadow-purple-500/20", desc: "Find peace in the dark." },
    { title: "Depression", icon: CloudRain, color: "text-cyan-400", glow: "shadow-cyan-500/20", desc: "Sunlight is coming back." },
    { title: "Trauma", icon: ShieldAlert, color: "text-emerald-400", glow: "shadow-emerald-500/20", desc: "A safe space to recover." },
    { title: "Social Fear", icon: Ghost, color: "text-pink-400", glow: "shadow-pink-500/20", desc: "Face the world with Sukun." },
];

export default function WhyPeopleComeHere() {
    return (
        <section className="py-24 bg-dark relative overflow-hidden">
            {/* Background Image Layer */}
            <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
                <Image
                    src="/images/hero_banner_premium.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-5"
                />
            </div>

            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-white tracking-tight leading-tight">
                        Support For <br />
                        <span className="text-gradient">Every Feeling.</span>
                    </h2>
                    <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.4em] max-w-xl mx-auto">Listeners who understand exactly what you're going through.</p>
                </motion.div>

                {/* Interactive Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {feelings.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className={`glass-card group relative p-10 border border-white/5 transition-all duration-500 hover:border-primary/20 overflow-hidden`}
                        >
                            {/* Background Pulse Glow */}
                            <div className={`absolute -right-4 -top-4 w-24 h-24 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-${card.color.split('-')[1]}-500/20`} />

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className={`w-16 h-16 mb-8 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500 shadow-xl ${card.glow}`}>
                                    <card.icon className={`w-7 h-7 ${card.color} group-hover:scale-110 transition-transform`} />
                                </div>

                                <h3 className="text-lg font-black text-white mb-3 tracking-tight group-hover:text-primary transition-colors">
                                    {card.title}
                                </h3>

                                <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest leading-relaxed">
                                    {card.desc}
                                </p>

                                <motion.div
                                    className="h-1 w-0 bg-primary mt-8 rounded-full"
                                    whileHover={{ width: "2rem" }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute bottom-0 right-0 w-8 h-8 opacity-[0.02] group-hover:opacity-[0.05]">
                                <card.icon className="w-full h-full" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em]">And many more stories of healing...</p>
                </motion.div>
            </div>
        </section>
    );
}

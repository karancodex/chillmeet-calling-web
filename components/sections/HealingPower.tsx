"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function HealingPower() {
    return (
        <section className="py-24 relative overflow-hidden bg-dark">
            {/* Premium Background Banner */}
            <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
                <Image
                    src="/images/hero_banner_premium.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-5"
                />
            </div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    <motion.div
                        className="w-full md:w-1/2 relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative aspect-square w-full max-w-[400px] mx-auto group">
                            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
                            <Image
                                src="/images/feature_glass_heart_1770535568741.png"
                                alt="Healing Heart"
                                fill
                                className="object-contain drop-shadow-2xl animate-float-premium"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                            <Sparkles className="w-4 h-4" />
                            <span>Healing Conversations</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tighter">
                            Mending Hearts, <br />
                            <span className="text-gradient">One Call At A Time.</span>
                        </h2>

                        <p className="text-base text-white/40 mb-8 leading-relaxed font-bold">
                            Sometimes, the heaviest burdens are the ones we carry in silence. Release that weight. Whether you're heartbroken or anxious, a kind voice is waiting.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="glass-card p-6 border border-white/5">
                                <h4 className="text-2xl font-black text-white">10K+</h4>
                                <p className="text-[10px] text-white/40 font-black uppercase tracking-widest">Hearts Healed</p>
                            </div>
                            <div className="glass-card p-6 border border-white/5">
                                <h4 className="text-2xl font-black text-white">4.9/5</h4>
                                <p className="text-[10px] text-white/40 font-black uppercase tracking-widest">Trust Rating</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

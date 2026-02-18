"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function HealingPower() {
    return (
        <section className="py-32 relative overflow-hidden bg-dark">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[130px] rounded-full floating-slow" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[130px] rounded-full floating-slow" style={{ animationDelay: '-5s' }} />
            </div>

            <div className="container mx-auto px-6 relative">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    {/* Visual Side */}
                    <motion.div
                        className="w-full lg:w-1/2 relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="relative aspect-square w-full max-w-[500px] mx-auto">
                            {/* Organic Backdrop */}
                            <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent blur-3xl organic-shape-1 scale-110 floating-slow" />

                            <div className="relative h-full w-full rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl">
                                <Image
                                    src="/images/meditation_abstract_3d_1770798074793.png"
                                    alt="Healing Energy"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-dark/80 via-transparent to-transparent" />
                            </div>


                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-premium text-primary text-[9px] font-black uppercase tracking-[0.2em] mb-8">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Transformative Support</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-[0.95] tracking-[-0.04em] font-display">
                            Mending Hearts, <br />
                            <span className="text-gradient-premium">One Breath At A Time.</span>
                        </h2>

                        <p className="text-sm text-slate-400 mb-10 leading-relaxed font-medium max-w-lg">
                            Sometimes, the heaviest burdens are the ones we carry in silence. Release that weight. Whether you're navigating heartbreak, anxiety, or transition, a kind voice is waiting to bridge the distance.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                </div>
                                <p className="text-xs text-white/60 font-bold leading-snug">Private Anonymous Voice Support.</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                                    <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                                </div>
                                <p className="text-xs text-white/60 font-bold leading-snug">Empathetic Active Listeners.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

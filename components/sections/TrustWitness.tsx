"use client";

import { motion } from "framer-motion";
import { Phone, CheckCircle2, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";

export default function TrustWitness() {
    return (
        <section className="py-24 relative overflow-hidden bg-dark">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Visual Mockup Section - Simulating "Calling Video" */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Animated Glows */}
                        <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full animate-pulse" />

                        <div className="glass-card relative aspect-[9/16] max-w-[320px] mx-auto overflow-hidden border-white/10 shadow-2xl rounded-[3rem]">
                            {/* Inner Calling Simulation */}
                            <div className="absolute inset-0 bg-dark/80 z-10" />

                            {/* Listening Person (The one I generated) */}
                            <Image
                                src="/images/trusted_listener_2_1770542117703.png"
                                alt="Trusted Listener"
                                fill
                                className="object-cover opacity-60 transition-transform duration-[10s] ease-linear hover:scale-110"
                            />

                            {/* Call UI Layer */}
                            <div className="absolute inset-0 z-20 flex flex-col items-center justify-between py-16 px-6">
                                <div className="text-center">
                                    <div className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-500 text-[10px] font-black uppercase tracking-widest mb-4">
                                        Live Connection
                                    </div>
                                    <h3 className="text-2xl font-black text-white">Zenith</h3>
                                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Active Listener</p>
                                </div>

                                <div className="flex flex-col items-center gap-8">
                                    {/* Visual Waveform Simulation */}
                                    <div className="flex items-end gap-1.5 h-12">
                                        {[...Array(12)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="w-1.5 bg-primary/60 rounded-full"
                                                animate={{
                                                    height: [8, Math.random() * 40 + 10, 8]
                                                }}
                                                transition={{
                                                    duration: 0.6,
                                                    repeat: Infinity,
                                                    delay: i * 0.05,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                        ))}
                                    </div>

                                    <div className="flex gap-8">
                                        <div className="w-14 h-14 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30">
                                            <Phone className="w-6 h-6 text-red-500 rotate-[135deg]" />
                                        </div>
                                        <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/20 animate-bounce">
                                            <Phone className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Trust Labels */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[10%] -right-4 md:-right-10 glass-card p-4 border-white/10 flex items-center gap-3 backdrop-blur-3xl"
                        >
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                                <CheckCircle2 className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-black text-white uppercase tracking-widest leading-none">Vetted Listener</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-[20%] -left-4 md:-left-10 glass-card p-4 border-white/10 flex items-center gap-3 backdrop-blur-3xl"
                        >
                            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white">
                                <ShieldCheck className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-black text-white uppercase tracking-widest leading-none">End-to-End Private</span>
                        </motion.div>
                    </motion.div>

                    {/* Content Section */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
                                Trusted By <br />
                                <span className="text-gradient">Thousands Every Night.</span>
                            </h2>
                            <p className="text-white/40 text-base font-bold mb-10 leading-relaxed">
                                Behind every call is a real human, vetted for empathy and committed to your peace of mind. We don't just provide a service; we provide a safe harbor.
                            </p>

                            <div className="space-y-6 mb-12">
                                {[
                                    { icon: Users, label: "10,000+ Trust Interactions", desc: "Our community continues to grow daily." },
                                    { icon: ShieldCheck, label: "Strict Safety Vetting", desc: "Every listener goes through a rigorous empathy check." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 shrink-0">
                                            <item.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-black text-sm uppercase tracking-tight">{item.label}</h4>
                                            <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className="px-10 py-5 bg-white text-dark font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl shadow-white/5">
                                Learn More About Our Listeners
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Heart, Users, Shield, Target } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ListnerZoneLogo from "@/components/ui/ListnerZoneLogo";

export default function AboutPage() {
    return (
        <main className="bg-dark min-h-screen pt-32">
            <Navbar />

            <section className="container mx-auto px-6 pb-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter font-display">
                        The Story Of <span className="text-gradient-premium">ListnerZone.</span>
                    </h1>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.4em] max-w-2xl mx-auto">
                        A digital sanctuary for souls in search of silence and simple human connection.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-xl md:text-3xl font-black text-white mb-8 uppercase tracking-tight font-display">Our Mission</h2>
                        <p className="text-slate-400 text-sm font-bold leading-relaxed mb-8">
                            ListnerZone was born out of a simple observation: in an increasingly connected world, true, unfiltered human connection is becoming a rarity. We are here to provide a sanctuary of empathetic listening, separate from clinical therapy.
                        </p>
                        <p className="text-slate-500 text-[11px] font-black uppercase tracking-widest leading-loose">
                            To create a safe, human-centric space where anyone—regardless of their story—can find a companion to listen, a heart to understand, and a voice to comfort.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card aspect-square relative overflow-hidden flex items-center justify-center p-12 border-white/5 rounded-[3rem]"
                    >
                        <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full animate-pulse" />
                        <div className="relative w-48 h-48 opacity-40 hover:opacity-100 transition-opacity duration-700">
                            <ListnerZoneLogo className="w-full h-full" color="#7C6CFF" />
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-32">
                    {[
                        { icon: Target, title: "Purpose", desc: "Finding peace in silence." },
                        { icon: Users, title: "Community", desc: "Growing daily." },
                        { icon: Shield, title: "Security", desc: "Secure Sanctuary." },
                        { icon: Heart, title: "Empathy", desc: "Vetted active listeners." }
                    ].map((item, idx) => (
                        <div key={idx} className="glass-card p-10 border-white/5 text-center">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <item.icon className="w-5 h-5 text-primary" />
                            </div>
                            <h4 className="text-white font-black text-sm mb-2 uppercase tracking-tight">{item.title}</h4>
                            <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}

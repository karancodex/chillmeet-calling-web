"use client";

import { motion } from "framer-motion";
import ListnerZoneLogo from "../ui/ListnerZoneLogo";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
    return (
        <section className="py-24 relative overflow-hidden bg-[#020305]">
            {/* Elegant Background - Unified with Theme */}
            <div className="absolute inset-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <motion.div
                    className="relative bg-white/[0.02] border border-white/5 rounded-[3rem] md:rounded-[4rem] p-10 md:p-24 text-center overflow-hidden group shadow-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    {/* Interior Glow Effect */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-linear-to-r from-transparent via-luxury-gold/50 to-transparent opacity-30" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-luxury-gold/5 blur-[100px] rounded-full group-hover:bg-luxury-gold/10 transition-colors duration-1000" />

                    {/* Tag Line */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
                    >
                        <Sparkles className="w-3 h-3 text-luxury-gold" />
                        <span className="text-[10px] font-black text-white/60 tracking-[0.3em] uppercase">Begin Your Shift</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-6xl font-black mb-8 text-white leading-none tracking-tight font-display">
                        Your Journey To Peace <br />
                        <span className="text-luxury-gold italic">Starts With A Hello.</span>
                    </h2>

                    <p className="text-sm md:text-base text-slate-400 mb-12 max-w-xl mx-auto font-medium leading-relaxed opacity-80">
                        Don't carry the weight alone. In our digital sanctuary, every whisper is safe and every heart is heard. Your first breath of relief is just a click away.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
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
                            className="px-12 py-5 bg-white text-dark font-black uppercase text-[10px] tracking-widest rounded-full hover:bg-luxury-gold hover:text-white hover:scale-105 transition-all shadow-2xl flex items-center gap-3 group/btn cursor-pointer"
                        >
                            Start Your Conversation
                            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </a>
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-slate-600 text-[9px] font-black uppercase tracking-[1em] opacity-40 italic">Private • Human • Absolute Presence</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

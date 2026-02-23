"use client";

import { motion } from "framer-motion";
import { BrainCircuit, ShieldCheck, HeartHandshake, Radio, Zap, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
    {
        icon: BrainCircuit,
        title: "Match Your Mood",
        desc: "Tell us how you feel. We'll find a empathetic listener who perfectly resonates with your current energy.",
        color: "text-luxury-gold",
        bg: "bg-luxury-gold/5"
    },
    {
        icon: ShieldCheck,
        title: "Stay Anonymous",
        desc: "Start an anonymous conversation without registration. Your identity remains 100% private and protected.",
        color: "text-blue-400",
        bg: "bg-blue-400/5"
    },
    {
        icon: HeartHandshake,
        title: "Human Presence",
        desc: "Experience a private listening session with trained adults who listen with empathy and deep understanding.",
        color: "text-purple-400",
        bg: "bg-purple-400/5"
    },
    {
        icon: Zap,
        title: "Instant Relief",
        desc: "Release your stress and talk without judgement to find clarity in just one session. Feel seen immediately.",
        color: "text-emerald-400",
        bg: "bg-emerald-400/5"
    }
];

export default function HowItWorks() {
    return (
        <section className="py-24 bg-[#020305] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/* Simple & Clean Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <Sparkles className="w-3 h-3 text-luxury-gold" />
                        <span className="text-[10px] font-black text-white/60 tracking-[0.3em] uppercase">Simple 5-Step Process</span>
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-display tracking-tight">
                        The Path To <span className="text-luxury-gold italic">Peace Of Mind.</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
                        We've made it effortless to find the support you need. Just follow these steps to start your healing journey.
                    </p>
                </div>

                {/* Clean Horizontal/Vertical Journey */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 px-4 md:px-0">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative group h-full"
                        >
                            <div className="h-full p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-luxury-gold/30 hover:bg-white/[0.05] transition-all duration-500 flex flex-col items-center text-center">
                                {/* Number Circle */}
                                <div className="absolute top-6 right-8 text-4xl font-black text-white/[0.03] group-hover:text-luxury-gold/10 transition-colors">
                                    0{idx + 1}
                                </div>

                                <div className={`w-16 h-16 rounded-2xl ${step.bg} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                                    <step.icon className={`w-8 h-8 ${step.color}`} />
                                </div>

                                <h3 className="text-lg font-black text-white mb-4 uppercase tracking-tight group-hover:text-luxury-gold transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                    {step.desc}
                                </p>
                            </div>

                            {/* Connector Line for Desktop */}
                            {idx < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-white/10 z-0" />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Final Simple CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 text-center"
                >
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
                        className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-full font-black uppercase tracking-widest text-[11px] transition-all duration-500 hover:scale-105 shadow-xl"
                    >
                        Start Your First Call
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <p className="mt-6 text-[10px] font-black text-white/30 tracking-[0.4em] uppercase">No Sign-Up Required • 100% Private</p>
                </motion.div>
            </div>
        </section>
    );
}

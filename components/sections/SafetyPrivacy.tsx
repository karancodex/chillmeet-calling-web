"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, UserX, EyeOff, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

const attributes = [
    {
        icon: UserX,
        title: "Ghost Identity",
        desc: "Absolute anonymity. No registration, no traces.",
        color: "text-blue-400",
        bg: "bg-blue-400/5"
    },
    {
        icon: Lock,
        title: "Iron Encryption",
        desc: "End-to-end secure tunnels for your voice.",
        color: "bg-luxury-gold/10",
        iconColor: "text-luxury-gold"
    },
    {
        icon: EyeOff,
        title: "Dark Sanctuary",
        desc: "A judgment-free zone for your rawest truths.",
        color: "text-purple-400",
        bg: "bg-purple-400/5"
    }
];

export default function SafetyPrivacy() {
    return (
        <section className="py-24 bg-[#020305] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {/* Simple & Clean Header - Synced Styling */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <ShieldCheck className="w-3 h-3 text-luxury-gold" />
                        <span className="text-[10px] font-black text-white/60 tracking-[0.3em] uppercase">The Vault Policy</span>
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-display tracking-tight text-center leading-none">
                        Your Truth, <span className="text-luxury-gold italic">Fully Enclosed.</span>
                    </h2>
                </div>

                {/* Compact Modern Security Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto bg-white/[0.03] border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center relative group"
                >
                    {/* Security Visual (Left) */}
                    <div className="lg:w-[45%] relative h-[300px] lg:h-[450px] bg-dark flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] opacity-50" />
                        <motion.div
                            animate={{
                                y: [10, -10, 10],
                                rotate: [0, 2, 0]
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-10 w-48 h-48 lg:w-64 lg:h-64"
                        >
                            <Image
                                src="/images/privacy_shield_3d_1770535586080.png"
                                alt="Security Shield"
                                fill
                                className="object-contain drop-shadow-[0_0_50px_rgba(212,175,55,0.2)] brightness-110"
                            />
                        </motion.div>

                        {/* Interactive HUD Elements */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full h-px bg-linear-to-r from-transparent via-luxury-gold/20 to-transparent animate-scan" />
                        </div>
                    </div>

                    {/* Security Details (Right) */}
                    <div className="lg:w-[55%] p-8 lg:p-14 flex flex-col justify-center relative">
                        <div className="absolute inset-0 bg-white/[0.01] rounded-[2rem] m-6 -z-10" />

                        <div className="space-y-6 mb-10">
                            {attributes.map((attr, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-6 group/item"
                                >
                                    <div className={clsx(
                                        "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-white/5 transition-all duration-500",
                                        attr.bg || "bg-white/5",
                                        "group-hover/item:bg-luxury-gold group-hover/item:rotate-6"
                                    )}>
                                        <attr.icon className={clsx("w-6 h-6 transition-colors", attr.iconColor || attr.color, "group-hover/item:text-dark")} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-white font-black text-sm uppercase tracking-wider mb-1 group-hover/item:text-luxury-gold transition-colors">{attr.title}</h4>
                                        <p className="text-slate-500 text-xs font-medium leading-relaxed">{attr.desc}</p>
                                    </div>
                                    <CheckCircle2 className="w-4 h-4 text-luxury-gold/0 group-hover/item:text-luxury-gold transition-all" />
                                </motion.div>
                            ))}
                        </div>

                        {/* Integrated Disclaimer - Elegant & Trust-Building */}
                        <div className="p-6 rounded-2xl bg-red-500/[0.03] border border-red-500/10 mb-8 relative group/desc">
                            <div className="absolute top-0 right-0 w-12 h-12 bg-red-500/5 blur-xl group-hover/desc:bg-red-500/10 transition-colors" />
                            <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest leading-relaxed">
                                <span className="text-red-500/60 mr-2">DISCLAIMER /</span>
                                Sessions provide peer support, not medical advice. Post-call actions are the sole responsibility of the visitor.
                            </p>
                        </div>

                        <div className="flex justify-center lg:justify-start gap-4 text-[8px] font-black text-white/20 uppercase tracking-[0.3em]">
                            <span className="flex items-center gap-1.5"><ShieldCheck className="w-2.5 h-2.5" /> Ghost Encrypted</span>
                            <span>•</span>
                            <span>No Session Logs</span>
                        </div>
                    </div>
                </motion.div>

                <div className="mt-16 text-center">
                    <p className="text-slate-600 text-[8px] font-black uppercase tracking-[1em] opacity-40">Your Privacy is our existence.</p>
                </div>
            </div>
        </section>
    );
}

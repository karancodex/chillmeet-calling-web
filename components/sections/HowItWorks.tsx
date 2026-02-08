"use client";

import { motion } from "framer-motion";
import { MessageSquareText, Timer, Radio } from "lucide-react";
import Image from "next/image";

const steps = [
    {
        icon: MessageSquareText,
        title: "Share Your Vibe",
        desc: "Pick what's weighing you down. We'll match you with the right soul.",
        color: "text-blue-400",
        glow: "bg-blue-500/10"
    },
    {
        icon: Timer,
        title: "Choose Your Pace",
        desc: "Immediate connection or a scheduled deep dive. You decide.",
        color: "text-purple-400",
        glow: "bg-purple-500/10"
    },
    {
        icon: Radio,
        title: "Go Live Live",
        desc: "Bridge the distance with a high-fidelity, anonymous voice stream.",
        color: "text-accent",
        glow: "bg-accent/10"
    }
];

export default function HowItWorks() {
    return (
        <section className="py-24 relative overflow-hidden bg-dark">
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
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-white tracking-tight leading-tight">
                        The Path To <span className="text-gradient">Sukun.</span>
                    </h2>
                    <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.4em] max-w-xl mx-auto">Three simple steps to speak your truth anonymously.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="glass-card p-12 flex flex-col items-center text-center relative group overflow-hidden border border-white/5"
                        >
                            {/* Step Number Backdrop */}
                            <div className="absolute -top-6 -right-6 text-[120px] font-black italic text-white/[0.02] group-hover:text-primary/[0.05] transition-colors leading-none pointer-events-none">
                                {index + 1}
                            </div>

                            <div className={`w-20 h-20 rounded-3xl ${step.glow} flex items-center justify-center border border-white/5 mb-10 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-700`}>
                                <step.icon className={`w-10 h-10 ${step.color}`} />
                            </div>

                            <h3 className="text-xl font-black mb-6 text-white tracking-tight group-hover:text-primary transition-colors">{step.title}</h3>
                            <p className="text-white/40 leading-relaxed text-sm font-bold uppercase tracking-wide">
                                {step.desc}
                            </p>

                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

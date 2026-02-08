"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, UserX, EyeOff } from "lucide-react";
import Image from "next/image";

const features = [
    {
        icon: UserX,
        title: "100% Anonymous",
    },
    {
        icon: Lock,
        title: "Private & Secure",
    },
    {
        icon: EyeOff,
        title: "No Judgment",
    }
];

export default function SafetyPrivacy() {
    return (
        <section className="py-24 relative overflow-hidden bg-dark">
            {/* Premium Background Banner Overlay */}
            <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden text-white">
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
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Absolute Privacy</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tighter">
                            Your Secrets Are <br />
                            <span className="text-gradient">Safe With Us.</span>
                        </h2>
                        <p className="text-base text-white/40 mb-10 leading-relaxed font-bold">
                            Safety is our priority. Your identity remains hidden, and your conversations are encrypted. Talk freely without any fear.
                        </p>

                        <div className="space-y-4">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-4 glass-card p-4 border border-white/5"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <feature.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-sm font-black text-white/80 uppercase tracking-tight">{feature.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="w-full md:w-1/2 relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative aspect-square w-full max-w-[400px] mx-auto group">
                            <div className="absolute inset-0 bg-blue-deep/10 blur-[100px] rounded-full animate-pulse" />
                            <Image
                                src="/images/privacy_shield_3d_1770535586080.png"
                                alt="Privacy Shield"
                                fill
                                className="object-contain drop-shadow-2xl animate-float-premium"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

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
                    sizes="100vw"
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

                        <h2 className="text-3xl md:text-6xl font-black text-white mb-8 md:mb-10 leading-[0.85] tracking-[-0.05em] font-display">
                            Your Secrets Are <br />
                            <span className="text-gradient-premium">Safe With Us.</span>
                        </h2>
                        <p className="text-base text-slate-400 mb-6 leading-relaxed font-medium">
                            Safety is our foundation. Your identity remains hidden, and your sessions are ghost-encrypted. Speak your heart without a trace.
                        </p>
                        <p className="text-xs text-red-500/70 font-black uppercase tracking-widest mb-14 border-l-2 border-red-500/30 pl-4 py-1">
                            Disclaimer: Any actions taken post-call are your sole responsibility. ListnerZone provides peer support, not professional medical advice.
                        </p>

                        <div className="space-y-6">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                                    className="flex items-center gap-4 md:gap-6 bg-white/5 backdrop-blur-3xl p-4 md:p-6 rounded-full border border-white/10 hover:border-primary/30 transition-all duration-700 group shadow-lg"
                                >
                                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:rotate-12 transition-all duration-700">
                                        <feature.icon className="w-5 h-5 md:w-7 md:h-7 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <span className="text-base font-black text-white/90 tracking-tight font-display">{feature.title}</span>
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
                                sizes="(max-width: 768px) 100vw, 400px"
                                className="object-contain drop-shadow-2xl animate-float-premium"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

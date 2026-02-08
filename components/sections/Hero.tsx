"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mic, Clock, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRef } from "react";

const FloatingShapes = dynamic(() => import("../3d/FloatingShapes"), { ssr: false });

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden pt-32 pb-20 bg-dark">
            {/* Base Dark Background Layer */}
            <Image
                src="/images/hero_banner_premium_v2.png"
                alt="Sukun 3D Sanctuary"
                fill
                className="object-cover opacity-60 scale-105"
                style={{ objectPosition: 'center 40%' }}
                priority
            />
            <div className="absolute inset-0 bg-dark -z-[70]" />

            {/* Premium 3D Cinematic Banner Image - v2 'Sukun' */}
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }}
                className="absolute inset-0 w-full h-full -z-50"
            >
                <Image
                    src="/images/hero_banner_premium_v2.png"
                    alt="Sukun 3D Sanctuary"
                    fill
                    className="object-cover opacity-60 scale-105"
                    style={{ objectPosition: 'center 40%' }}
                    priority
                />
                {/* Dark Vignette to make text pop */}
                <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/20 to-dark" />
            </motion.div>

            {/* Dynamic Animated Blobs (Burgundy & Blue) */}
            <div className="absolute inset-0 w-full h-full -z-40 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-burgundy/20 blur-[120px]"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 100, 0],
                        scale: [1, 1.3, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[10%] -right-[5%] w-[45%] h-[45%] rounded-full bg-blue-deep/20 blur-[150px]"
                />

                {/* Subtle Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container mx-auto px-6 z-10 text-center relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-2xl"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-black text-white/60 tracking-[0.3em] uppercase">Private • Secure • Empathetic</span>
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-7xl font-black mb-6 tracking-tighter text-white leading-[1.1]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Your Journey To <br />
                        <span className="text-gradient">Peace Begins Here.</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-medium leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        A sanctuary where your voice matters. Connect with compassionate listeners who understand your silence.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <a href="tel:6387197293" className="group relative px-10 py-5 bg-gradient-to-r from-primary to-accent rounded-2xl text-white font-black text-lg transition-all shadow-[0_10px_30px_rgba(124,108,255,0.3)] hover:shadow-[0_15px_40px_rgba(124,108,255,0.5)] flex items-center gap-3 transform hover:-translate-y-1 active:scale-95 duration-300">
                            <Mic className="w-6 h-6" />
                            <span>Start Talking</span>
                        </a>

                        <button
                            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-10 py-5 glass-card text-white font-black text-lg rounded-2xl transition-all flex items-center gap-3 border border-white/10 hover:bg-white/10 transform hover:-translate-y-1 active:scale-95 shadow-xl"
                        >
                            <Clock className="w-6 h-6 text-primary" />
                            <span>See How it Works</span>
                        </button>
                    </motion.div>

                    <motion.div
                        className="mt-16 flex items-center justify-center gap-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">140+ Online</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-white/10" />
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">100% Secure</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark to-transparent z-10" />
        </section>
    );
}

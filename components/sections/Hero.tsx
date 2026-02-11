"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Mic, Clock, Sparkles, CloudRain, UserX, Zap, HeartCrack, Heart, AlertTriangle } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import clsx from "clsx";

const FloatingShapes = dynamic(() => import("../3d/FloatingShapes"), { ssr: false });

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const feelings = [
        { text: "Anxious Thoughts", Icon: CloudRain, color: "text-blue-400" },
        { text: "Lonely Nights", Icon: UserX, color: "text-indigo-400" },
        { text: "Stressful Days", Icon: Zap, color: "text-yellow-400" },
        { text: "Heavy Heartbreak", Icon: HeartCrack, color: "text-red-400" },
        { text: "Every Feeling", Icon: Heart, color: "text-pink-400" }
    ];
    const [index, setIndex] = useState(0);
    const CurrentIcon = feelings[index].Icon;

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % feelings.length);
        }, 2500);
        return () => clearInterval(timer);
    }, []);

    return (
        <section ref={ref} className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden pt-24 pb-16 bg-dark">
            {/* Base Dark Background Layer */}
            <Image
                src="/images/sukun_zen_sanctuary_3d_hero_1770800045704.png"
                alt="Sukun 3D Sanctuary"
                fill
                className="object-cover opacity-60 scale-100"
                style={{ objectPosition: 'center center' }}
                priority
            />
            <div className="absolute inset-0 bg-dark/60 -z-[70]" />

            {/* Cinematic Overlay */}
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "15%"]) }}
                className="absolute inset-0 w-full h-full -z-50"
            >
                <Image
                    src="/images/sukun_zen_sanctuary_3d_hero_1770800045704.png"
                    alt="Sukun 3D Sanctuary"
                    fill
                    className="object-cover opacity-60"
                    style={{ objectPosition: 'center center' }}
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-b from-dark/40 via-transparent to-dark" />
            </motion.div>

            {/* Dynamic Animated Blobs */}
            <div className="absolute inset-0 w-full h-full -z-40 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[5%] -left-[5%] w-[35%] h-[35%] rounded-full bg-burgundy/10 blur-[100px]"
                />
                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 60, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[5%] -right-[5%] w-[40%] h-[40%] rounded-full bg-blue-deep/10 blur-[120px]"
                />
            </div>

            <div className="container mx-auto px-6 z-10 text-center relative">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="max-w-4xl mx-auto flex flex-col items-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8 shadow-xl"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
                        <span className="text-[9px] font-black text-white/80 tracking-[0.3em] uppercase">Private • Secure • Empathetic</span>
                    </motion.div>

                    {/* Integrated Safety Notice - Enhanced for Visibility */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="mb-12 px-8 py-6 rounded-4xl bg-red-500/10 border border-red-500/20 max-w-2xl backdrop-blur-3xl shadow-[0_0_50px_rgba(239,68,68,0.1)]"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                            <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 border border-red-500/30">
                                <AlertTriangle className="w-6 h-6 text-red-500" />
                            </div>
                            <div>
                                <h4 className="text-red-500 text-xs font-black uppercase tracking-[0.3em] mb-1">Safety & Legal Disclaimer</h4>
                                <p className="text-[11px] md:text-xs text-white/70 font-bold leading-relaxed">
                                    Sukun is for emotional support only, not crisis or medical services.
                                    <span className="text-white block mt-1 font-black underline decoration-red-500/50">
                                        Any actions taken following a session are the sole responsibility of the user.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-8xl font-black mb-8 tracking-[-0.04em] text-white leading-[0.95] font-display"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Your Journey To <br />
                        <span className="text-gradient-premium">
                            Harmony.
                        </span>
                    </motion.h1>

                    <motion.div
                        className="flex flex-col md:flex-row items-center justify-center gap-3 text-lg md:text-3xl text-white/60 mb-12 font-display font-medium leading-relaxed tracking-tight h-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1 }}
                    >
                        <span>The support for</span>
                        <div className="relative h-12 w-[300px] md:w-[450px] text-center md:text-left overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={feelings[index].text}
                                    initial={{ y: 30, opacity: 0, rotateX: -90 }}
                                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                    exit={{ y: -30, opacity: 0, rotateX: 90 }}
                                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute inset-0 flex items-center justify-center md:justify-start gap-4"
                                >
                                    <CurrentIcon className={clsx("w-8 h-8", feelings[index].color)} />
                                    <span className={clsx("font-black uppercase tracking-[-0.03em]", feelings[index].color)}>
                                        {feelings[index].text}
                                    </span>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex items-center gap-6 px-8 py-4 bg-white/5 backdrop-blur-2xl rounded-full border border-white/5 shadow-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                    >
                        <div className="flex items-center gap-2.5">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </span>
                            <span className="text-[10px] font-black text-white/80 tracking-widest uppercase">Live Now</span>
                        </div>
                        <div className="w-px h-5 bg-white/10" />
                        <span className="text-[10px] font-black text-slate-500 tracking-widest uppercase">Anonymous Support</span>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-dark via-dark/70 to-transparent z-10" />
        </section>
    );
}

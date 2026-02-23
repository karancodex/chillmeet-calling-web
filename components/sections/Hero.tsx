"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, AlertTriangle, ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";

const slides = [
    {
        image: "/images/tr_woman.png",
        tag: "OFFICE BURNOUT • EMOTIONAL RELIEF",
        title: "Someone to Talk to <br /> <span class='text-gradient-premium italic'>When The World Feels Too Loud.</span>",
        desc: "From the weight of a high-pressure office to the pure joy of being truly heard. Vent to someone online without judgement and experience an instant mental shift.",
        cta: "Talk Now",
    },
    {
        image: "/images/tr_man.png",
        tag: "BREAKUP PAIN • LONELINESS",
        title: "Anonymous Conversation <br /> <span class='text-gradient-premium italic'>For Your Heavy Heart.</span>",
        desc: "Don't carry the ache of a breakup alone. Connect with elite listeners for a private listening session. Move from heartbreak to a liberated soul in total privacy.",
        cta: "Find Peace",
    },
    {
        image: "/images/tr_boy.png",
        tag: "ANXIETY • URBAN STRESS",
        title: "Emotional Support Call <br /> <span class='text-gradient-premium italic'>Available 24/7.</span>",
        desc: "Feeling stuck in the chaos? Whether you need late night talk support or a quiet place to think, our online listening service is built to reclaim your calm.",
        cta: "Start Healing",
    }
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative h-[90vh] md:h-[85vh] min-h-[600px] w-full flex items-center overflow-hidden bg-[#020305]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={slides[current].image}
                        alt="Hero Transformation Background"
                        fill
                        className="object-cover md:object-right lg:object-center"
                        priority
                    />
                    {/* Darker left gradient for text readability matching the ref style */}
                    <div className="absolute inset-0 bg-linear-to-b from-[#020305]/60 via-[#020305]/80 to-[#020305] md:bg-linear-to-r md:from-[#020305] md:via-[#020305]/60 md:to-transparent z-10" />
                </motion.div>
            </AnimatePresence>

            <div className="container mx-auto px-6 md:px-12 z-20 relative">
                <div className="max-w-3xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`content-${current}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col items-center md:items-start text-center md:text-left pt-20 md:pt-0"
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-3 mb-6 bg-white/5 backdrop-blur-3xl px-4 py-2 rounded-full border border-white/10"
                            >
                                <Sparkles className="w-3 h-3 text-luxury-gold" />
                                <span className="text-[8px] md:text-[10px] font-black text-white/80 tracking-[0.4em] uppercase">{slides[current].tag}</span>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.25 }}
                                className="text-[8px] md:text-[10px] font-bold text-red-500/80 uppercase tracking-widest mb-4"
                            >
                                Note: We are not doctors. This is a listening service.
                            </motion.p>

                            <motion.h1
                                className="text-3xl sm:text-4xl md:text-7xl font-black mb-6 tracking-tighter text-white leading-[1.1] md:leading-[0.95] font-display"
                                dangerouslySetInnerHTML={{ __html: slides[current].title }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 1 }}
                            />

                            <motion.p
                                className="text-xs md:text-lg text-slate-400 max-w-xl mb-10 font-medium leading-relaxed tracking-tight px-4 md:px-0"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 1 }}
                            >
                                {slides[current].desc}
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-10 md:px-0"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 1 }}
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
                                    className="w-full sm:w-auto px-12 py-5 bg-primary text-white rounded-full font-black uppercase tracking-widest text-[9px] transition-all duration-500 hover:bg-primary-dark shadow-[0_20px_40px_-10px_rgba(139,92,246,0.3)] hover:scale-105 active:scale-95 text-center"
                                >
                                    {slides[current].cta}
                                </Link>

                                <Link
                                    href="#how-it-works"
                                    onClick={(e) => {
                                        const element = document.getElementById("how-it-works");
                                        if (element) {
                                            e.preventDefault();
                                            element.scrollIntoView({ behavior: "smooth" });
                                            window.history.pushState(null, "", "/#how-it-works");
                                        }
                                    }}
                                    className="w-full sm:w-auto px-12 py-5 bg-white/5 border border-white/20 text-white rounded-full font-black uppercase tracking-widest text-[9px] transition-all duration-500 hover:bg-white/10 backdrop-blur-2xl text-center"
                                >
                                    How It Works
                                </Link>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Pagination dots matching the reference image style */}
            <div className="absolute bottom-12 left-6 md:left-12 flex items-center gap-2 z-30">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={clsx(
                            "h-1.5 rounded-full transition-all duration-700",
                            current === i ? "w-8 bg-luxury-gold shadow-[0_0_10px_rgba(212,175,55,0.4)]" : "w-1.5 bg-white/30"
                        )}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex absolute right-12 bottom-12 gap-3 z-30">
                <button onClick={prev} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-luxury-gold/30 transition-all duration-500 text-white/40 hover:text-white">
                    <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={next} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-luxury-gold/30 transition-all duration-500 text-white/40 hover:text-white">
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>

            {/* Private Tag */}
            <div className="absolute bottom-6 right-8 z-30 opacity-30 select-none hidden md:flex items-center gap-2">
                <AlertTriangle className="w-3 h-3" />
                <p className="text-[8px] font-black text-white tracking-[0.4em] uppercase">100% Anonymous & Secure Line</p>
            </div>
        </section>
    );
}

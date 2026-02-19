"use client";

import { motion } from "framer-motion";
import { User, Globe, MessageSquare, Star } from "lucide-react";

const listeners = [
    {
        name: "Rahul",
        spec: "Emotional Support & Listener",
        tags: ["Patient", "Kind"],
        status: "Available now",
        // rating: 4.9
    },
    {
        name: "Karan",
        spec: "Emotional Support & Listener",
        tags: ["Patient", "Kind", "Friendly"],
        status: "Available now",
        // rating: 4.9
    },
];

import Image from "next/image";

export default function LiveListenerPreview() {
    return (
        <section className="py-32 relative overflow-hidden bg-dark">
            {/* Background Decorative Rings */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/2 rounded-full" />
            </div>

            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-premium text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                        <Globe className="w-3 h-3" />
                        <span>Global Support Network</span>
                    </div>
                    <h2 className="text-3xl md:text-6xl font-black mb-6 text-white tracking-[-0.04em] leading-tight font-display">
                        Our Soulful <br />
                        <span className="text-gradient-premium">Active Listeners.</span>
                    </h2>
                    <p className="text-sm text-slate-500 font-medium max-w-lg mx-auto tracking-wide">Available right now to hold space for your story, without judgment or distraction.</p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-8">
                    {listeners.map((listener, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            className="bg-slate-900/40 backdrop-blur-3xl p-6 md:p-8 flex flex-col items-center text-center group border border-white/5 rounded-[2.5rem] md:rounded-[3rem] hover:border-white/20 transition-all duration-700 w-full max-w-[280px] relative overflow-hidden shadow-2xl"
                        >
                            {/* Animated Background Gradient */}
                            <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                            <div className="relative mb-6 md:mb-10">
                                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                <div className="w-20 h-20 md:w-28 md:h-28 organic-shape-1 bg-linear-to-br from-slate-800 to-slate-900 flex items-center justify-center border border-white/10 relative overflow-hidden group-hover:rotate-12 transition-all duration-700 shadow-xl">
                                    <User className="w-8 h-8 md:w-10 md:h-10 text-white/20" />
                                </div>
                                <div className={`absolute bottom-1 right-1 md:bottom-2 md:right-2 w-4 h-4 md:w-5 md:h-5 rounded-full border-2 md:border-4 border-background ${listener.status === 'Available now' ? 'bg-green-500' : 'bg-amber-500'} shadow-lg`} />
                            </div>

                            <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors mb-2 font-display tracking-tight">{listener.name}</h3>
                            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-8 max-w-[140px] leading-relaxed italic opacity-60">
                                {listener.spec}
                            </p>

                            <div className="flex flex-wrap justify-center gap-2 mb-10">
                                {listener.tags.map(tag => (
                                    <span key={tag} className="px-4 py-1.5 bg-white/5 rounded-full text-[9px] font-black uppercase tracking-widest text-primary/80 border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>


                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

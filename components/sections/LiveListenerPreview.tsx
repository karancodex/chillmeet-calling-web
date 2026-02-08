"use client";

import { motion } from "framer-motion";
import { User, Globe, MessageSquare, Star } from "lucide-react";

const listeners = [
    {
        name: "Aura",
        spec: "Emotional Support",
        tags: ["Patient", "Kind"],
        status: "Available now",
        rating: 4.9
    },
    {
        name: "Zenith",
        spec: "Stress Relief",
        tags: ["Calm", "Wise"],
        status: "Available now",
        rating: 5.0
    },
    {
        name: "Lumina",
        spec: "Relationship Advice",
        tags: ["Empathetic", "Direct"],
        status: "Available now",
        rating: 4.8
    },
    {
        name: "Serene",
        spec: "Night Anxiety",
        tags: ["Stable", "Gentle"],
        status: "In a call",
        rating: 4.9
    }
];

import Image from "next/image";

export default function LiveListenerPreview() {
    return (
        <section className="py-24 relative overflow-hidden bg-dark">
            {/* Premium Background Banner Overlay */}
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
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-4 text-white tracking-tight leading-tight">
                        Our Empathetic <br />
                        <span className="text-gradient">Active Listeners.</span>
                    </h2>
                    <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.4em]">Available right now to listen without judgment.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {listeners.map((listener, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card p-6 flex flex-col items-center text-center group border border-white/5"
                        >
                            <div className="relative mb-6">
                                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-white/10 relative overflow-hidden group-hover:rotate-6 transition-transform">
                                    <User className="w-8 h-8 text-white/40" />
                                </div>
                                <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-dark ${listener.status === 'Available now' ? 'bg-green-500' : 'bg-amber-500'}`} />
                            </div>

                            <h3 className="text-lg font-black text-white group-hover:text-primary transition-colors mb-1">{listener.name}</h3>
                            <p className="text-[9px] text-white/40 font-black uppercase tracking-widest mb-4 italic">"{listener.spec}"</p>

                            <div className="flex gap-2 mb-6">
                                {listener.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-white/5 rounded-lg text-[8px] font-black uppercase tracking-widest text-primary/60 self-center">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-1 text-amber-500 font-black text-xs mb-6">
                                <Star className="w-3 h-3 fill-amber-500" />
                                <span>{listener.rating}</span>
                            </div>

                            <a href="tel:6387197293" className="w-full py-3 glass hover:bg-white text-white hover:text-dark font-black text-[10px] rounded-xl transition-all uppercase tracking-widest flex items-center justify-center gap-2">
                                <MessageSquare className="w-3 h-3" />
                                <span>Talk Now</span>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

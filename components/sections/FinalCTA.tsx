"use client";

import { motion } from "framer-motion";

import Image from "next/image";

export default function FinalCTA() {
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
                    className="glass-card p-12 md:p-20 text-center relative overflow-hidden border border-white/5"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

                    <div className="relative w-24 h-24 mx-auto mb-10 transform hover:rotate-12 transition-transform duration-500">
                        <Image src="/images/chillmeet_logo.png" alt="Logo" fill className="object-contain" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-white leading-tight">
                        Your Journey To Sukun <br />
                        <span className="text-gradient">Starts With A Hello.</span>
                    </h2>

                    <p className="text-base text-white/40 mb-10 max-w-2xl mx-auto font-bold uppercase tracking-widest leading-relaxed">
                        Don't carry the weight alone. Connect with a compassionate listener now and feel the healing power of being heard.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="tel:6387197293" className="px-12 py-5 bg-gradient-to-r from-primary to-accent text-white font-black text-lg rounded-2xl transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-1 active:scale-95">
                            Start Talking Now
                        </a>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-6">
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-dark bg-white/10 glass flex items-center justify-center text-[10px] font-black">
                                    {String.fromCharCode(64 + i)}
                                </div>
                            ))}
                        </div>
                        <p className="text-[10px] text-white/30 font-black uppercase tracking-widest">Joined by 10k+ Seekers</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

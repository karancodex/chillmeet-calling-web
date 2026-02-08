"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Phone, Globe, ShieldCheck, Heart } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const helplines = [
    { country: "India", number: "9152987821", name: "iCall" },
    { country: "USA", number: "988", name: "Suicide & Crisis Lifeline" },
    { country: "UK", number: "111", name: "NHS Crisis Support" },
    { country: "Canada", number: "1-833-456-4566", name: "Talk Suicide Canada" },
    { country: "International", number: "befrienders.org", name: "Befrienders Worldwide" }
];

export default function CrisisPage() {
    return (
        <main className="bg-dark min-h-screen pt-32">
            <Navbar />

            <section className="container mx-auto px-6 pb-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-card p-12 md:p-20 border border-red-500/20 bg-red-500/[0.02] text-center max-w-4xl mx-auto mb-16"
                >
                    <div className="w-20 h-20 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20 mx-auto mb-10">
                        <AlertTriangle className="w-10 h-10 text-red-500" />
                    </div>

                    <h1 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
                        Immediate <span className="text-red-500">Crisis Support.</span>
                    </h1>

                    <p className="text-white/60 text-base font-bold leading-relaxed mb-10 max-w-2xl mx-auto">
                        If you are experiencing suicidal thoughts or are in immediate danger, ChillMeet is not the right place for you right now. <span className="text-red-500">Please reach out to professional emergency services immediately.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-10 py-5 bg-red-600 text-white font-black uppercase tracking-widest rounded-xl shadow-xl shadow-red-500/20 hover:bg-red-700 transition-all flex items-center justify-center gap-3">
                            <Phone className="w-5 h-5" />
                            <span>Call 112 / 911 Now</span>
                        </button>
                    </div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl font-black text-white mb-8 uppercase tracking-[0.3em] text-center">Global Helplines</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {helplines.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-card p-8 border border-white/5 flex items-center justify-between group hover:border-red-500/20 transition-all"
                            >
                                <div>
                                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">{item.country}</p>
                                    <h3 className="text-white font-black text-lg group-hover:text-red-500 transition-colors">{item.name}</h3>
                                    <p className="text-primary font-black text-sm mt-1">{item.number}</p>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-red-500/10 transition-all">
                                    <Globe className="w-5 h-5 text-white/20 group-hover:text-red-500" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: ShieldCheck, title: "100% Private", desc: "Your safety is our first priority." },
                            { icon: Heart, title: "Deep Empathy", desc: "We care about your well-being." },
                            { icon: ShieldCheck, title: "Secured", desc: "Encrypted and safe connection." }
                        ].map((item, idx) => (
                            <div key={idx} className="text-center">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-white/5">
                                    <item.icon className="w-5 h-5 text-primary" />
                                </div>
                                <h4 className="text-white font-black text-sm mb-1">{item.title}</h4>
                                <p className="text-white/30 text-[10px] uppercase font-bold tracking-widest">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

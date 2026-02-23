"use client";

import { commonQuestions } from "@/data/questions";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { motion } from "framer-motion";
import { Plus, Minus, Sparkles, MessageSquare } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <main className="min-h-screen bg-[#020305] text-white">
            <Navbar />

            <section className="pt-32 pb-24 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-linear-to-b from-primary/10 to-transparent -z-10 blur-[120px]" />

                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
                        >
                            <Sparkles className="w-3 h-3 text-luxury-gold" />
                            <span className="text-[10px] font-black text-white/60 tracking-[0.3em] uppercase">Private Support Intelligence</span>
                        </motion.div>
                        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 font-display tracking-tight leading-none">
                            Common <span className="text-luxury-gold italic">Enquiries.</span>
                        </h1>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium opacity-80">
                            Find answers to everything you need to know about our anonymous listening sessions and how we protect your sanctuary.
                        </p>
                    </div>

                    {/* Search/Filter UI Placeholder could go here */}

                    <div className="space-y-4">
                        {commonQuestions.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden transition-all duration-300 hover:border-luxury-gold/30 hover:bg-white/[0.04]"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full px-8 py-6 md:py-8 flex items-center justify-between text-left group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center shrink-0 border border-luxury-gold/10 group-hover:bg-luxury-gold/20 transition-colors">
                                            <MessageSquare className="w-4 h-4 text-luxury-gold" />
                                        </div>
                                        <span className="text-base md:text-lg font-bold text-white group-hover:text-luxury-gold transition-colors leading-tight">
                                            {item.question}
                                        </span>
                                    </div>
                                    <div className="ml-4 shrink-0">
                                        {openIndex === idx ? (
                                            <Minus className="w-5 h-5 text-luxury-gold" />
                                        ) : (
                                            <Plus className="w-5 h-5 text-white/20 group-hover:text-white" />
                                        )}
                                    </div>
                                </button>

                                <motion.div
                                    initial={false}
                                    animate={{ height: openIndex === idx ? "auto" : 0, opacity: openIndex === idx ? 1 : 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-8 md:px-20 pb-8 text-slate-400 text-sm md:text-base leading-relaxed font-medium pt-2">
                                        <p className="border-l-2 border-luxury-gold/30 pl-6 py-2">
                                            {item.answer}
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-24 p-12 rounded-[3rem] bg-linear-to-br from-primary/20 via-white/[0.02] to-transparent border border-white/5 text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-luxury-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Still have questions?</h3>
                        <p className="text-slate-500 mb-10 max-w-md mx-auto">Our elite concierge is available to explain our methodology in detail. We are here to listen.</p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-dark rounded-full font-black uppercase tracking-widest text-[11px] transition-all duration-500 hover:bg-luxury-gold hover:text-white shadow-2xl"
                        >
                            Message Us Directly
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

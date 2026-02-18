"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { useState } from "react";
import { PlayCircle, CheckCircle2, Send, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function ApplyPage() {
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);

    if (submitted) {
        return (
            <main className="bg-dark min-h-screen pt-32">
                <Navbar />
                <div className="flex-1 container mx-auto px-6 py-32 max-w-2xl text-center">
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass-card p-12 md:p-20 border-white/5">
                        <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-10 border border-green-500/20">
                            <CheckCircle2 className="w-10 h-10 text-green-500" />
                        </div>
                        <h1 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Application Received!</h1>
                        <p className="text-white/40 text-sm font-bold leading-relaxed mb-10">
                            Our team will review your profile and reach out within 48 hours. Thank you for wanting to give support to others.
                        </p>
                        <button onClick={() => window.location.href = '/'} className="px-10 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                            Back to Home
                        </button>
                    </motion.div>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="bg-dark min-h-screen pt-32">
            <Navbar />

            <div className="container mx-auto px-6 pb-24 relative z-10 max-w-4xl">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
                        Become A <span className="text-gradient">Listener.</span>
                    </h1>
                    <p className="text-white/40 text-sm font-bold uppercase tracking-[0.4em]">Help others find their peace through the power of listening.</p>
                </motion.div>

                <div className="flex gap-4 mb-12 justify-center">
                    {[1, 2].map((i) => (
                        <div key={i} className={`w-12 h-1 bg-${step >= i ? 'primary' : 'white/10'} rounded-full transition-all duration-500`} />
                    ))}
                </div>

                {step === 1 && (
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-10 border-white/5 space-y-8">
                        <div>
                            <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight flex items-center gap-3">
                                <PlayCircle className="w-6 h-6 text-primary" />
                                Step 1: Empathy Training
                            </h2>
                            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-8 italic">Watch the introductory guide below.</p>

                            <div className="aspect-video bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group cursor-pointer hover:border-primary/30 transition-all relative overflow-hidden">
                                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <PlayCircle className="w-16 h-16 text-white/20 group-hover:text-primary group-hover:scale-110 transition-all relative z-10" />
                                <p className="absolute bottom-6 left-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">ListnerZone Listener Protocol V1.0</p>
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl bg-white/2 border border-white/5">
                            <h3 className="text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-4">You will learn:</h3>
                            <ul className="space-y-3">
                                {["Active listening techniques", "Non-judgmental speech", "Safe space protocols", "Crisis escalations"].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-white/60 text-xs font-bold tracking-tight">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button onClick={() => setStep(2)} className="w-full py-5 bg-white text-dark font-black uppercase tracking-widest rounded-xl hover:scale-[1.02] transition-all">
                            Proceed to Application
                        </button>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-10 border-white/5">
                        <h2 className="text-xl font-black text-white mb-10 uppercase tracking-tight flex items-center gap-3">
                            <Send className="w-6 h-6 text-primary" />
                            Step 2: Listener Profile
                        </h2>

                        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest px-1">Full Name</label>
                                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest px-1">Email Address</label>
                                    <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-white/40 uppercase tracking-widest px-1">Why do you want to listen?</label>
                                <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 resize-none" placeholder="We value genuine empathy. Tell us why you're a good fit." />
                            </div>

                            <div className="p-6 rounded-2xl bg-white/2 border border-white/5 flex items-start gap-4">
                                <input required type="checkbox" className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 text-primary focus:ring-primary" />
                                <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest leading-relaxed">
                                    I agree to follow the ListnerZone Listener Script and Rules. I understand that any violation will lead to immediate removal.
                                </span>
                            </div>

                            <button type="submit" className="w-full py-6 bg-linear-to-r from-primary to-accent text-white font-black uppercase tracking-widest rounded-xl shadow-xl shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-1 transition-all">
                                Submit For Review
                            </button>
                        </form>
                    </motion.div>
                )}
            </div>

            <Footer />
        </main>
    );
}

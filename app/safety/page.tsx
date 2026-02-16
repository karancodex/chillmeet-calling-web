"use client";

import { motion } from "framer-motion";
import { Shield, EyeOff, UserCheck, ShieldCheck, HeartPulse } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Link from "next/link";

const guidelines = [
    {
        icon: Shield,
        title: "Anonymous Presence",
        desc: "We never ask for your real name or personal identity. You are always in control of what you share."
    },
    {
        icon: EyeOff,
        title: "No Tracking",
        desc: "We don't sell your data or track your behavior. Your sanctuary is private and secure."
    },
    {
        icon: UserCheck,
        title: "Verified Listeners",
        desc: "Our listeners are vetted for empathy and adherence to our safety protocols."
    },
    {
        icon: ShieldCheck,
        title: "End-to-End Privacy",
        desc: "Our calling technology ensures your connection is secure from start to finish."
    },
    {
        icon: HeartPulse,
        title: "Mental Well-being First",
        desc: "We prioritize a judgment-free environment designed for emotional safety."
    }
];

export default function SafetyPage() {
    return (
        <main className="bg-dark min-h-screen pt-32">
            <Navbar />

            <section className="container mx-auto px-6 pb-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                        <Shield className="w-4 h-4" />
                        <span>Trust & Safety</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
                        Your Safety Is <br /><span className="text-gradient">Our Foundation.</span>
                    </h1>

                    <p className="text-white/40 text-sm font-bold uppercase tracking-[0.4em] max-w-2xl mx-auto">
                        We've built Sukun from the ground up to be a completely secure sanctuary.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
                    {guidelines.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card p-10 border border-white/5 hover:bg-white/3 transition-all group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 mb-8 group-hover:scale-110 transition-transform">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-white font-black text-xl mb-4 uppercase tracking-tight">{item.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed font-bold">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto p-12 md:p-20 rounded-[3rem] bg-linear-to-br from-primary/10 via-transparent to-accent/10 border border-white/5 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight">Still have questions?</h2>
                        <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-10">
                            Our safety team is always available to address your concerns.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-5 bg-white text-dark font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all">
                            Contact Safety Team
                        </Link>
                    </div>
                    <div className="absolute -left-20 -top-20 w-80 h-80 bg-primary/5 blur-[120px] rounded-full" />
                    <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-accent/5 blur-[120px] rounded-full" />
                </div>
            </section>

            <Footer />
        </main>
    );
}

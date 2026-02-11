"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, Send } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";

export default function ContactPage() {
    return (
        <main className="bg-dark min-h-screen pt-32">
            <Navbar />

            <section className="container mx-auto px-6 pb-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
                        Get In <span className="text-gradient">Touch.</span>
                    </h1>
                    <p className="text-white/40 text-sm font-bold uppercase tracking-[0.4em] max-w-2xl mx-auto">
                        We're here to listen, even if you just want to say hi.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="glass-card p-10 border border-white/5"
                    >
                        <h2 className="text-2xl font-black text-white mb-8 uppercase tracking-tight">Send a Message</h2>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-white/40 uppercase tracking-widest px-1">Your Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-white/40 uppercase tracking-widest px-1">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-white/40 uppercase tracking-widest px-1">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all resize-none"
                                    placeholder="How can we help you?"
                                />
                            </div>
                            <button className="w-full py-5 bg-gradient-to-r from-primary to-accent text-white font-black uppercase tracking-widest rounded-xl shadow-xl shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3">
                                <Send className="w-5 h-5" />
                                <span>Send Message</span>
                            </button>
                        </form>
                    </motion.div>

                    <div className="space-y-8">
                        {[
                            { icon: Mail, title: "Email Us", detail: "hello@sukun.com", desc: "For general inquiries and support." },
                            { icon: MessageCircle, title: "Live Chat", detail: "Available 24/7", desc: "Talk to our team members directly." },
                            { icon: MapPin, title: "Location", detail: "Global Digital Sanctuary", desc: "Accessible from anywhere in the world." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-card p-8 border border-white/5 flex items-start gap-6 hover:bg-white/[0.03] transition-colors"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-white/5 shrink-0">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-white font-black text-lg mb-1">{item.title}</h3>
                                    <p className="text-primary font-black text-sm mb-2">{item.detail}</p>
                                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}

                        <div className="mt-12 p-10 rounded-[2.5rem] bg-gradient-to-br from-burgundy/20 to-blue-deep/20 border border-white/5 relative overflow-hidden">
                            <h3 className="text-xl font-black text-white mb-4 relative z-10">Trusted Worldwide</h3>
                            <p className="text-white/40 text-xs font-bold leading-relaxed relative z-10">
                                Join our community of listeners who find peace in connection every single day.
                            </p>
                            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/10 blur-[60px] rounded-full" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

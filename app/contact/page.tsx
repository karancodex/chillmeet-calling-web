"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_CONTACT_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_CONTACT_EMAILJS_TEMPLATE_ID || "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_CONTACT_EMAILJS_PUBLIC_KEY || "";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;

        setStatus("loading");

        try {
            if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
                await emailjs.send(
                    SERVICE_ID,
                    TEMPLATE_ID,
                    {
                        from_name: formData.name,
                        from_email: formData.email,
                        message: formData.message,
                        to_name: "ListnerZone Support",
                    },
                    PUBLIC_KEY
                );
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                throw new Error("EmailJS configuration missing");
            }
        } catch (error) {
            console.error("Submission failed:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

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

                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-card p-10 border border-white/5 relative overflow-hidden"
                    >
                        <h2 className="text-2xl font-black text-white mb-8 uppercase tracking-tight">Send a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-white/40 uppercase tracking-widest px-1">Your Name</label>
                                <input
                                    required
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-white/40 uppercase tracking-widest px-1">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-white/40 uppercase tracking-widest px-1">Message</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all resize-none"
                                    placeholder="How can we help you?"
                                />
                            </div>
                            <button
                                disabled={status === "loading"}
                                className="w-full py-5 bg-linear-to-r from-primary to-accent text-white font-black uppercase tracking-widest rounded-xl shadow-xl shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:hover:translate-y-0"
                            >
                                {status === "loading" ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>
                        </form>

                        <AnimatePresence>
                            {status === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="absolute inset-0 bg-dark/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 z-20"
                                >
                                    <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6 border border-green-500/20">
                                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">Message Sent!</h3>
                                    <p className="text-white/40 text-sm font-bold uppercase tracking-widest leading-relaxed">
                                        Thank you for reaching out. <br /> We'll get back to you soon.
                                    </p>
                                </motion.div>
                            )}

                            {status === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="absolute inset-0 bg-dark/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 z-20"
                                >
                                    <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/20">
                                        <AlertCircle className="w-10 h-10 text-red-500" />
                                    </div>
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">Sending Failed</h3>
                                    <p className="text-white/40 text-sm font-bold uppercase tracking-widest leading-relaxed">
                                        Something went wrong. <br /> Please try again later.
                                    </p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="mt-6 text-primary text-[10px] font-black uppercase tracking-widest hover:underline"
                                    >
                                        Try Again
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { useState } from "react";
import { ChevronDown, ChevronUp, Search, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const faqs = [
    {
        question: "Is this therapy or counseling?",
        answer: "No. Sukun is an emotional support platform connecting you with empathetic peer listeners, not licensed therapists. We are for casual venting, stress relief, and human connection. If you have a serious medical or mental health condition, please seek professional assistance."
    },
    {
        question: "How anonymous is the service?",
        answer: "Exremely. We prioritize your privacy above all else. You do not need to share your real name, location, or photo. Calls are audio-only, encrypted, and no personal identifying information is shared with listeners."
    },
    {
        question: "What if I'm not happy with my session?",
        answer: "Sukun sessions are non-refundable. Please note that our team consists of empathetic listeners who provide a safe space for you to be heard; we are not professional therapists or medical experts."
    },
    {
        question: "Do I need an account to call?",
        answer: "No, you do not need to create an account to call. Once your session is confirmed, you will receive the listener's contact details via email."
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <main className="bg-dark min-h-screen pt-32">
            <Navbar />

            {/* Background Image Layer */}
            <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
                <Image
                    src="/images/hero_banner_premium.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-5"
                />
            </div>

            <section className="container mx-auto px-6 pb-24 relative z-10 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-6">
                        Support Center
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
                        Find Your <span className="text-gradient">Answers.</span>
                    </h1>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card overflow-hidden border-white/5"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/3 transition-all focus:outline-none"
                            >
                                <span className="font-black text-white uppercase tracking-tight text-sm md:text-base">{faq.question}</span>
                                <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-transform duration-300 ${openIndex === idx ? 'rotate-180 bg-primary/20' : ''}`}>
                                    <ChevronDown className={`w-4 h-4 ${openIndex === idx ? 'text-primary' : 'text-white/20'}`} />
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-8 pb-8 pt-2 text-white/50 text-sm font-bold leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 p-12 glass-card border-white/5 text-center bg-linear-to-br from-primary/5 to-transparent"
                >
                    <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight">Still have questions?</h3>
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em] mb-10">We're here to help you 24/7.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="px-8 py-4 bg-white text-dark rounded-xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all">
                            Send Session Request
                        </Link>

                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}

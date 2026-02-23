"use client";

import { motion } from "framer-motion";
import { Plus, Minus, Sparkles } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "Is ListenerZone a therapy or counseling service?",
        answer: "No. We are a specialized emotional support platform. Our listeners are trained in empathy and active listening, but they are not medical professionals or therapists. We provide human connection and a space to vent, not clinical treatment."
    },
    {
        question: "How anonymous is my session?",
        answer: "Completely. We do not require account registration. You can use a pseudonym, and we do not store session logs. Your call is a private 'tunnel' that exists only while you are speaking."
    },
    {
        question: "What can I talk about?",
        answer: "Anything that is on your mind—daily stress, loneliness, overthinking, career anxiety, or even small wins you want to share. As long as it doesn't involve illegal activities or immediate harm to yourself or others, our ears are yours."
    },
    {
        question: "How do I start a late night talk support session?",
        answer: "Simply visit our pricing section, reserve a time, and you will receive instructions for your call. Our listeners are available 24/7 to provide support whenever you need it most."
    },
    {
        question: "What is the difference between this and a dating app?",
        answer: "We are strictly a listening service. Our listeners are there to provide emotional support and presence, not to build personal or romantic relationships. All interactions are professional and time-bound."
    },
    {
        question: "What if I am in a crisis or need medical help?",
        answer: "If you are in immediate danger, experiencing a medical emergency, or in a deep crisis, please contact your local emergency services or a crisis hotline immediately. ListenerZone is for peer-level support and is not equipped for emergency intervention."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-[#020305] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <Sparkles className="w-3 h-3 text-luxury-gold" />
                        <span className="text-[10px] font-black text-white/60 tracking-[0.3em] uppercase">Clarity & Trust</span>
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-display tracking-tight text-center leading-none">
                        Questions You <span className="text-luxury-gold italic">May Have.</span>
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden transition-all duration-300 hover:border-white/10"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left group"
                            >
                                <span className="text-lg font-bold text-white group-hover:text-luxury-gold transition-colors">{faq.question}</span>
                                <div className="ml-4 shrink-0 transition-transform duration-300">
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
                                <div className="px-8 pb-8 text-slate-400 text-sm md:text-base leading-relaxed font-medium border-t border-white/5 pt-4">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

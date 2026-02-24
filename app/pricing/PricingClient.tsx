"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Pricing from "@/components/sections/Pricing";

const subscription = [
    {
        name: "Monthly Inner Peace",
        price: "1499",
        unit: "/mo",
        features: ["Unlimited 30min Sessions/day", "Priority Access", "Premium Listeners", "Cancel Anytime", "24/7 Priority Support"],
        popular: true
    }
];

export default function PricingClient() {
    const upiId = "karankumar.25.2002@ybl";

    return (
        <main className="bg-dark min-h-screen pt-32">
            <Navbar />

            <section className="container mx-auto px-6 pb-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
                        Investment In <span className="text-gradient">Peace.</span>
                    </h1>
                    <p className="text-white/40 text-sm font-bold uppercase tracking-[0.4em] max-w-2xl mx-auto">
                        Simple transparent pricing for professional emotional support and human connection.
                    </p>
                </motion.div>

                <div className="space-y-32">
                    {/* Pay Per Call Section */}
                    <div>
                        <div className="flex items-center gap-4 mb-12 justify-center">
                            <div className="h-px w-12 bg-white/10" />
                            <h2 className="text-sm font-black text-white/40 uppercase tracking-[0.5em]">Pay Per Call</h2>
                            <div className="h-px w-12 bg-white/10" />
                        </div>
                        <Pricing />
                    </div>

                    {/* Subscription Section */}
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center gap-4 mb-12 justify-center">
                            <div className="h-px w-12 bg-white/10" />
                            <h2 className="text-sm font-black text-white/40 uppercase tracking-[0.5em]">Monthly Subscriptions</h2>
                            <div className="h-px w-12 bg-white/10" />
                        </div>

                        {subscription.map((plan, idx) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="glass-card p-10 md:p-20 border border-primary/30 relative overflow-hidden flex flex-col items-center text-center bg-linear-to-br from-primary/5 to-transparent"
                            >
                                <div className="absolute top-0 right-0 px-8 py-2 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-bl-2xl">
                                    Best Value
                                </div>

                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-white/5 mb-8">
                                    <Zap className="w-8 h-8 text-primary" />
                                </div>

                                <h3 className="text-xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight">{plan.name}</h3>
                                <div className="flex items-baseline gap-2 mb-10">
                                    <span className="text-5xl md:text-6xl font-black text-white">₹{plan.price}</span>
                                    <span className="text-xl text-white/20 font-black uppercase">{plan.unit}</span>
                                </div>

                                <div className="w-full max-w-md space-y-4">
                                    <a
                                        href={`upi://pay?pa=${upiId}&pn=ListnerZone&am=${plan.price}&cu=INR&tn=ListnerZone ${plan.name} Subscription`}
                                        className="w-full block px-16 py-6 bg-linear-to-r from-primary to-accent text-white font-black text-xl rounded-2xl transition-all shadow-2xl shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-1 active:scale-95 text-center"
                                    >
                                        Subscribe with UPI
                                    </a>
                                    <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.4em] text-center">
                                        By subscribing, you agree to our <a href="/terms" className="text-primary hover:underline">Terms</a> & <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                                    </p>
                                    <p className="text-[9px] text-white/10 font-black uppercase tracking-[0.4em] text-center">
                                        UPI ID: <span className="text-primary/20 text-xs tracking-normal">{upiId}</span>
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

"use client";

import { motion } from "framer-motion";
import { Check, Zap, Shield, Heart } from "lucide-react";
import clsx from "clsx";

const plans = [
    {
        name: "Quick Vent",
        duration: "10 min",
        price: "99",
        icon: Heart,
        color: "from-blue-500 to-cyan-500",
        features: ["Instant connection", "Audio only", "No signup needed", "Private Room"],
        popular: false
    },
    {
        name: "Deep Talk",
        duration: "30 min",
        price: "249",
        icon: Zap,
        color: "from-primary to-accent",
        features: ["Choose listener", "Audio only", "Priority connection", "1 Follow-up msg", "Unlimited duration"],
        popular: true
    },
    {
        name: "Healing Session",
        duration: "60 min",
        price: "449",
        icon: Shield,
        color: "from-purple-500 to-pink-500",
        features: ["Professional listener", "Audio only", "Session summary", "Unlimited chat", "Lifetime Access"],
        popular: false
    }
];

import Image from "next/image";

export default function Pricing() {
    const upiId = "karankumar.25.2002@ybl";

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
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-4 text-white tracking-tight leading-tight">
                        Simple, Honest <br />
                        <span className="text-gradient">Pricing.</span>
                    </h2>
                    <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.4em]">Choose a plan that fits your journey to peace.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={clsx(
                                "glass-card p-10 flex flex-col items-center group relative border border-white/5",
                                plan.popular && "border-primary/50 shadow-[0_20px_40px_rgba(124,108,255,0.15)] ring-1 ring-primary/20 scale-105"
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full text-[10px] font-black uppercase tracking-widest text-white">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-xl font-black text-white mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-4xl font-black text-white">₹{plan.price}</span>
                                <span className="text-xs text-white/40 font-bold uppercase tracking-widest">/ session</span>
                            </div>

                            <ul className="w-full space-y-4 mb-10">
                                {plan.features.map(feature => (
                                    <li key={feature} className="flex items-center gap-3 text-xs text-white/60 font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="w-full space-y-4">
                                <a
                                    href={`upi://pay?pa=${upiId}&pn=ChillMeet&am=${plan.price}&cu=INR&tn=ChillMeet ${plan.name} Session`}
                                    className={clsx(
                                        "w-full block py-4 rounded-xl font-black uppercase tracking-widest text-center text-xs transition-all transform hover:-translate-y-1 active:scale-95",
                                        plan.popular
                                            ? "bg-gradient-to-r from-primary to-accent text-white shadow-xl shadow-primary/20"
                                            : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                                    )}
                                >
                                    Pay with UPI
                                </a>
                                <p className="text-[8px] text-white/20 font-black uppercase tracking-[0.2em] text-center">
                                    UPI ID: <span className="text-primary/40">{upiId}</span>
                                </p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem] pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

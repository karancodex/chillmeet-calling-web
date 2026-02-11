"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, Shield, Heart, Clock, X, Loader2, Sparkles, CreditCard, Mail, Calendar } from "lucide-react";
import clsx from "clsx";
import Script from "next/script";
import emailjs from "@emailjs/browser";

// --- Configuration ---
const RAZORPAY_KEY = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_YourKeyId";
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

const plans = [
    {
        id: "plan_5",
        name: "Quick Vent",
        duration: "5 min",
        minutes: 5,
        price: 19,
        icon: Heart,
        color: "from-blue-500 to-cyan-500",
        popular: false
    },
    {
        id: "plan_10",
        name: "Deep Talk",
        duration: "10 min",
        minutes: 10,
        price: 39,
        icon: Zap,
        color: "from-primary to-accent",
        popular: true
    },
    {
        id: "plan_15",
        name: "Healing Soul",
        duration: "15 min",
        minutes: 15,
        price: 69,
        icon: Shield,
        color: "from-purple-500 to-pink-500",
        popular: false
    },
    {
        id: "plan_custom",
        name: "Custom Flow",
        duration: "Flexible",
        minutes: 0,
        price: "Custom",
        icon: Sparkles,
        color: "from-amber-400 to-orange-500",
        popular: false
    }
];

const customDurations = [
    { label: "30 Minutes", value: 30, price: 129 },
    { label: "45 Minutes", value: 45, price: 179 }
];

export default function Pricing() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState<string | null>(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const [lastPaymentId, setLastPaymentId] = useState("");

    // Form state for custom session
    const [formData, setFormData] = useState({
        email: "",
        date: "",
        time: "",
        duration: 30,
        price: 129
    });

    useEffect(() => {
        const selected = customDurations.find(d => d.value === formData.duration);
        if (selected) {
            setFormData(prev => ({ ...prev, price: selected.price }));
        }
    }, [formData.duration]);

    // --- Razorpay Integration ---
    const handlePayment = (planId: string, amount: number, isCustom = false) => {
        if (!amount || amount <= 0) return;
        setLoading(planId);

        const options = {
            key: RAZORPAY_KEY,
            amount: amount * 100, // in paisa
            currency: "INR",
            name: "Sukun",
            description: `${isCustom ? 'Custom' : ''} Voice Session (${planId})`,
            image: "https://sukun.life/images/sukun_logo.png",
            handler: function (response: any) {
                setLoading(null);
                setLastPaymentId(response.razorpay_payment_id);
                handleSuccess(response.razorpay_payment_id, planId, amount, isCustom);
            },
            prefill: {
                email: isCustom ? formData.email : "",
                contact: ""
            },
            theme: {
                color: "#7C6CFF"
            },
            modal: {
                ondismiss: function () {
                    setLoading(null);
                }
            }
        };

        const rzp = new (window as any).Razorpay(options);
        rzp.open();
    };

    // --- Success & Email Handling ---
    const handleSuccess = async (paymentId: string, planId: string, amount: number, isCustom = false) => {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);

        // Send confirmation email
        try {
            const templateParams = {
                to_email: isCustom ? formData.email : "user@example.com", // In real apps, we'd have user email
                user_email: isCustom ? formData.email : "Generic User",
                plan_name: planId,
                amount: amount,
                payment_id: paymentId,
                duration: isCustom ? `${formData.duration} mins` : planId,
                scheduled_time: isCustom ? `${formData.date} ${formData.time}` : "Immediate",
                site_name: "Sukun"
            };

            if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
                await emailjs.send(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID,
                    templateParams,
                    EMAILJS_PUBLIC_KEY
                );
            }
        } catch (error) {
            console.error("Email share failed", error);
        }
    };

    const handleCustomSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.email || !formData.date || !formData.time) {
            alert("Please fill all fields");
            return;
        }
        setIsModalOpen(false);
        handlePayment(`Custom_${formData.duration}min`, formData.price, true);
    };

    return (
        <section className="relative selection:bg-primary/20 bg-dark">
            {/* Transition Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10" />

            <div className="py-32 relative overflow-hidden">
                <Script src="https://checkout.razorpay.com/v1/checkout.js" />

                {/* Refined Ambient Background */}
                <div className="absolute inset-0 pointer-events-none -z-10">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[140px] rounded-full animate-pulse-slow" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 blur-[140px] rounded-full animate-pulse-slow" />
                </div>

                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center mb-24"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-premium text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                            <CreditCard className="w-3 h-3" />
                            <span>Pricing & Sessions</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight font-display leading-[1.1]">
                            Invest In Your <br />
                            <span className="text-gradient-premium">Peace Of Mind.</span>
                        </h2>
                        <p className="text-base text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
                            Choose a session that fits your heart. Every call is 100% private, anonymous, and focused entirely on you.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {plans.map((plan, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.8 }}
                                className={clsx(
                                    "relative group p-1 grad-border rounded-[3.5rem] transition-all duration-700",
                                    plan.popular && "scale-105 z-10"
                                )}
                            >
                                <div className="relative h-full bg-slate-900/40 backdrop-blur-3xl p-10 rounded-[3.3rem] flex flex-col items-center border border-white/5 group-hover:border-white/10 transition-colors">
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-linear-to-r from-primary to-accent rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-[0_10px_30px_rgba(124,108,255,0.4)]">
                                            Best Value
                                        </div>
                                    )}

                                    <div className={clsx(
                                        "w-20 h-20 rounded-[2rem] bg-linear-to-br flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-700",
                                        plan.color
                                    )}>
                                        <plan.icon className="w-10 h-10 text-white" />
                                    </div>

                                    <h3 className="text-3xl font-black text-white mb-2 font-display">{plan.name}</h3>
                                    <p className="text-[10px] text-primary/60 font-black uppercase tracking-[0.3em] mb-8">{plan.duration}</p>

                                    <div className="flex items-baseline gap-1 mb-10">
                                        <span className="text-6xl font-black text-white tracking-tighter font-display">
                                            {typeof plan.price === 'number' ? `₹${plan.price}` : plan.price}
                                        </span>
                                        {typeof plan.price === 'number' && (
                                            <span className="text-xs text-slate-500 font-bold tracking-tight opacity-60">/ session</span>
                                        )}
                                    </div>

                                    <div className="grow" />

                                    <button
                                        onClick={() => plan.id === 'plan_custom' ? setIsModalOpen(true) : handlePayment(plan.id, plan.price as number)}
                                        disabled={!!loading}
                                        className={clsx(
                                            "w-full py-6 rounded-full font-black uppercase tracking-[0.3em] text-[10px] transition-all duration-500 flex items-center justify-center gap-4 active:scale-95",
                                            plan.popular
                                                ? "bg-primary text-white shadow-[0_20px_40px_rgba(124,108,255,0.4)] hover:shadow-[0_25px_50px_rgba(124,108,255,0.6)] hover:bg-primary-dark"
                                                : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                                        )}
                                    >
                                        {loading === plan.id ? (
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                        ) : (
                                            <>
                                                <span>{plan.id === 'plan_custom' ? "Get Custom Quote" : "Secure Booking"}</span>
                                                <Zap className="w-3 h-3 fill-current" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-[10px] text-slate-500/60 font-medium tracking-widest uppercase">
                            * By clicking any booking button, you are accepting our <a href="/terms" className="text-primary hover:underline underline-offset-4">Terms & Conditions</a> and <a href="/privacy" className="text-primary hover:underline underline-offset-4">Privacy Policy</a>.
                        </p>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-32 flex flex-wrap justify-center items-center gap-10 md:gap-24 opacity-30 hover:opacity-100 transition-all duration-700 grayscale hover:grayscale-0">
                        <div className="flex items-center gap-3">
                            <Shield className="w-5 h-5 text-primary" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Secure Payments</span>
                        </div>
                        <div className="text-2xl font-black tracking-tighter text-white/80 font-display">Razorpay</div>
                        <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-primary" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">24/7 Availability</span>
                        </div>
                        <div className="text-2xl font-black tracking-tighter text-white/80 font-display">SSL Verified</div>
                    </div>
                </div >

                {/* Custom Session Modal */}
                <AnimatePresence>
                    {
                        isModalOpen && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setIsModalOpen(false)}
                                    className="absolute inset-0 bg-dark/80 backdrop-blur-xl"
                                />
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    className="relative w-full max-w-lg grad-border rounded-[3rem] overflow-hidden shadow-2xl"
                                >
                                    <div className="bg-slate-900/90 backdrop-blur-3xl p-8 md:p-12 relative">
                                        <button
                                            onClick={() => setIsModalOpen(false)}
                                            className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>

                                        <div className="mb-10 text-center md:text-left">
                                            <h3 className="text-3xl font-black text-white mb-2 tracking-tighter font-display">Custom Session</h3>
                                            <p className="text-slate-400 text-sm font-medium">Schedule a deeper flow at your convenience.</p>
                                        </div>

                                        <form onSubmit={handleCustomSubmit} className="space-y-6">
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 ml-1">Email Address</label>
                                                <div className="relative">
                                                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                                    <input
                                                        required
                                                        type="email"
                                                        placeholder="Enter your email"
                                                        className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white/5 border border-white/5 focus:border-primary/50 focus:bg-white/10 outline-none transition-all text-sm font-bold text-white"
                                                        value={formData.email}
                                                        onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-5">
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 ml-1">Date</label>
                                                    <div className="relative">
                                                        <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                                                        <input
                                                            required
                                                            type="date"
                                                            min={new Date().toISOString().split('T')[0]}
                                                            className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white/5 border border-white/5 focus:border-primary/50 focus:bg-white/10 outline-none transition-all text-sm font-bold text-white [color-scheme:dark]"
                                                            value={formData.date}
                                                            onChange={e => setFormData(prev => ({ ...prev, date: e.target.value }))}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 ml-1">Time</label>
                                                    <div className="relative">
                                                        <Clock className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                                                        <input
                                                            required
                                                            type="time"
                                                            className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white/5 border border-white/5 focus:border-primary/50 focus:bg-white/10 outline-none transition-all text-sm font-bold text-white [color-scheme:dark]"
                                                            value={formData.time}
                                                            onChange={e => setFormData(prev => ({ ...prev, time: e.target.value }))}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 ml-1">Session Duration</label>
                                                <div className="grid grid-cols-2 gap-4">
                                                    {customDurations.map(d => (
                                                        <button
                                                            key={d.value}
                                                            type="button"
                                                            onClick={() => setFormData(prev => ({ ...prev, duration: d.value }))}
                                                            className={clsx(
                                                                "py-4 px-6 rounded-2xl border font-black text-xs transition-all duration-300",
                                                                formData.duration === d.value
                                                                    ? "bg-primary/10 border-primary text-primary shadow-[0_0_20px_rgba(124,108,255,0.2)]"
                                                                    : "bg-white/5 border-white/5 text-slate-500 hover:border-white/20"
                                                            )}
                                                        >
                                                            {d.label}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="pt-8 border-t border-white/5 flex items-center justify-between mt-4">
                                                <div>
                                                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500">Total Investment</p>
                                                    <p className="text-3xl font-black text-white tracking-tighter font-display">₹{formData.price}</p>
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="px-12 py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-primary-dark transition-all shadow-[0_20px_40px_rgba(124,108,255,0.3)] active:scale-95"
                                                >
                                                    Continue to Payment
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </motion.div>
                            </div>
                        )
                    }
                </AnimatePresence >

                {/* Success Toast */}
                <AnimatePresence>
                    {
                        showSuccess && (
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 100 }}
                                className="fixed bottom-10 left-1/2 -translate-x-1/2 z-100 bg-green-500 text-white px-8 py-4 rounded-2xl shadow-[0_20px_40px_rgba(22,163,74,0.3)] flex items-center gap-4 border border-green-400/20"
                            >
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                    <Check className="w-5 h-5 shadow-sm" />
                                </div>
                                <div>
                                    <p className="font-black text-xs uppercase tracking-widest">Payment Successful</p>
                                    <p className="text-[10px] opacity-90 font-bold font-display">Ref ID: {lastPaymentId}</p>
                                </div>
                            </motion.div>
                        )
                    }
                </AnimatePresence >
            </div >
        </section >
    );
};


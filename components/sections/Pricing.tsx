"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, Shield, Heart, Clock, X, Loader2, Sparkles, CreditCard, Mail, Calendar, Phone, User, ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";
import Script from "next/script";
import emailjs from "@emailjs/browser";
import { createCashfreeOrder, verifyCashfreePayment } from "@/app/actions/cashfree";

// --- Configuration ---
const RAZORPAY_KEY = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_YourKeyId";
const PAYMENT_GATEWAY = process.env.NEXT_PUBLIC_PAYMENT_GATEWAY;
const CASHFREE_MODE = process.env.NEXT_PUBLIC_CASHFREE_MODE;

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

const plans = [
    {
        id: "plan_5",
        name: "Quick Vent",
        duration: "5 min",
        minutes: 5,
        price: 0,
        icon: Heart,
        color: "text-blue-400",
        bg: "bg-blue-400/5",
        popular: false
    },
    {
        id: "plan_15",
        name: "Deep Talk",
        duration: "15 min",
        minutes: 15,
        price: 29,
        icon: Zap,
        color: "text-luxury-gold",
        bg: "bg-luxury-gold/5",
        popular: true
    },
    {
        id: "plan_25",
        name: "Healing Soul",
        duration: "25 min",
        minutes: 25,
        price: 49,
        icon: Shield,
        color: "text-purple-400",
        bg: "bg-purple-400/5",
        popular: false
    },
    {
        id: "plan_custom",
        name: "Custom Flow",
        duration: "Flexible",
        minutes: 0,
        price: "Custom",
        icon: Sparkles,
        color: "text-emerald-400",
        bg: "bg-emerald-400/5",
        popular: false
    }
];

const customDurations = [
    { label: "30 Minutes", value: 30, price: 129 },
    { label: "45 Minutes", value: 45, price: 179 }
];

export default function Pricing() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
    const [loading, setLoading] = useState<string | null>(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const [lastPaymentId, setLastPaymentId] = useState("");

    // Form state for custom session
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        duration: 30,
        price: 129,
        listener: "Anyone",
        reason: ""
    });

    const selectedPlan = plans.find(p => p.id === selectedPlanId);

    useEffect(() => {
        if (selectedPlanId === 'plan_custom') {
            const selected = customDurations.find(d => d.value === formData.duration);
            if (selected && selected.price !== formData.price) {
                setFormData(prev => ({ ...prev, price: selected.price }));
            }
        } else if (selectedPlan) {
            if (formData.price !== (selectedPlan.price as number) || formData.duration !== selectedPlan.minutes) {
                setFormData(prev => ({ ...prev, price: selectedPlan.price as number, duration: selectedPlan.minutes }));
            }
        }
    }, [formData.duration, formData.price, selectedPlanId, selectedPlan]);

    // Check for Payment Success from URL (Cashfree)
    useEffect(() => {
        let isMounted = true;

        const verifyPayment = async () => {
            const query = new URLSearchParams(window.location.search);
            const status = query.get('payment');
            const orderId = query.get('order_id');

            if (status === 'verify' && orderId) {
                try {
                    const isPaid = await verifyCashfreePayment(orderId);
                    if (isPaid && isMounted) {
                        setLastPaymentId(orderId);

                        // Retrieve stored booking details
                        const storedDetails = localStorage.getItem('pendingBooking');
                        if (storedDetails) {
                            try {
                                const details = JSON.parse(storedDetails);
                                await handleSuccess(orderId, details.planId, details.amount, details.isCustom, details.formData);
                            } catch (parseError) {
                                console.error("Error parsing stored details", parseError);
                                // Fallback success if details are corrupted, at least show success
                                if (isMounted) {
                                    setShowSuccess(true);
                                    setTimeout(() => { if (isMounted) setShowSuccess(false) }, 5000);
                                }
                            } finally {
                                localStorage.removeItem('pendingBooking');
                            }
                        } else {
                            if (isMounted) {
                                setShowSuccess(true);
                                setTimeout(() => { if (isMounted) setShowSuccess(false) }, 5000);
                            }
                        }
                    } else if (!isPaid && isMounted) {
                        alert('Payment verification failed. Please contact support if amount was deducted.');
                    }
                } catch (error) {
                    console.error("Verification error", error);
                    if (isMounted) alert("An error occurred while verifying payment. Please contact support.");
                } finally {
                    // Clean URL
                    if (isMounted) {
                        const newUrl = window.location.pathname;
                        window.history.replaceState({}, document.title, newUrl);
                    }
                }
            }
        };

        verifyPayment();
        return () => { isMounted = false; };
    }, []);

    // --- Payment Integration ---
    const handlePayment = (planId: string, amount: number, isCustom = false) => {
        if (!amount || amount <= 0) return;

        if (PAYMENT_GATEWAY === 'CASHFREE') {
            handleCashfreePayment(planId, amount, isCustom);
        } else {
            handleRazorpayPayment(planId, amount, isCustom);
        }
    };

    const handleCashfreePayment = async (planId: string, amount: number, isCustom = false) => {
        setLoading(planId);
        try {
            // Call Server Action directly
            const data = await createCashfreeOrder(
                amount,
                formData.email,
                formData.phone || "9999999999"
            );

            if (data.payment_session_id) {
                // Store booking details before redirect
                localStorage.setItem('pendingBooking', JSON.stringify({
                    planId,
                    amount,
                    isCustom,
                    formData
                }));

                const cashfree = new (window as any).Cashfree({
                    mode: CASHFREE_MODE === 'PRODUCTION' ? 'production' : 'sandbox'
                });
                cashfree.checkout({
                    paymentSessionId: data.payment_session_id,
                    redirectTarget: "_self"
                });
            } else {
                console.error("Cashfree init failed", data);
                alert("Could not initiate payment. Please try again.");
                setLoading(null);
            }
        } catch (error) {
            console.error("Cashfree error", error);
            setLoading(null);
            alert("Payment Error: " + (error as Error).message);
        }
    };

    const handleRazorpayPayment = (planId: string, amount: number, isCustom = false) => {
        setLoading(planId);

        const options = {
            key: RAZORPAY_KEY,
            amount: amount * 100, // in paisa
            currency: "INR",
            name: "ListnerZone",
            description: `${isCustom ? 'Custom' : ''} Voice Session (${planId})`,
            image: "https://listnerzone.com/images/listnerzone_logo.png",
            handler: function (response: any) {
                setLoading(null);
                setLastPaymentId(response.razorpay_payment_id);
                handleSuccess(response.razorpay_payment_id, planId, amount, isCustom);
            },
            prefill: {
                email: formData.email,
                contact: formData.phone || ""
            },
            theme: {
                color: "#D4AF37"
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
    const handleSuccess = async (paymentId: string, planId: string, amount: number, isCustom = false, explicitFormData?: any) => {
        // 1. Always show success content immediately so user knows payment worked
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 6000);

        const dataToUse = explicitFormData || formData;
        const currentPlan = plans.find(p => p.id === planId);

        // 2. Attempt to send email
        try {
            const templateParams = {
                to_email: dataToUse.email,
                to_name: dataToUse.name,
                user_email: dataToUse.email,
                user_phone: dataToUse.phone || "Not provided",
                plan_name: currentPlan?.name || planId,
                amount: amount,
                payment_id: paymentId,
                duration: `${dataToUse.duration} mins`,
                scheduled_time: `${dataToUse.date} ${dataToUse.time}`,
                listener_preference: dataToUse.listener,
                reason_for_visit: dataToUse.reason || "Not provided",
                site_name: "ListnerZone"
            };

            if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
                await emailjs.send(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID,
                    templateParams,
                    EMAILJS_PUBLIC_KEY
                );
                console.log("Email sent successfully");
            } else {
                console.warn("EmailJS credentials missing, skipping email.");
            }
        } catch (error) {
            // 3. Log email error but do NOT alert user, as payment was successful
            console.error("Email sending failed:", error);
        }
    };

    const handlePlanClick = (planId: string) => {
        setSelectedPlanId(planId);
        setIsModalOpen(true);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
            alert("Please fill all fields to proceed.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        setIsModalOpen(false);
        const planName = selectedPlan?.name || "Session";

        if (selectedPlanId === 'plan_5' || formData.price === 0) {
            const freeData = { ...formData };
            setLastPaymentId('FREE_BOOKING');
            handleSuccess('FREE_BOOKING', selectedPlanId || 'plan_5', 0, false, freeData);
        } else {
            handlePayment(`${planName}_${formData.duration}min`, formData.price, selectedPlanId === 'plan_custom');
        }
    };

    return (
        <section className="py-24 bg-[#020305] relative overflow-hidden selection:bg-luxury-gold/20">
            <Script src="https://checkout.razorpay.com/v1/checkout.js" />
            <Script src="https://sdk.cashfree.com/js/v3/cashfree.js" />

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {/* Header - Synced Styling */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <Sparkles className="w-3 h-3 text-luxury-gold" />
                        <span className="text-[10px] font-black text-white/60 tracking-[0.3em] uppercase">Premium Sessions</span>
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-display tracking-tight text-center leading-none">
                        The Luxury of <span className="text-luxury-gold italic">Inner Peace.</span>
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base font-medium max-w-xl mx-auto opacity-80">
                        Bespoke sessions designed for your emotional well-being. Complete discretion, absolute anonymity.
                    </p>
                </div>

                {/* Modern Pricing Grid - Compact & Screen Optimized */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 1 }}
                            className={clsx(
                                "group relative flex flex-col pt-10",
                                plan.popular && "z-10"
                            )}
                        >
                            {/* Card Body */}
                            <div className={clsx(
                                "h-full bg-white/[0.02] border rounded-[2.5rem] p-8 md:p-10 flex flex-col items-center text-center transition-all duration-700 shadow-2xl relative",
                                plan.popular ? "border-luxury-gold/50 bg-white/[0.04]" : "border-foreground/5 hover:border-white/20"
                            )}>
                                {plan.popular && (
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-luxury-gold/30" />
                                )}

                                {/* Icon Circle */}
                                <div className={clsx(
                                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-2xl transition-all duration-500",
                                    plan.bg,
                                    "group-hover:rotate-6 group-hover:scale-110"
                                )}>
                                    <plan.icon className={clsx("w-8 h-8", plan.color)} />
                                </div>

                                <h3 className="text-xl font-black text-foreground mb-2 font-display uppercase tracking-tight leading-none group-hover:text-luxury-gold transition-colors">
                                    {plan.name}
                                </h3>
                                <p className="text-[10px] text-foreground/40 font-black uppercase tracking-[0.3em] mb-10">
                                    {plan.duration}
                                </p>

                                <div className="flex items-baseline gap-1 mb-10">
                                    <span className="text-4xl md:text-5xl font-black text-foreground tracking-tighter">
                                        {plan.price === 0 ? 'FREE' : (typeof plan.price === 'number' ? `₹${plan.price}` : plan.price)}
                                    </span>
                                    {typeof plan.price === 'number' && plan.price !== 0 && (
                                        <span className="text-[9px] text-foreground/20 font-black uppercase tracking-widest">/ session</span>
                                    )}
                                </div>

                                {/* Minimal Features */}
                                <div className="w-full space-y-4 mb-10 pt-8 border-t border-foreground/5">
                                    <div className="flex items-center justify-center gap-3 text-[9px] font-black text-foreground/30 uppercase tracking-[0.2em]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                                        <span>Private Audio Sanctuary</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-3 text-[9px] font-black text-foreground/30 uppercase tracking-[0.2em]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                                        <span>Full Stealth Mode</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handlePlanClick(plan.id)}
                                    disabled={!!loading}
                                    className={clsx(
                                        "w-full py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-500 flex items-center justify-center gap-3 active:scale-95 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]",
                                        plan.popular
                                            ? "bg-white text-dark hover:bg-luxury-gold hover:text-foreground"
                                            : "bg-white/[0.05] border border-foreground/10 text-foreground hover:bg-white hover:text-dark"
                                    )}
                                >
                                    {loading === plan.id ? (
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    ) : (
                                        <>
                                            <span>Reserve Talk</span>
                                            <ArrowUpRight className="w-3.5 h-3.5" />
                                        </>
                                    )}
                                </button>
                            </div>

                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-luxury-gold rounded-full text-[8px] font-black uppercase tracking-[0.3em] text-dark shadow-2xl z-20">
                                    Elite Choice
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Footer Credits & Trust */}
                <div className="mt-16 flex flex-col items-center">
                    <p className="text-[9px] text-foreground/20 font-medium tracking-widest uppercase mb-10">
                        * Secured by SSL & Military-Grade Encryption
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-10 opacity-30 hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-foreground/40" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-white/60">Secure Gateway</span>
                        </div>
                        <span className="text-xl font-black tracking-tighter text-white font-display">CASHFREE</span>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-white/40" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-white/60">24/7 Support</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal & Success Toast Remain as they are functionally, but with updated styling */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-[#020305]/95 backdrop-blur-2xl"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative w-full max-w-lg bg-slate-900/40 border-x border-t md:border border-white/10 rounded-t-[3rem] md:rounded-[3rem] overflow-hidden shadow-2xl p-8 md:p-12 max-h-[92vh] md:max-h-[90vh] overflow-y-auto"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="mb-10 text-center lg:text-left">
                                <h3 className="text-2xl font-black text-white mb-2 tracking-tighter font-display uppercase">{selectedPlan?.name || "Booking"}</h3>
                                <p className="text-slate-500 text-sm font-medium">Bespoke session registration.</p>
                            </div>

                            <form onSubmit={handleFormSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 gap-5">
                                    <div className="relative group">
                                        <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-luxury-gold transition-colors" />
                                        <input
                                            required
                                            type="text"
                                            placeholder="Your Name (Anonymous OK)"
                                            className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-luxury-gold/50 focus:bg-white/10 outline-none transition-all text-sm font-bold text-white placeholder:text-white/20"
                                            value={formData.name}
                                            onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                        />
                                    </div>
                                    <div className="relative group">
                                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-luxury-gold transition-colors" />
                                        <input
                                            required
                                            type="email"
                                            placeholder="Email for Session Link"
                                            className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-luxury-gold/50 focus:bg-white/10 outline-none transition-all text-sm font-bold text-white placeholder:text-white/20"
                                            value={formData.email}
                                            onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                        />
                                    </div>
                                    <div className="relative group">
                                        <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-luxury-gold transition-colors" />
                                        <input
                                            required
                                            type="tel"
                                            placeholder="10-digit mobile number"
                                            maxLength={10}
                                            className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-luxury-gold/50 focus:bg-white/10 outline-none transition-all text-sm font-bold text-white placeholder:text-white/20"
                                            value={formData.phone}
                                            onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value.replace(/\D/g, '').slice(0, 10) }))}
                                        />
                                    </div>
                                    <div className="relative group">
                                        <div className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20">
                                            <User className="w-full h-full" />
                                        </div>
                                        <select
                                            className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-luxury-gold/50 focus:bg-white/10 outline-none transition-all text-sm font-bold text-white appearance-none"
                                            value={formData.listener}
                                            onChange={e => setFormData(prev => ({ ...prev, listener: e.target.value }))}
                                        >
                                            <option value="Anyone" className="bg-[#0B0F1A]">Select Listener: Anyone</option>
                                            <option value="Rahul" className="bg-[#0B0F1A]">Rahul (Resonance Guide)</option>
                                            <option value="Karan" className="bg-[#0B0F1A]">Karan (Empathy Expert)</option>
                                            <option value="Habib" className="bg-[#0B0F1A]">Habib (Soul Listener)</option>
                                            <option value="Alka" className="bg-[#0B0F1A]">Alka (Clarity Guide)</option>
                                            <option value="Raj" className="bg-[#0B0F1A]">Raj (Peace Support)</option>
                                        </select>
                                    </div>
                                    <div className="relative group">
                                        <Sparkles className="absolute left-5 top-5 w-4 h-4 text-white/20 group-focus-within:text-luxury-gold transition-colors" />
                                        <textarea
                                            placeholder="Reason for coming (Optional - e.g., 'Need someone who understands breakup pain')"
                                            rows={2}
                                            className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-luxury-gold/50 focus:bg-white/10 outline-none transition-all text-sm font-bold text-white placeholder:text-white/20 resize-none"
                                            value={formData.reason}
                                            onChange={e => setFormData(prev => ({ ...prev, reason: e.target.value }))}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-5">
                                    <div className="relative group">
                                        <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none" />
                                        <input
                                            required
                                            type="date"
                                            min={new Date().toISOString().split('T')[0]}
                                            className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-luxury-gold/50 outline-none transition-all text-sm font-bold text-white scheme-dark"
                                            value={formData.date}
                                            onChange={e => setFormData(prev => ({ ...prev, date: e.target.value }))}
                                        />
                                    </div>
                                    <div className="relative group">
                                        <Clock className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none" />
                                        <input
                                            required
                                            type="time"
                                            className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-luxury-gold/50 outline-none transition-all text-sm font-bold text-white scheme-dark"
                                            value={formData.time}
                                            onChange={e => setFormData(prev => ({ ...prev, time: e.target.value }))}
                                        />
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-white/5 flex items-center justify-between mt-6">
                                    <div>
                                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20">Total Investment</p>
                                        <p className="text-3xl font-black text-white tracking-tighter font-display">
                                            {formData.price === 0 ? 'FREE' : `₹${formData.price}`}
                                        </p>
                                    </div>
                                    <button
                                        type="submit"
                                        className="px-8 py-4 bg-white text-dark rounded-full font-black uppercase tracking-[0.2em] text-[10px] hover:bg-luxury-gold hover:text-white transition-all shadow-2xl active:scale-95"
                                    >
                                        Proceed
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-emerald-500 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4"
                    >
                        <Check className="w-5 h-5" />
                        <div>
                            <p className="font-black text-xs uppercase tracking-widest leading-none mb-1">
                                {lastPaymentId === 'FREE_BOOKING' ? 'Booking Confirmed' : 'Payment Verified'}
                            </p>
                            <p className="text-[9px] opacity-70">
                                {lastPaymentId === 'FREE_BOOKING' ? 'Session scheduled successfully' : `Transaction ID: ${lastPaymentId}`}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

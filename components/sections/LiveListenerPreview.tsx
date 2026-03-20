"use client";

import { motion } from "framer-motion";
import { User, Globe, Sparkles, Star, Mic2, MessageSquareHeart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/services/api";
import { useAuth } from "@/contexts/AuthContext";
import { Loader2 } from "lucide-react";

interface Listener {
    id: string;
    bio: string;
    experience: string;
    languages: string[];
    user: {
        name: string;
    };
}

export default function LiveListenerPreview() {
    const [listeners, setListeners] = useState<Listener[]>([]);
    const [loading, setLoading] = useState(true);
    const [callingId, setCallingId] = useState<string | null>(null);
    const { token } = useAuth();
    const router = useRouter();

    useEffect(() => {
        const fetchListeners = async () => {
            try {
                const res = await api.get('/listeners');
                setListeners(res.data);
            } catch (err) {
                console.error("Failed to fetch listeners", err);
            } finally {
                setLoading(false);
            }
        };
        fetchListeners();
    }, []);

    const handleCall = async (listenerId: string) => {
        if (!token) {
            router.push('/auth/login');
            return;
        }

        setCallingId(listenerId);
        try {
            const bookingRes = await api.post('/bookings', {
                listenerId,
                topic: "Immediate Support",
                scheduled_time: new Date().toISOString(),
                duration: 15
            });
            router.push(`/sessions/${bookingRes.data.id}`);
        } catch (err) {
            alert("Failed to start call. Please try again.");
            setCallingId(null);
        }
    };

    return (
        <section className="py-24 bg-[#020305] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <Sparkles className="w-3 h-3 text-luxury-gold" />
                        <span className="text-[10px] font-black text-white/60 tracking-[0.3em] uppercase">Human Connection</span>
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-display tracking-tight text-center leading-none">
                        Our Soulful <span className="text-luxury-gold italic">Active Listeners.</span>
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base font-medium max-w-xl mx-auto opacity-80">
                        Available right now to hold space for your story, providing absolute presence without judgment or distraction.
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center p-20">
                        <Loader2 className="w-12 h-12 text-luxury-gold animate-spin" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-16 gap-x-6 items-stretch pb-10">
                        {listeners.map((listener, idx) => (
                            <motion.div
                                key={listener.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="group relative pt-12"
                            >
                                <div className="h-full bg-linear-to-b from-white/[0.05] to-transparent border border-white/10 rounded-[3rem] p-8 pt-16 flex flex-col items-center text-center hover:border-luxury-gold/40 hover:bg-white/[0.08] transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative backdrop-blur-sm group-hover:shadow-luxury-gold/5">
                                    <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-white/[0.02] to-transparent pointer-events-none" />

                                    <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-luxury-gold/30 rounded-full blur-2xl group-hover:bg-luxury-gold/50 transition-colors duration-1000 scale-90" />
                                            <div className="w-24 h-24 rounded-full p-[2px] bg-linear-to-br from-luxury-gold via-white/20 to-luxury-gold/40 relative z-10 shadow-2xl transition-transform duration-700 group-hover:rotate-12">
                                                <div className="w-full h-full rounded-full bg-[#020305] flex items-center justify-center p-1">
                                                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
                                                        <div className="absolute inset-0 bg-linear-to-tr from-luxury-gold/20 to-transparent opacity-50" />
                                                        <User className="w-10 h-10 text-white/20" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute bottom-1 right-1 px-2 py-0.5 rounded-full bg-emerald-500 text-[6px] font-black text-white uppercase tracking-tighter border-2 border-[#020305] z-30 shadow-lg shadow-emerald-500/20">
                                                LIVE
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 mb-2">
                                        <h3 className="text-2xl font-black text-white group-hover:text-luxury-gold transition-all duration-500 font-display tracking-tight leading-none">
                                            {listener.user.name}
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-2 mb-6">
                                        <div className="w-1 h-1 rounded-full bg-luxury-gold/40" />
                                        <p className="text-[11px] text-white/40 font-bold uppercase tracking-[0.2em] line-clamp-1">
                                            Empathy Guide
                                        </p>
                                        <div className="w-1 h-1 rounded-full bg-luxury-gold/40" />
                                    </div>

                                    <div className="flex flex-wrap justify-center gap-2 mb-8 items-center">
                                        {listener.languages.slice(0, 2).map(lang => (
                                            <span key={lang} className="px-4 py-1.5 bg-white/5 rounded-xl text-[9px] font-black uppercase tracking-widest text-white/60 border border-white/5 group-hover:border-luxury-gold/20 group-hover:text-white transition-all">
                                                {lang}
                                            </span>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => handleCall(listener.id)}
                                        disabled={callingId === listener.id}
                                        className="w-full py-4 bg-white text-dark rounded-2xl font-black uppercase text-[10px] tracking-[0.25em] mb-8 hover:bg-luxury-gold hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 shadow-2xl text-center cursor-pointer group-hover:shadow-luxury-gold/20 relative overflow-hidden flex items-center justify-center gap-2"
                                    >
                                        {callingId === listener.id ? (
                                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                        ) : (
                                            <>
                                                Talk Now <Mic2 className="w-3.5 h-3.5" />
                                            </>
                                        )}
                                    </button>

                                    <div className="mt-auto w-full pt-6 border-t border-white/5 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity">
                                        <div className="flex items-center gap-2">
                                            <div className="flex -space-x-1">
                                                {[1, 2, 3].map(i => (
                                                    <div key={i} className="w-4 h-4 rounded-full border border-dark bg-slate-800 flex items-center justify-center overflow-hidden">
                                                        <User className="w-2.5 h-2.5 text-white/10" />
                                                    </div>
                                                ))}
                                            </div>
                                            <span className="text-[8px] font-black text-white/30 uppercase tracking-widest">Verified</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 py-1 px-2.5 bg-luxury-gold/10 rounded-lg border border-luxury-gold/20">
                                            <Star className="w-2.5 h-2.5 text-luxury-gold fill-luxury-gold" />
                                            <span className="text-[9px] font-black text-luxury-gold uppercase tracking-widest">4.9</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                <div className="mt-16 text-center">
                    <p className="text-slate-600 text-[8px] font-black uppercase tracking-[1em] opacity-50">Verified Empathy • Secular Support • Human Presence</p>
                </div>
            </div>
        </section>
    );
}

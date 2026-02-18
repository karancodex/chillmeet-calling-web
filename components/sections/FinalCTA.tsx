"use client";

import { motion } from "framer-motion";
import ListnerZoneLogo from "../ui/ListnerZoneLogo";
import Image from "next/image";
import Link from "next/link";

export default function FinalCTA() {
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
                    className="bg-slate-900/60 backdrop-blur-3xl p-12 md:p-24 text-center relative overflow-hidden border border-white/5 rounded-[4rem] shadow-2xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Animated Glow in CTA */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 blur-[130px] rounded-full -z-10 animate-pulse-slow" />

                    <div className="relative w-20 h-20 mx-auto mb-12 transform hover:rotate-12 transition-transform duration-1000">
                        <ListnerZoneLogo className="w-full h-full" color="white" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black mb-10 text-white leading-[0.9] tracking-[-0.04em] font-display">
                        Your Journey To Peace <br />
                        <span className="text-gradient-premium">Starts With A Hello.</span>
                    </h2>

                    <p className="text-sm text-slate-400 mb-12 max-w-xl mx-auto font-bold uppercase tracking-[0.2em] leading-relaxed opacity-60">
                        Don't carry the weight alone. Connect with a listener now and feel the healing power of being heard.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link href="/#pricing" className="px-12 py-5 bg-primary text-white font-black text-lg rounded-full transition-all duration-500 shadow-[0_20px_40px_rgba(124,108,255,0.4)] hover:shadow-[0_25px_50px_rgba(124,108,255,0.6)] transform hover:-translate-y-1 active:scale-95 uppercase tracking-[0.2em]">
                            Book A Session Now
                        </Link>
                    </div>


                </motion.div>
            </div>
        </section>
    );
}

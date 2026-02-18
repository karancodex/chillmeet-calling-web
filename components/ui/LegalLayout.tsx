"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LegalLayout({ children, title }: { children: React.ReactNode, title: string }) {
    return (
        <main className="min-h-screen bg-dark text-foreground flex flex-col">
            <Navbar />

            {/* Background Image Layer */}
            <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
                <Image
                    src="/images/hero_banner_premium.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-5"
                />
                <div className="absolute inset-0 bg-dark/80" />
            </div>

            <div className="flex-1 container mx-auto px-6 py-32 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-6">
                        Legal Documentation
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-0 text-white tracking-tighter uppercase">{title}</h1>
                    <div className="h-1 w-20 bg-primary mt-8 rounded-full" />
                </motion.div>

                <motion.article
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="glass-card p-10 md:p-16 border-white/5 bg-white/2
                        [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-white [&_h2]:uppercase [&_h2]:tracking-tight [&_h2]:mt-12 [&_h2]:mb-6 first:[&_h2]:mt-0
                        [&_p]:text-white/50 [&_p]:font-bold [&_p]:leading-relaxed [&_p]:mb-4
                        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-4 [&_ul]:my-6 [&_ul]:text-white/50
                        [&_li]:marker:text-primary [&_li]:font-bold
                        [&_strong]:text-primary [&_strong]:font-black
                        [&_a]:text-primary [&_a]:no-underline hover:[&_a]:underline"
                >
                    {children}
                </motion.article>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.5em]">Secure. Private. Empathetic.</p>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}

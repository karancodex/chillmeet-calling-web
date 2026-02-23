"use client";

import Link from "next/link";
import ListnerZoneLogo from "./ListnerZoneLogo";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-[#020305] pt-24 pb-12 border-t border-white/5 overflow-hidden">
            {/* Ambient Background Energy */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-luxury-gold/5 blur-[150px] rounded-full -z-10 opacity-30" />

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">

                    {/* Brand Column */}
                    <div className="md:col-span-4 flex flex-col items-start">
                        <Link href="/" className="flex items-center gap-3 mb-8 group">
                            <div className="relative w-10 h-10 transform group-hover:rotate-12 transition-all duration-700">
                                <ListnerZoneLogo className="w-full h-full" color="white" />
                                <div className="absolute inset-0 bg-luxury-gold blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
                            </div>
                            <span className="text-2xl font-black text-white tracking-tighter uppercase font-display">
                                Listner<span className="text-luxury-gold">Zone</span>
                            </span>
                        </Link>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed mb-10 max-w-xs transition-colors hover:text-slate-400">
                            The world's premier digital sanctuary for anonymous emotional connection. We provide the luxury of being truly heard.
                        </p>
                        <div className="flex gap-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/5 hover:border-luxury-gold/30 hover:bg-white/[0.06] transition-all cursor-pointer" />
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-white font-black text-[10px] mb-8 uppercase tracking-[0.3em] flex items-center gap-2">
                                <span className="w-1 h-1 bg-luxury-gold rounded-full" />
                                Experience
                            </h4>
                            <ul className="space-y-4 text-[11px] text-slate-500 font-black uppercase tracking-widest">
                                <li><Link href="/about" className="hover:text-luxury-gold transition-all duration-300">About Us</Link></li>
                                <li><Link href="/blog" className="hover:text-luxury-gold transition-all duration-300">The Journal</Link></li>
                                <li><Link href="/#how-it-works" className="hover:text-luxury-gold transition-all duration-300">Methodology</Link></li>
                                <li><Link href="/#pricing" className="hover:text-luxury-gold transition-all duration-300">Bespoke Plans</Link></li>
                                <li><Link href="/contact" className="hover:text-luxury-gold transition-all duration-400">Contact</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-black text-[10px] mb-8 uppercase tracking-[0.3em] flex items-center gap-2">
                                <span className="w-1 h-1 bg-luxury-gold rounded-full" />
                                Support
                            </h4>
                            <ul className="space-y-4 text-[11px] text-slate-500 font-black uppercase tracking-widest">
                                <li><Link href="/faq" className="hover:text-luxury-gold transition-all duration-300">FAQ</Link></li>
                                <li><Link href="/safety" className="hover:text-luxury-gold transition-all duration-300">Safety Policy</Link></li>
                                <li><Link href="/crisis" className="hover:text-red-500 transition-all duration-300 text-red-500/40">Crisis Relief</Link></li>
                            </ul>
                        </div>

                        <div className="col-span-2 md:col-span-1">
                            <h4 className="text-white font-black text-[10px] mb-8 uppercase tracking-[0.3em] flex items-center gap-2">
                                <span className="w-1 h-1 bg-luxury-gold rounded-full" />
                                Privacy
                            </h4>
                            <ul className="space-y-4 text-[11px] text-slate-500 font-black uppercase tracking-widest">
                                <li><Link href="/privacy" className="hover:text-luxury-gold transition-all duration-300">Data Vault</Link></li>
                                <li><Link href="/terms" className="hover:text-luxury-gold transition-all duration-300">Terms of Presence</Link></li>
                                <li><Link href="/disclaimer" className="hover:text-luxury-gold transition-all duration-300">Legal Note</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 text-[9px] text-white/30 font-black uppercase tracking-[0.5em]">
                    <div className="flex items-center gap-2 mb-6 md:mb-0">
                        <Sparkles className="w-3 h-3 text-luxury-gold/50" />
                        <p>&copy; {new Date().getFullYear()} LISTNERZONE. Elite Sanctuary.</p>
                    </div>
                    <div className="flex gap-8 italic opacity-50">
                        <span>Private</span>
                        <span>Human</span>
                        <span>Absolute</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

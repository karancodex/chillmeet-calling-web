import Link from "next/link";
import { MessageCircle } from "lucide-react";
import ListnerZoneLogo from "./ListnerZoneLogo";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative bg-dark pt-24 pb-12 border-t border-white/5 overflow-hidden">
            {/* Premium Background Banner Overlay */}
            <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
                <Image
                    src="/images/hero_banner_premium.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/80 to-transparent" />
            </div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1 text-white">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="relative w-8 h-8 transform group-hover:rotate-12 transition-transform">
                                <ListnerZoneLogo className="w-full h-full" color="white" />
                            </div>
                            <span className="text-xl font-black bg-clip-text text-transparent bg-linear-to-r from-primary via-secondary to-accent tracking-tighter">ListnerZone</span>
                        </Link>
                        <p className="text-slate-400 text-xs font-bold leading-relaxed mb-8 max-w-xs">
                            A sanctuary for your thoughts. Talk anonymously, listen empathetically, and find your peace.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-black text-xs mb-6 uppercase tracking-[0.2em]">Company</h4>
                        <ul className="space-y-3 text-xs text-slate-400 font-bold uppercase tracking-widest">
                            <li><Link href="/about" className="hover:text-primary transition-all">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-all">Contact</Link></li>
                            <li><Link href="/#pricing" className="hover:text-primary transition-all">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-black text-xs mb-6 uppercase tracking-[0.2em]">Support</h4>
                        <ul className="space-y-3 text-xs text-slate-400 font-bold uppercase tracking-widest">
                            <li><Link href="/faq" className="hover:text-primary transition-all">FAQ</Link></li>
                            <li><Link href="/safety" className="hover:text-primary transition-all">Safety Policy</Link></li>
                            <li><Link href="/crisis" className="hover:text-red-500 transition-all text-red-500/60 uppercase tracking-widest">Crisis Support</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-black text-xs mb-6 uppercase tracking-[0.2em]">Legal</h4>
                        <ul className="space-y-3 text-xs text-slate-400 font-bold uppercase tracking-widest">
                            <li><Link href="/privacy" className="hover:text-primary transition-all">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary transition-all">Terms of Service</Link></li>
                            <li><Link href="/disclaimer" className="hover:text-primary transition-all">Disclaimer</Link></li>
                            <li><Link href="/refund" className="hover:text-primary transition-all">Refund Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-[9px] text-slate-500 font-black uppercase tracking-[0.4em]">
                    <p>&copy; {new Date().getFullYear()} LISTNERZONE. Crafted For Peace.</p>
                    <p className="mt-4 md:mt-0 italic">Secure. Private. Empathetic.</p>
                </div>
            </div>
        </footer>
    );
}

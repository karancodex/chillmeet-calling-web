"use client";

import { AlertTriangle } from "lucide-react";

export default function EmergencyNotice() {
    return (
        <section className="bg-dark border-t border-red-500/10 py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                    <h3 className="text-lg font-black text-red-500 mb-1 uppercase tracking-widest">Safety Notice</h3>
                    <p className="text-xs text-white/40 max-w-4xl font-bold italic leading-relaxed">
                        ChillMeet is an emotional support platform.
                        <span className="text-white/60"> Not a replacement for therapy.</span>
                        If in crisis, please call emergency services.
                    </p>
                </div>
            </div>
        </section>
    );
}

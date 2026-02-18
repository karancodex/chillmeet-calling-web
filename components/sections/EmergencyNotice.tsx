"use client";

import { AlertTriangle } from "lucide-react";

export default function EmergencyNotice() {
    return (
        <section className="bg-dark border-t border-red-500/10 py-16">
            <div className="container mx-auto px-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20 mb-6">
                    <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>
                <div>
                    <h3 className="text-xl font-black text-red-500 mb-4 uppercase tracking-[0.3em] font-display">Legal & Safety Notice</h3>
                    <p className="text-sm text-white/50 max-w-3xl font-bold leading-relaxed mb-6">
                        ListnerZone is an emotional support platform and does not provide therapy, counseling, or medical services.
                        <span className="text-white block mt-4 font-black text-base uppercase tracking-tight">
                            Any actions taken following a call are the sole responsibility of the user. ListnerZone and its listeners are not liable for any post-session outcomes.
                        </span>
                    </p>
                    <p className="text-xs text-red-500/60 font-black uppercase tracking-widest">
                        If you are in immediate danger or a crisis, please contact your local emergency services immediately.
                    </p>
                </div>
            </div>
        </section>
    );
}

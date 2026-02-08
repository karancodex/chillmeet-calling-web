"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import Image from "next/image";

const stories = [
    {
        name: "Anonymous User",
        initials: "AU",
        story: "I called at 2:30 AM. I didn't even realize I needed someone to just listen. It felt like a weight was lifted off my shoulders.",
        role: "Verified Talker",
        time: "2 days ago"
    },
    {
        name: "Anonymous User",
        initials: "AU",
        story: "Felt so much lighter after talking. The listener was so patient and empathetic. I never felt judged for my thoughts.",
        role: "Verified Talker",
        time: "5 hours ago"
    },
    {
        name: "Anonymous User",
        initials: "AU",
        story: "No judgment, just pure empathy. Exactly what I needed when I was going through a tough breakup. Thank you.",
        role: "Verified Talker",
        time: "Just now"
    }
];

export default function UserStories() {
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
                        Real Stories Of <br />
                        <span className="text-gradient">Finding Sukun.</span>
                    </h2>
                    <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.4em]">From those who found their light in the silence.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stories.map((story, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card p-8 border border-white/5 relative group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-black text-xs border border-white/5">
                                    {story.initials}
                                </div>
                                <div>
                                    <h4 className="text-sm font-black text-white">{story.name}</h4>
                                    <p className="text-[9px] text-white/40 font-black uppercase tracking-widest">{story.role}</p>
                                </div>
                            </div>

                            <p className="text-sm text-white/60 leading-relaxed font-medium mb-6 italic">
                                "{story.story}"
                            </p>

                            <div className="flex items-center gap-2">
                                <div className="flex-1 h-px bg-white/5" />
                                <div className="flex gap-1 h-4 items-center">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <motion.div
                                            key={i}
                                            className="w-1 bg-primary/40 rounded-full group-hover:bg-primary transition-colors"
                                            animate={{ height: [4, 12, 4] }}
                                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { blogs } from "@/data/blogs";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BlogListing() {
    return (
        <main className="min-h-screen bg-[#020305] text-white">
            <Navbar />

            <section className="pt-32 pb-24 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-linear-to-b from-primary/10 to-transparent -z-10 blur-[120px]" />

                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
                        >
                            <Sparkles className="w-3 h-3 text-luxury-gold" />
                            <span className="text-[10px] font-black text-white/60 tracking-[0.3em] uppercase">The Sanctuary Journal</span>
                        </motion.div>
                        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 font-display tracking-tight leading-none">
                            Insights into <span className="text-luxury-gold italic">Inner Peace.</span>
                        </h1>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium opacity-80">
                            Explore our articles on loneliness, overthinking, and the transformative power of human connection.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog, idx) => (
                            <motion.article
                                key={blog.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-luxury-gold/30 hover:bg-white/[0.04] transition-all duration-500 shadow-2xl flex flex-col"
                            >
                                <Link href={`/blog/${blog.slug}`} className="block relative h-64 overflow-hidden">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        className="object-cover transition-transform duration-[4s] group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-[#020305] via-transparent to-transparent" />
                                    <div className="absolute top-6 left-6">
                                        <span className="px-4 py-1.5 rounded-full bg-luxury-gold/20 backdrop-blur-md border border-luxury-gold/20 text-[9px] font-black uppercase tracking-widest text-luxury-gold">
                                            {blog.category}
                                        </span>
                                    </div>
                                </Link>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-[10px] text-white/40 font-bold uppercase tracking-widest mb-4">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-3 h-3 text-luxury-gold" />
                                            {blog.date}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-3 h-3 text-luxury-gold" />
                                            {blog.readTime}
                                        </div>
                                    </div>
                                    <Link href={`/blog/${blog.slug}`}>
                                        <h2 className="text-xl md:text-2xl font-black text-white mb-4 font-display leading-tight group-hover:text-luxury-gold transition-colors">
                                            {blog.title}
                                        </h2>
                                    </Link>
                                    <p className="text-slate-500 text-sm font-medium mb-8 line-clamp-3">
                                        {blog.description}
                                    </p>
                                    <div className="mt-auto">
                                        <Link
                                            href={`/blog/${blog.slug}`}
                                            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-luxury-gold transition-colors group/link"
                                        >
                                            Read Article
                                            <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

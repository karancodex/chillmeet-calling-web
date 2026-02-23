"use client";

import { blogs } from "@/data/blogs";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Sparkles, User, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogPostPage() {
    const params = useParams();
    const blog = blogs.find(b => b.slug === params.slug);

    if (!blog) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#020305] text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-linear-to-b from-primary/10 to-transparent -z-10 blur-[120px]" />

                <div className="container mx-auto px-6 max-w-4xl">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-luxury-gold transition-colors mb-12 group"
                    >
                        <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
                        Back to Journal
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-10"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-4 py-1.5 rounded-full bg-luxury-gold/20 backdrop-blur-md border border-luxury-gold/20 text-[9px] font-black uppercase tracking-widest text-luxury-gold">
                                {blog.category}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-6xl font-black text-white mb-8 font-display tracking-tight leading-[1.1]">
                            {blog.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-8 py-6 border-y border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                    <User className="w-5 h-5 text-luxury-gold" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-white/40 font-black uppercase tracking-widest">Written By</p>
                                    <p className="text-sm font-bold text-white">ListenerZone Editorial</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-1.5 text-white/40 font-bold uppercase tracking-widest text-[10px]">
                                    <Calendar className="w-3.5 h-3.5 text-luxury-gold" />
                                    {blog.date}
                                </div>
                                <div className="flex items-center gap-1.5 text-white/40 font-bold uppercase tracking-widest text-[10px]">
                                    <Clock className="w-3.5 h-3.5 text-luxury-gold" />
                                    {blog.readTime}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="pb-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative h-[300px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 shadow-2xl border border-white/5"
                    >
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>

                    <div className="relative">
                        {/* Article Content */}
                        <div className="article-content prose prose-invert prose-luxury max-w-none">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {blog.content}
                            </ReactMarkdown>
                        </div>

                        {/* Sidebar/Floating elements could go here */}
                    </div>

                    {/* Footer for Article */}
                    <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                                <Share2 className="w-3 h-3 text-luxury-gold" />
                                Share Article
                            </button>
                        </div>
                        <div className="flex flex-col items-center md:items-end">
                            <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-4">You are not alone.</p>
                            <Link
                                href="/#pricing"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-black uppercase tracking-widest text-[10px] transition-all duration-500 hover:scale-105 shadow-xl"
                            >
                                Start Your First Call
                                <Sparkles className="w-3 h-3" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx global>{`
                .article-content h1 {
                    font-size: 2.5rem;
                    font-weight: 900;
                    margin-top: 3rem;
                    margin-bottom: 1.5rem;
                    letter-spacing: -0.05em;
                    line-height:1.1;
                    display:none; /* Already in Hero */
                }
                .article-content h2 {
                    font-size: 2rem;
                    font-weight: 900;
                    margin-top: 3.5rem;
                    margin-bottom: 1.5rem;
                    color: white;
                    letter-spacing: -0.02em;
                    line-height:1.2;
                }
                .article-content h3 {
                    font-size: 1.25rem;
                    font-weight: 800;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    color: #D4AF37;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }
                .article-content p {
                    font-size: 1.125rem;
                    line-height: 1.8;
                    color: rgba(255,255,255,0.7);
                    margin-bottom: 1.5rem;
                    font-weight: 500;
                }
                .article-content ul, .article-content ol {
                    margin-bottom: 2rem;
                    margin-left: 1.5rem;
                }
                .article-content li {
                    font-size: 1.125rem;
                    line-height: 1.8;
                    color: rgba(255,255,255,0.7);
                    margin-bottom: 0.75rem;
                    list-style-type: disc;
                }
                .article-content strong {
                    color: #D4AF37;
                    font-weight: 700;
                }
                @media (max-width: 768px) {
                    .article-content h2 { font-size: 1.5rem; }
                    .article-content p { font-size: 1rem; }
                }
            `}</style>
        </main>
    );
}

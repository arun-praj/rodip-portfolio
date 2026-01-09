"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
    return (
        <section className="relative w-full py-20 bg-[#1A1A1A] text-white overflow-hidden">
            <div className="container px-6 md:px-12 mx-auto">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:gap-24 items-center">

                    {/* Text Content */}
                    <div className="order-2 md:order-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-sm font-bold tracking-widest uppercase text-white/40 mb-2">Hello</div>
                            <h2 className="text-5xl font-bold font-oswald uppercase tracking-wide mb-6">
                                I'm Rodip Duwal
                            </h2>
                            <p className="text-gray-400 leading-relaxed max-w-md">
                                Passionate UI/UX designer dedicated to crafting exceptional digital
                                experiences. With a keen eye for detail and a user-centric approach,
                                I transform ideas into intuitive and visually stunning designs.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-4">
                                <CheckCircle2 className="w-6 h-6 text-white" />
                                <span className="text-xl font-bold">10+</span>
                                <span className="text-sm text-gray-400 uppercase tracking-wide">
                                    Years Experience
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <CheckCircle2 className="w-6 h-6 text-white" />
                                <span className="text-xl font-bold">64+</span>
                                <span className="text-sm text-gray-400 uppercase tracking-wide">
                                    Completed Project
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <CheckCircle2 className="w-6 h-6 text-white" />
                                <span className="text-xl font-bold">151+</span>
                                <span className="text-sm text-gray-400 uppercase tracking-wide">
                                    Happy Client
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image */}
                    <div className="order-1 md:order-2 relative flex justify-center md:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative w-full max-w-sm aspect-[3/4]"
                        >
                            {/* Background decorative circle */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] border border-white/10 rounded-full rotate-45 -z-10" />

                            <Image
                                src="/assets/about-person.png"
                                alt="Rodip Duwal About"
                                fill
                                className="object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
                            />

                            {/* Decorative lines */}
                            <div className="absolute top-4 right-4 text-white/80">
                                <svg width="40" height="40" viewBox="0 0 40 40">
                                    <path d="M10 20 L20 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M15 25 L25 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M20 30 L30 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>

                            <div className="absolute bottom-10 -left-10 z-20">
                                <svg width="60" height="30" viewBox="0 0 60 30" className="text-brand-orange">
                                    <path d="M0 15 Q 15 0 30 15 T 60 15" fill="none" stroke="currentColor" strokeWidth="2" />
                                    <path d="M0 20 Q 15 5 30 20 T 60 20" fill="none" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

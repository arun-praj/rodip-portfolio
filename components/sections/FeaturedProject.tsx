"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function FeaturedProject() {
    return (
        <section className="w-full py-24 bg-[#F5F5F3]">
            <div className="container px-6 md:px-12 mx-auto">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-4xl font-bold font-oswald text-[#1A1A1A] mb-4">
                        Featured Project
                    </h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm overflow-hidden"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content - Image */}
                        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                            <Image
                                src="/assets/project-dashboard.png"
                                alt="Crypto Dashboard"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Right Content - Info */}
                        <div className="space-y-6">
                            <Badge variant="secondary" className="bg-brand-orange/10 text-brand-orange hover:bg-brand-orange/20 rounded-md px-3 py-1 font-medium">
                                UI Design
                            </Badge>

                            <h3 className="text-3xl font-bold font-oswald text-[#1A1A1A]">
                                Bitx - Crypto Dashboard Design
                            </h3>

                            <p className="text-gray-500 leading-relaxed mb-6">
                                Holisticly fabricate opencatalyst to after top-line catalysts for change.
                                Synergisti communicate installed base..
                            </p>

                            <div className="flex gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-brand-orange" />
                                <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                                <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-light-bg pt-20">
            {/* Background Typography - LAYER 1 (Back/Solid) */}
            <h1 className="absolute top-[20%] text-[15vw] leading-none font-black font-oswald text-black/90 z-0 tracking-tighter uppercase text-center select-none pointer-events-none">
                I'M A UI/UX
                <br />
                <span className="relative z-20">DESIGNER</span>
            </h1>

            {/* Foreground Typography - LAYER 2 (Front/Outline) */}
            <h1 className="absolute top-[20%] text-[15vw] leading-none font-black font-oswald text-transparent z-20 tracking-tighter uppercase text-center select-none pointer-events-none"
                style={{ WebkitTextStroke: "2px white" }}>
                I'M A UI/UX
                <br />
                <span className="relative">DESIGNER</span>
            </h1>

            {/* Decorative Elements */}
            <div className="absolute top-[35%] left-[25%] -z-10 animate-spin-slow">
                {/* Orange Organic Blob Background Shape */}
                <svg width="400" height="400" viewBox="0 0 200 200" className="text-brand-orange opacity-80 w-[500px] h-[500px]">
                    <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,96.6,-5C95.1,9.2,85.4,22.7,75.3,35.2C65.2,47.7,54.7,59.2,42.5,68.2C30.3,77.2,16.4,83.7,1.8,80.6C-12.8,77.5,-28.1,64.8,-41.8,54.6C-55.5,44.4,-67.6,36.7,-75.4,24.8C-83.2,12.9,-86.7,-3.2,-82.9,-17.6C-79.1,-32,-68,-44.7,-55.8,-52.4C-43.6,-60.1,-30.3,-62.8,-17.4,-65.4C-4.5,-68,-14.7,-93.6,5.3,-97.6C25.3,-101.6,44.7,-69.2,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
            </div>

            {/* Hero Image */}
            <div className="relative z-10 mt-12 md:mt-0">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-[350px] md:w-[500px] h-[500px] md:h-[700px]"
                >
                    <Image
                        src="/assets/hero-person.png"
                        alt="UI/UX Designer"
                        fill
                        className="object-contain object-bottom mix-blend-multiply"
                        priority
                    />
                </motion.div>

                {/* Scroll Badge */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
                    <div className="relative w-24 h-24">
                        <div className="absolute inset-0 bg-black/80 rounded-full flex items-center justify-center animate-spin-slow-reverse">
                            <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                                <path
                                    id="curve"
                                    d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0"
                                    fill="transparent"
                                />
                                <text className="text-[10px] font-bold uppercase tracking-[0.2em] fill-white">
                                    <textPath xlinkHref="#curve">
                                        Scroll Down • Scroll Down •
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-12 bg-brand-orange rounded-full flex items-center justify-center">
                                <div className="w-1 h-3 bg-white rounded-full animate-bounce" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

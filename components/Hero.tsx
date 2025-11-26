"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip"
      style={{
        background:
          "radial-gradient(ellipse 200% 100% at bottom left, #183EC2, #EAEEFE 100%)",
      }}
    >
      <div className="container mx-auto px-44">
        <div className="md:flex items-center justify-center gap-10">
          <div className="md:w-[478px]">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Enterprise Signage Platform
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Control Your Displays Everywhere
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Manage unlimited digital signage displays from a single dashboard.
              Schedule content, track performance, and engage your audience in
              real-time across all locations.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <Link href="https://ads-on-tv.web.app/#/auth/login">
                <button className="px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight bg-black text-white cursor-pointer">
                  Get started
                </button>
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center md:flex-1 overflow-visible">
            <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
              <motion.img
                src="/assets/cog.png"
                alt="Cog"
                className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
                animate={{
                  translateY: [-30, 30],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "mirror",
                  duration: 3,
                  ease: "easeInOut",
                }}
              />
              <motion.img
                src="/assets/cylinder.png"
                width={220}
                height={220}
                alt="Cylinder image"
                className="hidden md:block -top-8 -left-32 md:absolute"
                style={{
                  translateY: translateY,
                }}
              />
              <motion.img
                src="assets/noodle.png"
                width={220}
                alt="Noodle image"
                className="hidden lg:block top-[524px] left-[448px] absolute rotate-[30deg]"
                style={{
                  rotate: 30,
                  translateY: translateY,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

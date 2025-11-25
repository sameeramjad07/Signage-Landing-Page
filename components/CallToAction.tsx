"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip px-12"
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto relative">
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Start Managing Your Displays Today
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            Join thousands of businesses using SignageHub to deliver engaging
            content across all their digital displays.
          </p>

          <motion.img
            src="/assets/star.png"
            alt="star image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src="/assets/spring.png"
            alt="spring image"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY,
            }}
          />
        </div>

        <div className="flex gap-2 mt-10 justify-center">
          <button className="px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight bg-black text-white">
            Start Free Trial
          </button>
          <button className="px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight text-black bg-transparent gap-1">
            <span>Schedule Demo</span>
            <Image
              src="/assets/arrow-right.svg"
              alt="Arrow Right"
              width={16}
              height={16}
              className="h-5 w-5"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

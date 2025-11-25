"use client";
import acmeLogo from "@/public/assets/logo-acme.png";
import quantamLogo from "@/public/assets/logo-quantum.png";
import echoLogo from "@/public/assets/logo-echo.png";
import celestialLogo from "@/public/assets/logo-celestial.png";
import pulseLogo from "@/public/assets/logo-pulse.png";
import apexLogo from "@/public/assets/logo-apex.png";
import { motion } from "framer-motion";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white px-12">
      <div className="container">
        <div className="text-center text-sm text-gray-600 font-medium mb-6">
          Trusted by leading brands
        </div>
        <div
          className="flex overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black, transparent)",
          }}
        >
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src="/assets/logo-acme.png"
              alt="Acme logo"
              className="h-8 w-auto"
              height={100}
              width={150}
            />
            <Image
              src="/assets/logo-quantum.png"
              alt="Quantum logo"
              className="h-8 w-auto"
              height={100}
              width={150}
            />
            <Image
              src="/assets/logo-echo.png"
              alt="Echo logo"
              className="h-8 w-auto"
              height={100}
              width={150}
            />
            <Image
              src="/assets/logo-celestial.png"
              alt="Celestial logo"
              className="h-8 w-auto"
              height={100}
              width={150}
            />
            <Image
              src="/assets/logo-pulse.png"
              alt="Pulse logo"
              className="h-8 w-auto"
              height={100}
              width={150}
            />
            <Image
              src="/assets/logo-apex.png"
              alt="Apex logo"
              className="h-8 w-auto"
              height={100}
              width={150}
            />

            <Image
              src="/assets/logo-acme.png"
              alt="Acme logo"
              className="h-8 w-auto"
              height={100}
              width={150}
            />
            <Image
              src="/assets/logo-quantum.png"
              alt="Quantum logo"
              className="h-8 w-auto"
              height={100}
              width={150}
            />
            <Image
              src="/assets/logo-echo.png"
              alt="Echo logo"
              className="h-8 w-auto"
              height={100}
              width={150}
            />
            <Image
              src="/assets/logo-celestial.png"
              alt="Celestial logo"
              className="h-8 w-auto"
              height={100}
              width={150}
            />
            <Image
              src="/assets/logo-pulse.png"
              alt="Pulse logo"
              className="h-8 w-auto"
              height={100}
              width={150}
            />
            <Image
              src="/assets/logo-apex.png"
              alt="Apex logo"
              className="h-8 w-auto"
              height={100}
              width={150}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

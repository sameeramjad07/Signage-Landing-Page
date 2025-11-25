"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const VideoShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} className="bg-white py-24 overflow-hidden px-12">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Video Section - 2/3 width */}
          <motion.div
            className="lg:col-span-2"
            style={{
              translateY: translateY,
            }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="SignageHub Platform Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full aspect-video rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Text Section - 1/3 width */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-3xl font-bold tracking-tight mb-3">
                  See It in Action
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Watch how businesses transform their customer engagement with
                  SignageHub's intuitive platform.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Real-time Content Updates
                    </p>
                    <p className="text-sm text-gray-600">
                      Change content instantly across all displays
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Advanced Analytics
                    </p>
                    <p className="text-sm text-gray-600">
                      Track engagement and performance metrics
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Multi-Location Support
                    </p>
                    <p className="text-sm text-gray-600">
                      Manage unlimited displays from one dashboard
                    </p>
                  </div>
                </div>
              </div>

              <button className="px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight bg-black text-white w-full mt-4">
                Explore Platform
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

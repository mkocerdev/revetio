"use client";

import React from "react";
import { motion } from "framer-motion";

const PortfolioVideo = () => {
  const slidingWords = [
    "Brand Development",
    "Digital Creative",
    "Web Development",
    "UI/UX Design",
    "Branding",
    "Advertising",
    "Creative Strategy",
    "Visual Identity",
  ];

  return (
    <>
      <section className="relative w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full"
        >
          <video
            className="w-full h-auto object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            style={{ backgroundColor: "transparent" }}
          >
            <source src="/assets/portfolio.mp4?v=3" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </section>

      {/* Sliding Words Section */}
      <div className="relative overflow-hidden pb-8">
        <div className="flex whitespace-nowrap items-center">
          {/* First set of words */}
          <motion.div
            className="flex items-center"
            animate={{
              x: [0, -50 + "%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 80,
                ease: "linear",
              },
            }}
          >
            {slidingWords.map((word, index) => (
              <React.Fragment key={`first-${index}`}>
                <div className="px-6 xl:px-12 text-3xl xl:text-12xl font-medium font-cal-sans text-light uppercase leading-none">
                  {word}
                </div>
              </React.Fragment>
            ))}
          </motion.div>
          {/* Duplicate set for seamless loop */}
          <motion.div
            className="flex items-center"
            animate={{
              x: [0, -50 + "%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 80,
                ease: "linear",
              },
            }}
          >
            {slidingWords.map((word, index) => (
              <React.Fragment key={`second-${index}`}>
                <div className="px-6 xl:px-12 text-3xl xl:text-12xl font-medium font-cal-sans text-light uppercase leading-none">
                  {word}
                </div>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PortfolioVideo;

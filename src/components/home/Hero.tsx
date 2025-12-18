"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* 3D Sphere Background */}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-24 h-[80vh] min-h-[600px] flex items-end justify-start">
        <div className="absolute bottom-0 right-0">
          <Image
            src="/assets/revetio-icon.svg"
            alt="Revetio Icon"
            width={300}
            height={300}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className=""
        >
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-4xl xl:text-5xl font-medium text-gray-900 !leading-[1.2] tracking-tight"
          >
            We serve early stage & <br /> established businesses <br /> through
            future-proof <br />
            brand development & <br />
            <span>digital creative.</span>
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

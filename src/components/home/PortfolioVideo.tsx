"use client";

import { motion } from "framer-motion";

const PortfolioVideo = () => {
  return (
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
  );
};

export default PortfolioVideo;

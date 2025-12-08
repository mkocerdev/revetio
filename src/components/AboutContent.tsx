"use client";

import { motion } from "framer-motion";

const AboutContent = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-24 h-[70vh] min-h-[400px] flex items-end justify-start">
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
              A creative team of passionate <br /> individuals committed to
              principles <br /> of excellence is formed.
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 tracking-tight">
              Our Story
            </h2>
            <div className="">
              <p className="text-lg text-gray-600 max-w-2xl">
                We believe that great design and technology should work together
                seamlessly to create experiences that users love and businesses
                rely on.
              </p>
              <p className="text-lg text-gray-600 max-w-2xl">
                Today, we&apos;re proud to have helped hundreds of businesses
                establish their digital presence and achieve their goals through
                innovative web solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl xl:text-4xl font-medium text-gray-900 tracking-tight mb-4">
              The principles that guide everything we do
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              We create beautiful, intuitive interfaces that users love to
              interact with, build robust, scalable solutions using cutting-edge
              technologies, and help businesses achieve their goals through
              thoughtful digital strategy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: "Design",
                description:
                  "We create beautiful, intuitive interfaces that users love to interact with.",
              },
              {
                title: "Development",
                description:
                  "We build robust, scalable solutions using cutting-edge technologies.",
              },
              {
                title: "Strategy",
                description:
                  "We help businesses achieve their goals through thoughtful digital strategy.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-medium text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-left mt-20"
          >
            <div className="border border-gray-200 rounded-2xl p-8 bg-gray-50 backdrop-blur-lg">
              <h3 className="text-2xl font-medium text-gray-900 mb-4">
                Ready to start your project?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl">
                Let&apos;s discuss how we can help bring your vision to life
                with our comprehensive creative and digital services.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 font-medium text-sm tracking-wide"
              >
                Get Started
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;

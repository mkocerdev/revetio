"use client";

import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    "Creative concepts",
    "Digital strategy",
    "User experience",
    "Interface design",
    "Web development",
    "Immersive campaigns",
    "Experiential touchpoints",
    "Virtual events",
    "App development",
  ];

  return (
    <div className="bg-white">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-left mb-20"
          >
            <h2 className="text-3xl xl:text-4xl font-medium text-gray-900 tracking-tight mb-4">
              Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              We provide comprehensive creative and digital solutions to help
              your business grow and succeed in the modern marketplace.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden">
                  {/* Service Title */}
                  <h3 className="text-2xl xl:text-3xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors duration-500 leading-tight">
                    {service}
                  </h3>

                  {/* Hover Effect Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute bottom-0 left-0 h-0.5 bg-gray-900 origin-left"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
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

export default ServicesSection;

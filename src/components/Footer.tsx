"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Brand Strategy",
    "Visual Identity",
    "UI/UX Design",
    "Web Development",
  ];

  return (
    <footer className="bg-white text-black border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        {/* Main Content - 60% Left, 40% Right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left Section - 60% (3/5 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-3 flex flex-col justify-end space-y-6"
          >
            {/* Logo */}
            <Link href="/" className="block">
              <Image
                src="/assets/logo.svg"
                alt="Revetio"
                width={300}
                height={120}
              />
            </Link>

            {/* Copyright */}
            <div>
              <p className="text-gray-500 text-sm">
                All Rights Reserved. Copyright ©{currentYear}.
              </p>
            </div>
          </motion.div>

          {/* Right Section - 40% (2/5 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Services */}
            <div className="space-y-6">
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="text-gray-600 text-base ">
                    {service}
                  </div>
                ))}
              </div>
            </div>

            {/* Pages */}
            <div className="space-y-6">
              <div className="space-y-3">
                <Link
                  href="/about"
                  className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 text-base "
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 text-base "
                >
                  Services
                </Link>
                <Link
                  href="/portfolio"
                  className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 text-base "
                >
                  Portfolio
                </Link>
                <Link
                  href="/contact"
                  className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 text-base "
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

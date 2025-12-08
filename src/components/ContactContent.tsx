"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Send, CheckCircle, ArrowRight } from "lucide-react";

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-2"
              >
                <p className="text-sm font-light tracking-[0.2em] uppercase text-gray-500">
                  Get in Touch
                </p>
                <div className="w-16 h-px bg-gray-300"></div>
              </motion.div>

              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-light text-gray-900 leading-[0.9] tracking-tight">
                Let&apos;s Start
                <br />
                <span className="font-normal">Your</span>
                <br />
                <span className="font-light">Project</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="space-y-6"
            >
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-light">
                Ready to start your next project? Let&apos;s discuss how we can
                help bring your vision to life with exceptional design and
                development.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                We&apos;re here to listen, collaborate, and create something
                amazing together.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
                  Send us a Message
                </h2>
                <p className="text-gray-600 font-light">
                  Tell us about your project and we&apos;ll get back to you
                  within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 p-8 text-center"
                >
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-light text-green-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-700 font-light">
                    Thank you for reaching out. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-light text-gray-700 mb-2 tracking-[0.1em] uppercase"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-1 focus:ring-gray-900 focus:border-transparent bg-white text-gray-900 transition-all duration-300 font-light"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-light text-gray-700 mb-2 tracking-[0.1em] uppercase"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-1 focus:ring-gray-900 focus:border-transparent bg-white text-gray-900 transition-all duration-300 font-light"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-light text-gray-700 dark:text-gray-300 mb-2 tracking-[0.1em] uppercase"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 focus:ring-1 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 font-light"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-light text-gray-700 dark:text-gray-300 mb-2 tracking-[0.1em] uppercase"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 focus:ring-1 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 resize-none font-light"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group bg-black text-white py-4 px-8 font-light tracking-[0.1em] uppercase hover:bg-gray-800 transition-all duration-500 flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-tight">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 border border-gray-300 flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-light text-gray-900 mb-1 tracking-[0.1em] uppercase">
                        Email
                      </h3>
                      <p className="text-gray-600 font-light">
                        hello@revetio.com
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
                className="pt-8 border-t border-gray-200"
              >
                <h3 className="text-lg font-light text-gray-900 mb-6 tracking-[0.1em] uppercase">
                  Why Choose Us?
                </h3>
                <ul className="space-y-4 text-gray-600 font-light">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                    <span>Free consultation and project assessment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                    <span>Transparent pricing and project timeline</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                    <span>Ongoing support and maintenance</span>
                  </li>
                </ul>
              </motion.div>

              {/* Visual Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="pt-8"
              >
                <div className="text-[8rem] font-light text-gray-100 leading-none select-none">
                  03
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactContent;

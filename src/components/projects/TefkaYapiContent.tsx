"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const TefkaYapiContent = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern, responsive website built with Next.js and TypeScript, featuring project showcases, news updates, and contact forms.",
    },
    {
      title: "Branding",
      description:
        "Consistent brand identity design ensuring professional presentation across all digital and print materials.",
    },
    {
      title: "Advertising",
      description:
        "Strategic advertising campaigns and digital marketing solutions to promote Tefka Yapı&apos;s residential projects.",
    },
    {
      title: "Print Design",
      description:
        "Professional print materials including brochures, flyers, and marketing collateral for real estate projects.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Project Overview */}
      <section className="pt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-8"
            >
              <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 tracking-tight">
                Building Digital Excellence
              </h2>

              <div className="space-y-4">
                <p className="text-lg text-gray-600">
                  Tefka Yapı, established in 2001 as Tefaş İnşaat and rebranded
                  in 2012, is a leading construction company in Turkey
                  specializing in premium residential projects. We were tasked
                  with creating a comprehensive digital presence that reflects
                  their commitment to quality construction and customer
                  satisfaction.
                </p>
                <p className="text-lg text-gray-600">
                  Our work encompassed web development, branding, advertising,
                  and print design to create a cohesive brand experience that
                  showcases their diverse portfolio of residential projects
                  across İzmir and surrounding areas.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-24 mt-12">
        <div className=" mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative -mt-8 md:-mt-12"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/assets/tefkayapi/tefkayapi-homepage.jpg"
                  alt="Tefka Yapı Homepage"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative mt-8 md:mt-12"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/assets/tefkayapi/tefkayapi-detail.jpg"
                  alt="Tefka Yapı Detail"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Provided */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-left mb-20"
          >
            <h2 className="text-3xl xl:text-4xl font-medium text-gray-900 tracking-tight mb-4">
              Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              We delivered a complete digital solution covering web development,
              branding, advertising, and print design to elevate Tefka
              Yapı&apos;s market presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
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
                viewport={{ once: true, margin: "-50px" }}
                className="group space-y-6"
              >
                <div className="relative overflow-hidden">
                  <h3 className="text-2xl xl:text-3xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors duration-500 leading-tight">
                    {service.title}
                  </h3>

                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute bottom-0 left-0 h-0.5 bg-gray-900 origin-left"
                  />
                </div>
                <p className="text-lg text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Company Information */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-8"
            >
              <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 tracking-tight">
                Leading Construction Excellence
              </h2>

              <div className="space-y-4">
                <p className="text-lg text-gray-600">
                  Tefka Yapı has been at the forefront of the Turkish
                  construction industry since 2001. Originally established as
                  Tefaş İnşaat, the company underwent a strategic rebranding in
                  2012 to become Tefka Yapı, reflecting their commitment to
                  innovation and quality.
                </p>
                <p className="text-lg text-gray-600">
                  The company specializes in creating premium residential
                  projects, focusing on building spaces where people feel happy,
                  peaceful, and secure. Their mission is to construct quality
                  living environments that meet the highest standards of modern
                  construction.
                </p>
                <p className="text-lg text-gray-600">
                  With projects spanning across İzmir, including areas like
                  Karşıyaka, Bornova, Bayraklı, Menemen, and Seferihisar, Tefka
                  Yapı has established itself as a trusted name in residential
                  construction.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-medium text-gray-900">
                Project Highlights
              </h3>
              <ul className="space-y-4">
                {[
                  "Modern, user-friendly website showcasing all residential projects",
                  "Responsive design optimized for all devices",
                  "SEO-optimized content for better online visibility",
                  "Integrated project showcase with detailed information",
                  "News and updates section for latest developments",
                  "Professional branding across all touchpoints",
                ].map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="text-lg text-gray-600"
                  >
                    {achievement}
                  </motion.li>
                ))}
              </ul>

              <div className="pt-8 border-t border-gray-200">
                <a
                  href="https://tefkayapi.com.tr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-3 px-8 py-4 border border-gray-300 rounded-full text-gray-700 hover:text-gray-900 hover:border-gray-900 transition-all duration-300 font-medium text-sm tracking-wide"
                  >
                    tefkayapi.com.tr
                    <ExternalLink
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TefkaYapiContent;

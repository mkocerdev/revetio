"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const WorksSection = () => {
  const projects = [
    {
      id: 1,
      title: "Tefka Yapı",
      services: "Web, Advertising, Print",
      image: "/assets/tefka-yapi.jpg",
      height: "h-[500px]",
      width: "w-[90%]",
      slug: "tefka-yapi",
    },
    {
      id: 2,
      title: "Reddrone",
      services: "Web, Advertising, Branding",
      image: "/assets/reddrone.jpg",
      height: "h-[300px]",
      width: "w-[40%]",
      slug: "reddrone",
    },
    {
      id: 3,
      title: "OLS",
      services: "Web, Advertising, Branding",
      image: "/assets/ols.jpg",
      height: "h-[500px]",
      width: "w-[60%]",
      slug: "ols",
    },
  ];

  return (
    <div className="bg-white">
      {/* Works Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-xl xl:text-4xl font-medium text-gray-900 tracking-tight">
              Works
            </h2>
          </motion.div>

          {/* Custom Layout - First work full width, second row 40%/60% split */}
          <div className="space-y-10">
            {/* First Row - Tefka Yapı (Full Width) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`group ${projects[0].width}`}
            >
              <Link href={`/projects/${projects[0].slug}`} className="block">
                <div className="relative overflow-hidden">
                  <Image
                    src={projects[0].image}
                    alt={projects[0].title}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {projects[0].title}
                  </h3>
                  <p className="text-sm text-gray-600 font-normal">
                    {projects[0].services}
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Second Row - Reddrone (40%) and OLS (60%) */}
            <div className="flex flex-col lg:flex-row gap-8">
              {projects.slice(1).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: (index + 2) * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className={`group ${project.width}`}
                >
                  <Link href={`/projects/${project.slug}`} className="block">
                    <div className="relative overflow-hidden">
                      {/* Project Image */}
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </div>

                    {/* Project Info */}
                    <div className="mt-4">
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-600 font-normal">
                        {project.services}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
            <Link href="/works">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-8 py-4 border border-gray-300 rounded-full text-gray-700 hover:text-gray-900 hover:border-gray-900 transition-all duration-300 font-medium text-sm tracking-wide"
              >
                View All Works
                <ExternalLink
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WorksSection;

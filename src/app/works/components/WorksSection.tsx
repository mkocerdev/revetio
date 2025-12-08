"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useMemo } from "react";

type Project = {
  id: number;
  title: string;
  services: string;
  image: string;
  width: number; // Width as percentage (0-100)
  height?: number; // Optional height in pixels for masonry
  slug: string;
};

// Masonry Grid Component with proper row-based layout
const MasonryGrid = ({ projects }: { projects: Project[] }) => {
  const gap = 24; // Gap in pixels

  // Organize projects into rows
  const rows = useMemo(() => {
    const rows: Project[][] = [];
    let currentRow: Project[] = [];
    let currentRowWidth = 0;

    projects.forEach((project) => {
      const isFullWidth = project.width === 100;

      // If full width, start new row
      if (isFullWidth) {
        // Save current row if it has items
        if (currentRow.length > 0) {
          rows.push([...currentRow]);
          currentRow = [];
          currentRowWidth = 0;
        }
        // Add full width project as its own row
        rows.push([project]);
        return;
      }

      // Check if project fits in current row
      if (currentRowWidth + project.width <= 100) {
        currentRow.push(project);
        currentRowWidth += project.width;
      } else {
        // Start new row
        if (currentRow.length > 0) {
          rows.push([...currentRow]);
        }
        currentRow = [project];
        currentRowWidth = project.width;
      }
    });

    // Add remaining row
    if (currentRow.length > 0) {
      rows.push(currentRow);
    }

    return rows;
  }, [projects]);

  return (
    <div className="space-y-6">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex flex-wrap"
          style={{ gap: `${gap}px` }}
        >
          {row.map((project) => {
            const isFullWidth = project.width === 100;
            const globalIndex = projects.findIndex((p) => p.id === project.id);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: globalIndex * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="group"
                style={{
                  width: `calc(${project.width}% - ${
                    gap * (project.width / 100)
                  }px)`,
                  flexShrink: 0,
                }}
              >
                <Link href={`/projects/${project.slug}`} className="block">
                  <div className="relative overflow-hidden">
                    <div
                      style={{
                        height: `${project.height || 400}px`,
                      }}
                      className="relative w-full"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes={isFullWidth ? "100vw" : `${project.width}vw`}
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="text-center text-white">
                          <ExternalLink
                            className={
                              isFullWidth
                                ? "w-10 h-10 mx-auto mb-3"
                                : "w-8 h-8 mx-auto mb-2"
                            }
                          />
                          <p
                            className={
                              isFullWidth
                                ? "text-sm font-light tracking-[0.1em] uppercase"
                                : "text-xs font-light tracking-[0.1em] uppercase"
                            }
                          >
                            View Project
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={isFullWidth ? "mt-6" : "mt-5"}>
                    <h3
                      className={
                        isFullWidth
                          ? "text-2xl lg:text-3xl font-medium text-gray-900 mb-2"
                          : "text-xl lg:text-2xl font-medium text-gray-900 mb-1"
                      }
                    >
                      {project.title}
                    </h3>
                    <p
                      className={
                        isFullWidth
                          ? "text-base text-gray-600 font-normal"
                          : "text-sm text-gray-600 font-normal"
                      }
                    >
                      {project.services}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

const WorksSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Tefka Yapı",
      services: "Web, Advertising, Print",
      image: "/assets/tefka-yapi.jpg",
      width: 100, // Full width
      height: 600,
      slug: "tefka-yapi",
    },
    {
      id: 2,
      title: "Reddrone",
      services: "Web, Advertising, Branding",
      image: "/assets/reddrone.jpg",
      width: 50, // 50% width
      height: 400,
      slug: "reddrone",
    },
    {
      id: 3,
      title: "OLS",
      services: "Web, Advertising, Branding",
      image: "/assets/ols.jpg",
      width: 50, // 50% width
      height: 500,
      slug: "ols",
    },
    {
      id: 4,
      title: "Project Four",
      services: "Web, Design, Development",
      image: "/assets/tefka-yapi.jpg",
      width: 60, // 60% width
      height: 450,
      slug: "project-four",
    },
    {
      id: 5,
      title: "Project Five",
      services: "Branding, Advertising",
      image: "/assets/reddrone.jpg",
      width: 40, // 40% width
      height: 350,
      slug: "project-five",
    },
    {
      id: 6,
      title: "Project Six",
      services: "Web, Mobile, Design",
      image: "/assets/ols.jpg",
      width: 100, // Full width
      height: 550,
      slug: "project-six",
    },
    {
      id: 7,
      title: "Project Seven",
      services: "Web, Advertising",
      image: "/assets/tefka-yapi.jpg",
      width: 45, // 45% width
      height: 400,
      slug: "project-seven",
    },
    {
      id: 8,
      title: "Project Eight",
      services: "Branding, Print, Web",
      image: "/assets/reddrone.jpg",
      width: 55, // 55% width
      height: 450,
      slug: "project-eight",
    },
    {
      id: 9,
      title: "Project Nine",
      services: "Web, Design, Development",
      image: "/assets/ols.jpg",
      width: 70, // 70% width
      height: 500,
      slug: "project-nine",
    },
    {
      id: 10,
      title: "Project Ten",
      services: "Advertising, Branding, Web",
      image: "/assets/tefka-yapi.jpg",
      width: 100, // Full width
      height: 600,
      slug: "project-ten",
    },
  ];

  return (
    <div className="bg-white">
      {/* Works Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h1 className="text-4xl xl:text-6xl font-medium text-gray-900 tracking-tight mb-4">
              Works
            </h1>
            <p className="text-lg text-gray-600 font-light max-w-2xl">
              A comprehensive showcase of our works across web development,
              branding, advertising, and design.
            </p>
          </motion.div>

          {/* Masonry Grid Container */}
          <MasonryGrid projects={projects} />
        </div>
      </section>
    </div>
  );
};

export default WorksSection;

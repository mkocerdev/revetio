"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface LogoProps {
  href?: string;
  className?: string;
  showText?: boolean;
  text?: string;
  width?: number;
  height?: number;
}

const Logo = ({
  href = "/",
  className = "",
  width = 120,
  height = 40,
}: LogoProps) => {
  const logoContent = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`flex items-center space-x-3 ${className}`}
    >
      {/* SVG Logo */}
      <div
        className="flex-shrink-0"
        style={{
          filter: "brightness(0) invert(1)",
        }}
      >
        <Image
          src="/assets/revetio-logo.svg"
          alt="Revetio Logo"
          width={width}
          height={height}
          className="object-contain"
          priority
        />
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="flex-shrink-0">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};

export default Logo;

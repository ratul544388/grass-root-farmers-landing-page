"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
  noPadding?: boolean;
}

export const Container = ({
  children,
  className,
  animate = true,
  noPadding,
}: ContainerProps) => {
  return (
    <motion.section
      transition={{ duration: 1 }}
      whileInView={
        animate ? { opacity: [0, 1], scale: [0.95, 1], y: [20, 0] } : {}
      }
      viewport={{ once: true }}
      className={cn(
        "mx-auto px-4 xs:px-8 md:px-[2.5rem] w-full",
        animate && "opacity-0",
        noPadding && "px-0 xs:px-0 md:px-0",
        className
      )}
    >
      {children}
    </motion.section>
  );
};

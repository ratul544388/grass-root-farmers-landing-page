"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "transparent";
  href?: string;
  size?: "default" | "sm";
  arrow?: boolean;
}

const arrowVariants = {
  initial: { right: -50 },
  hover: { right: 15 },
};

export const Button = ({
  children,
  className,
  variant = "default",
  href,
  arrow,
}: ButtonProps) => {
  const MotionLink = motion(Link);
  const classNames = cn(
    "flex relative w-fit items-center gap-2.5 justify-center font-medium h-11 uppercase tracking-wider text-sm",
    variant === "default" && "bg-primary text-white px-5 font-medium text-lg",
    variant === "transparent" && "hover:text-primary px-2",
    className
  );

  return href ? (
    <MotionLink
      initial="initial"
      whileHover="hover"
      href={href}
      className={classNames}
      variants={{ initial: { paddingRight: 20 }, hover: { paddingRight: 50 } }}
    >
      {children}
      {arrow && (
        <motion.span
          variants={arrowVariants}
          className="font-extrabold text-xl absolute"
        >
          →
        </motion.span>
      )}
    </MotionLink>
  ) : (
    <button className={classNames}>{children}</button>
  );
};

"use client";

import { cn } from "@/lib/utils";
import { MotionConfig, motion } from "framer-motion";
import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const arrowVariants = {
  initial: { right: -50 },
  hover: { right: 15 },
};

const buttonVariants = {
  initial: { paddingRight: 20 },
  hover: { paddingRight: 50 },
};

interface PrimaryButtonProps {
  className?: string;
  href: string;
  label?: string;
}

export const PrimaryButton = ({
  className,
  href,
  label,
}: PrimaryButtonProps) => {
  const MotionLink = motion(Link);
  return (
    <MotionConfig transition={{ duration: 0.25 }}>
      <MotionLink
        href={href}
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        className={cn(
          "px-5 relative overflow-hidden bg-primary flex items-center justify-center w-fit h-11 text-white text-lg font-medium tracking-wider uppercase",
          className
        )}
      >
        {label}
        <motion.span variants={arrowVariants} className="absolute">
          <MdOutlineArrowRightAlt className="h-7 w-7" />
        </motion.span>
      </MotionLink>
    </MotionConfig>
  );
};

"use client";

import { shopSelectCuts } from "@/constants";
import { Title } from "./title";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/container";

const lineVariants = {
  initial: {
    width: 0,
  },
  hover: {
    width: "100%",
  },
};

const textVariants = {
  initial: {
    y: 0,
  },
  hover: {
    y: -10,
  },
};

const blurVariants = {
  initial: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
  },
}

export const ShopSelectCuts = () => {
  const MotionLink = motion(Link);
  return (
    <Container className="flex flex-col items-center gap-6 mt-16">
      <Title>Shop select cuts</Title>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {shopSelectCuts.map(({ label, image, href }) => (
          <MotionLink
            initial="initial"
            whileHover="hover"
            key={label}
            href={href}
            className="relative capitalize"
          >
            <Image
              src={image}
              alt={label}
              width={400}
              height={400}
              className="w-full h-[200px] object-cover"
              placeholder="blur"
            />
            <motion.h3
              variants={textVariants}
              transition={{ duration: 0.5 }}
              className="text-xl z-20 font-semibold absolute bottom-6 left-7 text-white"
            >
              {label}{" "}
              <motion.span
                variants={lineVariants}
                transition={{ duration: 0.5 }}
                className="h-0.5 bg-white absolute left-0 bottom-0"
              />
            </motion.h3>
            <motion.span variants={blurVariants} className="absolute inset-0 bg-neutral-950/40"/>
          </MotionLink>
        ))}
      </div>
    </Container>
  );
};

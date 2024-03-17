"use client";

import { Container } from "@/components/container";
import { PrimaryButton } from "@/components/primary-button";
import { newestRecipes } from "@/constants";
import Image from "next/image";
import { Title } from "./title";
import { MotionConfig, motion } from "framer-motion";
import Link from "next/link";

const imageVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.04,
  },
};

const spanVariants = {
  initial: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
  },
};

export const NewestRecipes = () => {
  const MotionImage = motion(Image);
  return (
    <Container className="mt-20 flex flex-col items-center gap-6">
      <Title>Our newest recipes</Title>
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
        {newestRecipes.map(({ label, href, image }) => (
          <MotionConfig key={label} transition={{ duration: 1.2 }}>
            <motion.div
              initial="initial"
              whileHover="hover"
              key={label}
              className="overflow-hidden relative"
            >
              <Link href={href} className="relative">
                <MotionImage
                  src={image}
                  alt={label}
                  width={400}
                  height={400}
                  className="w-full h-[200px] object-cover"
                  placeholder="blur"
                  variants={imageVariants}
                />
                <motion.span
                  variants={spanVariants}
                  className="absolute inset-0 bg-neutral-950/40"
                />
              </Link>
              <h3 className="uppercase font-bold mt-6">{label}</h3>
              <PrimaryButton href={href} label="React more" className="mt-5" />
            </motion.div>
          </MotionConfig>
        ))}
      </div>
    </Container>
  );
};

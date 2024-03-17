"use client";

import { PrimaryButton } from "@/components/primary-button";
import { motion } from "framer-motion";
import Image from "next/image";
import { Title } from "./title";

export const Hero = () => {
  return (
    <motion.section
      animate={{ opacity: [0, 1], transition: { duration: 2 } }}
      className="opacity-0 relative"
    >
      <Image
        src="/hero.webp"
        alt="hero"
        width={1500}
        height={500}
        className="min-h-[430px] object-cover w-full"
      />
      <div className="p-8 bg-white absolute bottom-20 right-20 max-w-[350px]">
        <p className="tracking-widest font-light">CHEF SPECIALS</p>
        <Title>Easy & Healthy</Title>
        <p className="tracking-tighter font-normal mt-3 leading-7">
          We&apos;re here to help those weeknight dinners be easy AND healthy!
          Shop our Chef Specials before they change!
        </p>
        <PrimaryButton
          label="shop special"
          href="#shop_special"
          className="mt-5"
        />
      </div>
    </motion.section>
  );
};

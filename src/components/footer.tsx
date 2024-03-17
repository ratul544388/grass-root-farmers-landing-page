"use client";

import { footerIcons, footerLinks } from "@/constants";
import { Container } from "./container";
import { Logo } from "./logo";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export const Footer = () => {
  const MotionLink = motion(Link);
  return (
    <footer className="bg-muted_foreground pt-20 pb-10 text-primary mt-40">
      <Container
        animate={false}
        className="max-w-screen-lg flex flex-col items-center gap-8"
      >
        <Logo />
        <nav className="flex items-center gap-6">
          {footerIcons.map((Icon, index) => (
            <Icon key={index} className="h-6 w-6" />
          ))}
        </nav>
        <div className="flex gap-16 flex-wrap">
          {footerLinks.map(({ label, links }) => (
            <div key={label} className="space-y-5">
              <h5 className="uppercase font-medium">{label}</h5>
              <nav className="flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <MotionLink whileHover={{ x: 6 }} href={href} key={label}>
                    {label}
                  </MotionLink>
                ))}
              </nav>
            </div>
          ))}
        </div>
        <Image
          src="/heifer-international.png"
          alt="heifer logo"
          width={400}
          height={350}
          className="mt-10"
        />
        <p className="text-xs mt-20">
          © 2024 Grass Roots Farmers&apos; Cooperative
        </p>
      </Container>
    </footer>
  );
};

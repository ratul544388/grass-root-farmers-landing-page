"use client";

import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./logo";
import { Container } from "./container";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { NavigationMenu } from "./navigation-menu";

export const Header = () => {
  const scroll = useScroll();
  const animate = scroll > 120 ? "visible" : "";
  return (
    <>
      <Link
        href="/#free_sheeping"
        className="h-[50px] bg-color_wood hover:text-black hover:font-medium flex items-center justify-center underline text-white text-sm "
      >
        Free shipping on all orders $149+
      </Link>
      <motion.nav
        variants={{
          visible: { position: "sticky", y: [-70, 0] },
        }}
        animate={animate}
        transition={{ ease: [0.25, 1, 0.5, 1] }}
        className={cn("h-[75px] bg-white border-b top-0 z-50")}
      >
        <Container
          animate={false}
          className="flex items-center justify-between h-full"
        >
          <Logo />
          <NavigationMenu/>
          <div className="flex">
            <div className="p-3 hover:text-primary">
              <FiSearch className="h-6 w-6" />
            </div>
            <div className="p-3 hover:text-primary">
              <FiShoppingBag className="h-6 w-6" />
            </div>
          </div>
        </Container>
      </motion.nav>
    </>
  );
};

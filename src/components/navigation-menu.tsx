"use client";

import { navLinks } from "@/constants";
import { GoChevronDown } from "react-icons/go";

interface NavigationMenuProps {}

export const NavigationMenu = ({}: NavigationMenuProps) => {
  return (
    <nav className="hidden lg:flex">
      {navLinks.map(({ label, href }) => (
        <button
          key={label}
          className="text-sm flex gap-2 px-4 py-1 hover:text-primary transition-colors font-medium uppercase"
        >
          {label}
          {!href && <GoChevronDown className="h-4 w-4" />}
        </button>
      ))}
    </nav>
  );
};

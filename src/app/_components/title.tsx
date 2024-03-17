"use client";

import { ReactNode } from "react";
import { Alice } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Alice({ subsets: ["latin"], weight: ["400"] });

interface TitleProps {
  children: ReactNode;
  className?: string;
}

export const Title = ({ children, className }: TitleProps) => {
  return (
    <h1
      className={cn(
        "text-3xl font-medium text-center capitalize tracking-wider text-primary",
        font.className
      )}
    >
      {children}
    </h1>
  );
};

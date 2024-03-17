"use client"

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export const Logo = ({
    className
} : LogoProps) => {
  return (
     <Link href="/" className={cn("text-3xl font-bold", className)}>
        <Image src="/logo.avif" alt="logo" width={180} height={50}/>
     </Link>
    );
}

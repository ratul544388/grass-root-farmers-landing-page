"use client";

import { Container } from "@/components/container";
import { Title } from "./title";
import { whyGrassRootsMeatBetterItems } from "@/constants";
import Image from "next/image";

export const WhyGrassRootsMeatBetter = () => {
  return (
    <Container className="flex flex-col items-center gap-10 mt-28">
      <Title>Why grass roots meat is better</Title>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10">
        {whyGrassRootsMeatBetterItems.map(({ description, image }, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-5 max-w-screen-xl"
          >
            <Image src={image} alt="badge" width={100} height={90} />
            <p className="">{description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

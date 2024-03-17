"use client";

import Image from "next/image";
import FarmImage from "@/../public/farm.webp";
import { Title } from "./title";
import { PrimaryButton } from "@/components/primary-button";
import { Container } from "@/components/container";

interface OurFarmProps {}

export const OurFarm = ({}: OurFarmProps) => {
  return (
    <Container
      noPadding
      className="max-w-[1000px] lg:max-w-full grid lg:grid-cols-2 gap-14 gap-y-10 mt-28"
    >
      <Image
        src={FarmImage}
        alt="farm image"
        width={900}
        height={500}
        className="w-full h-full max-h-[400px] object-cover lg:pl-8"
      />
      <Container className="flex flex-col items-center">
        <p className="tracking-widest">COMMON GOOD</p>
        <Title>The power of co-op</Title>
        <p className="mt-4 text-center">
          Grass Roots is a co-op working with over 40 small farms spanning from
          the rangeland of Oregon to Ozark Highlands Ecoregion of Arkansas to
          river-laced Mississippi. Economically empowered, our farmers have
          bucked mid-20th century thinking and stepped away from industrial,
          chemical and pesticide-based agriculture with regenerative practices
          that heal the land.
        </p>
        <PrimaryButton className="mt-5" href="#our-farm" label="our farm" />
      </Container>
    </Container>
  );
};

import { Container } from "@/components/container";
import { Title } from "./title";
import { brands } from "@/constants";
import Image from "next/image";

export const FarmingDoneRight = () => {
  return (
    <Container className="mt-32 mb-16 flex flex-col gap-20 items-center">
      <div className="max-w-[900px] flex flex-col items-center mx-auto">
        <Title>farming done right</Title>
        <h3 className="font-semibold mt-3">
          <i>
            Grass-fed and finished. Fair wage. Regeneratively farmed in the
            U.S.A.
          </i>
        </h3>
        <p className="text-center">
          All our animals are raised on non-GMO pasture where they roam and
          feed—no antibiotics, no hormones. Living right results in meat
          that&apos;s richer in flavor and mountains more nutritious than
          conventionally raised meat.
        </p>
        <p className="mt-3 text-center">
          As a co-op, we partner with farmers who practice regenerative farming
          which is better for the animals, the soil, the environment, and your
          health. Take a bite of Grass Roots meat knowing that it is the most
          nutritious and best-tasting meat out there.
        </p>
      </div>
      <div className="w-full gap-10 grid grid-cols-2 sm:grid-cols-3 max-w-[700px] mx-auto">
        {brands.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="brand name"
            width={130}
            height={130}
          />
        ))}
      </div>
    </Container>
  );
};

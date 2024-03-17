import { Contact } from "./_components/contact";
import { FarmingDoneRight } from "./_components/farming-done-right";
import { Hero } from "./_components/hero";
import { NewestRecipes } from "./_components/newest-recipes";
import { OurFarm } from "./_components/our-farm";
import { Reviews } from "./_components/reviews";
import { ShopSelectCuts } from "./_components/shop-select-cuts";
import { WhyGrassRootsMeatBetter } from "./_components/why-grass-roots-meat-better";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ShopSelectCuts />
      <NewestRecipes />
      <WhyGrassRootsMeatBetter />
      <OurFarm />
      <FarmingDoneRight />
      <Reviews/>
      <Contact/>
    </main>
  );
}

import PopularCategories from "@/components/shared/PopularCategories";
import MainSlider from "@/components/shared/MainSlider";
import Promos from "@/components/shared/Promos";
import SpecialOffers from "@/components/shared/SpecialOffers";

export default async function Home() {
      return (
            <main>
                  <MainSlider />
                  <PopularCategories />
                  <Promos />
                  <SpecialOffers />
            </main>
      );
}

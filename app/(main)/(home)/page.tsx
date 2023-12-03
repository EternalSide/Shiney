import PopularCategories from "@/components/shared/PopularCategories";
import MainSlider from "@/components/shared/MainSlider";
import SpecialOffers from "@/components/shared/SpecialOffers";

export default function Home() {
      return (
            <main>
                  <MainSlider />
                  <PopularCategories />
                  <SpecialOffers />
                  {/* <Promos /> */}
            </main>
      );
}

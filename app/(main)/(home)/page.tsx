import PopularCategories from "@/components/shared/PopularCategories";
import MainSlider from "@/components/shared/MainSlider";
import Promos from "@/components/shared/Promos";
import SpecialOffers from "@/components/shared/SpecialOffers";
import Trends from "@/components/shared/Trends";
import NewProducts from "@/components/shared/NewProducts";

export default function Home() {
	return (
		<main>
			<MainSlider />
			<PopularCategories />
			<Promos />
			<SpecialOffers />
			<Trends />
			<NewProducts />
		</main>
	);
}

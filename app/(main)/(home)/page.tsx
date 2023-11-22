import PopularCategories from "@/components/shared/PopularCategories";
import MainSlider from "@/components/shared/MainSlider";
import Promos from "@/components/shared/Promos";
import SpecialOffers from "@/components/shared/SpecialOffers";
import ProductCard from "@/components/cards/ProductCard";

export default function Home() {
	return (
		<main>
			<MainSlider />
			<PopularCategories />
			<Promos />
			<SpecialOffers />
			{/* <Trends />
			<NewProducts /> */}
		</main>
	);
}

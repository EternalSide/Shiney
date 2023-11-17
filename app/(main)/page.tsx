import NewProducts from "@/components/shared/NewProducts";
import PopularCategories from "@/components/shared/PopularCategories";
import Trends from "@/components/shared/Trends";
import MainSlider from "@/components/shared/MainSlider";
import Promos from "@/components/shared/Promos";
import SpecialOffers from "@/components/shared/SpecialOffers";

export default function Home() {
	return (
		<main className='max-w-[1420px] w-full mx-auto p-6'>
			<MainSlider />
			<PopularCategories />
			<Promos />
			<SpecialOffers />
			<Trends />
			<NewProducts />
		</main>
	);
}

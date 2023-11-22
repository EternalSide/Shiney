import PopularCategories from "@/components/shared/PopularCategories";
import MainSlider from "@/components/shared/MainSlider";
import Promos from "@/components/shared/Promos";
import SpecialOffers from "@/components/shared/SpecialOffers";
import ProductCard from "@/components/cards/ProductCard";

export default function Home() {
	return (
		<main>
			{" "}
			<div className='grid grid-cols-5 mb-10'>
				<div>
					<h3>Тест корзины</h3>
					<ProductCard
						title='Часы Peppe LUX'
						id={0}
						imgSrc='https://i.pinimg.com/736x/35/aa/26/35aa261ed79bfdd34da9b98eb7a1f369.jpg'
						price={1}
						ratingNumber={5.0}
						ratingCounter={666}
						buyNumber={"1M +"}
						shopName='Peppe'
						shopLink='Peppe'
						description='Описание товара'
					/>{" "}
				</div>
				<ProductCard
					title='Часы Peppe LUX'
					id={1}
					imgSrc='https://i.pinimg.com/736x/35/aa/26/35aa261ed79bfdd34da9b98eb7a1f369.jpg'
					price={1}
					ratingNumber={5.0}
					ratingCounter={666}
					buyNumber={"1M +"}
					shopName='Peppe'
					shopLink='Peppe'
					description='Описание товара'
				/>
				<ProductCard
					title='Часы Peppe LUX'
					id={21}
					imgSrc='https://i.pinimg.com/736x/35/aa/26/35aa261ed79bfdd34da9b98eb7a1f369.jpg'
					price={1}
					ratingNumber={5.0}
					ratingCounter={666}
					buyNumber={"1M +"}
					shopName='Peppe'
					shopLink='Peppe'
					description='Описание товара'
				/>
			</div>
			<MainSlider />
			<PopularCategories />
			<Promos />
			<SpecialOffers />
			{/* <Trends />
			<NewProducts /> */}
		</main>
	);
}

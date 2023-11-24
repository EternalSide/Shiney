import ProductCard from "@/components/cards/ProductCard";

interface ShopPageProps {
	params: {
		name: string;
	};
}

const ShopProductsPage = async ({params}: ShopPageProps) => {
	// const shop = await checkShop(params.name);

	return (
		<>
			<h3 className='text-3xl font-bold mt-8 '>Товары</h3>
			<div className='grid mt-6 max-[520px]:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full max-md:gap-3'>
				{Array.from({length: 20}, (_, i) => (
					<ProductCard
						key={i}
						title='Часы Peppe LUX'
						id={0}
						imgSrc='https://i.pinimg.com/736x/34/83/27/348327ebf09db5e14fb15274b9cc3503.jpg'
						price={66666}
						ratingNumber={5.0}
						ratingCounter={666}
						buyNumber={"1M +"}
						shopName='Peppe'
						shopLink='Peppe'
						description={"Описание товара"}
					/>
				))}
			</div>
		</>
	);
};
export default ShopProductsPage;

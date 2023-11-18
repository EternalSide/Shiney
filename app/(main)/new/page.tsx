import ProductCard from "@/components/cards/ProductCard";

const NewProductsPage = () => {
	return (
		<div className='max-w-[1420px] w-full mx-auto p-6'>
			<h1 className='font-semibold text-2xl'>Новинки</h1>
			<div className='mt-4 grid max-[520px]:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 !gap-6'>
				{Array.from({length: 20}, (_, i) => (
					<ProductCard
						title='Часы Peppe LUX'
						id={0}
						imgSrc='https://i.pinimg.com/736x/34/83/27/348327ebf09db5e14fb15274b9cc3503.jpg'
						price={66666}
						ratingNumber={5.0}
						ratingCounter={666}
						buyNumber={"1M +"}
						shopName='Peppe'
						shopLink='Peppe'
					/>
				))}
			</div>
		</div>
	);
};
export default NewProductsPage;

import ProductCard from "@/components/cards/ProductCard";

const WishListPage = () => {
	return (
		<>
			<h1 className='base-title'>Избранное</h1>
			<div className='mt-4 grid max-[520px]:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 !gap-6'>
				{Array.from({length: 1}, (_, i) => (
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
					/>
				))}
			</div>
		</>
	);
};
export default WishListPage;

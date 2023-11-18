import ProductCard from "../cards/ProductCard";

const NewProducts = () => {
	return (
		<div className='mt-10'>
			<h3 className='main-title'>Новинки</h3>
			<div className='mt-4 grid grid-cols-5 gap-6'>
				{Array.from({length: 10}, (_, i) => (
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
export default NewProducts;

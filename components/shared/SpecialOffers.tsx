import ProductCard from "../cards/ProductCard";

const SpecialOffers = () => {
	return (
		<div className='mt-10'>
			<h3 className='main-title'>Спецпредложения</h3>
			<div className='mt-4 grid max-md:grid-cols-2 max-md:gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
				<ProductCard
					description={"Описание товара"}
					title='Часы Peppe LUX'
					id={0}
					imgSrc='https://i.pinimg.com/736x/35/aa/26/35aa261ed79bfdd34da9b98eb7a1f369.jpg'
					price={66666}
					ratingNumber={5.0}
					ratingCounter={666}
					buyNumber={"1M +"}
					shopName='Peppe'
					shopLink='Peppe'
				/>
			</div>
		</div>
	);
};
export default SpecialOffers;

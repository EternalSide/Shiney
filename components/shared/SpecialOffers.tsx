import ProductCard from "../cards/ProductCard";

const SpecialOffers = () => {
	return (
		<div className='mt-10'>
			<h3 className='main-title'>Спецпредложения</h3>
			<div className='mt-4 grid max-[520px]:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 !gap-6'>
				<ProductCard
					title='Часы Peppe LUX'
					id={0}
					imgSrc='https://miro.medium.com/v2/resize:fit:512/1*kzDS0UK5LyGz-Wg7qD1NLA.png'
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

import BigPromoCard from "../cards/BigPromoCard";
import ProductCard from "../cards/ProductCard";

const Trends = () => {
	return (
		<div className='mt-10'>
			<h3 className='main-title'>Тренды</h3>
			<div className='mt-4 flex items-start gap-6'>
				<BigPromoCard />
				<div className='grid grid-cols-3 gap-6'>
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
			</div>
		</div>
	);
};
export default Trends;

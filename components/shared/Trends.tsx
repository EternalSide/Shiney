import BigPromoCard from "../cards/BigPromoCard";
import ProductCard from "../cards/ProductCard";

const Trends = () => {
	return (
		<div className='mt-10'>
			<h3 className='main-title'>Тренды</h3>
			<div className='mt-4 flex items-start gap-6'>
				<BigPromoCard imgSrc='https://blablabla.cdn.wikkeo.com/BlaBlaBla/3f/31/c5/b9/ad/0189fb5e-3f31-74c5-b9ad-1ca3b7cc6acc.jpg' />
				<div className='grid grid-cols-3 gap-6 flex-1'>
					{Array.from({length: 6}, (_, i) => (
						<ProductCard
							key={i}
							description={"Описание товара"}
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
		</div>
	);
};
export default Trends;

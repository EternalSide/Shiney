import ProductCard from "../cards/ProductCard";

const NewProducts = () => {
	return (
		<div className='mt-10'>
			<h3 className='main-title'>Новинки</h3>
			<div className='mt-4 grid grid-cols-5 gap-6'>
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</div>
	);
};
export default NewProducts;

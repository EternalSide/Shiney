import ProductCard from "@/components/cards/ProductCard";
import {Metadata} from "next";

export const metadata: Metadata = {
	title: "Shiney / Новинки",
};

const NewProductsPage = () => {
	return (
		<>
			<h1 className='base-title'>Новинки</h1>
			<div className='grid_new-products'>
				{Array.from({length: 20}, (_, i) => (
					<ProductCard
						description={"Описание товара"}
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
export default NewProductsPage;

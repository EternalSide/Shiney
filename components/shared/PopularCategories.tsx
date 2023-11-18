import {popularCategories} from "@/constants";
import CategoryCard from "../cards/CategoryCard";

const PopularCategories = () => {
	return (
		<div className='mt-10'>
			<h3 className='main-title'>Популярные категории</h3>
			<div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-6'>
				{popularCategories.map((item: any) => (
					<CategoryCard
						key={item.href}
						title={item.label}
						href={item.href}
						imgSrc={item.imgSrc}
					/>
				))}
			</div>
		</div>
	);
};
export default PopularCategories;

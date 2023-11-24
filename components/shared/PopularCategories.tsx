import {popularCategories} from "@/constants";
import CategoryCard from "../cards/CategoryCard";
import {PopularCategory} from "@/constants/types";

const PopularCategories = () => {
	return (
		<div className='mt-10'>
			<h3 className='main-title'>Популярные категории</h3>
			<div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-6'>
				{popularCategories.map((category: PopularCategory) => (
					<CategoryCard
						key={category.href}
						title={category.label}
						href={category.href}
						imgSrc={category.imgSrc}
					/>
				))}
			</div>
		</div>
	);
};
export default PopularCategories;

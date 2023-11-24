import ProductCard from "@/components/cards/ProductCard";
import CategoriesMenu from "@/components/shared/CategoriesMenu";
import {
	allCategoriesDetection,
	detectIfMainCategory,
	mainCategories,
	recursiveSearch,
} from "@/lib/allCategories";
import {Suspense} from "react";
import Loading from "./loading";
import {AccumulatorItem} from "@/types";

interface Props {
	params: {
		name: string;
	};
}

const CategoryPage = ({params}: Props) => {
	let accumulator: AccumulatorItem[] = [];
	let currentCategory: AccumulatorItem | null = null;

	// Главная категория
	const isMainCategory: AccumulatorItem = detectIfMainCategory(
		mainCategories,
		params.name
	);

	if (isMainCategory) {
		accumulator = [
			{
				label: isMainCategory.label,
				href: isMainCategory.href,
			},
		];
	}

	// Не главная категория
	if (!isMainCategory) {
		const data = recursiveSearch(
			allCategoriesDetection,
			params.name,
			accumulator
		);

		accumulator = data.accumulator;
		currentCategory = data.currentCategory;
	}

	// Если категории не существует.
	const noCategory = !currentCategory && !isMainCategory;

	if (noCategory) {
		return (
			<h1 className='base-title'>
				Категории <span className='text-blue-500'>{params.name}</span> не
				существует
			</h1>
		);
	}

	const activeTitle = currentCategory?.label || isMainCategory?.label;

	return (
		<>
			<CategoriesMenu
				currentCategory={activeTitle}
				accumulator={accumulator}
			/>
			<div className='mt-12'>
				<div className='flex items-center gap-2.5'>
					<h1 className='base-title'>{activeTitle}</h1>
					<p className='text-[#626d7a] font-semibold mt-0.5'>0 Товаров</p>
				</div>
				<div className='mt-4 flex items-start'>
					<Suspense fallback={<Loading />}>
						<div className='grid max-[520px]:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 !gap-6 w-full'>
							{Array.from({length: 20}, (_, i) => (
								<ProductCard
									key={i}
									title='Часы Peppe LUX'
									id={0}
									imgSrc={
										"https://i.pinimg.com/736x/34/83/27/348327ebf09db5e14fb15274b9cc3503.jpg"
									}
									price={66666}
									ratingNumber={5.0}
									ratingCounter={666}
									buyNumber={"1M +"}
									shopName='Peppe'
									shopLink='Peppe'
									description={"Описание товара"}
								/>
							))}
						</div>
					</Suspense>
				</div>
			</div>
		</>
	);
};
export default CategoryPage;

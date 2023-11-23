import CategoryCard from "../cards/CategoryCard";

const PopularCategories = () => {
	const popularCategories = [
		{
			label: "Электроника",
			category: "electric",
			href: "/category/electric",
			imgSrc: "https://wikkeo.com/assets/front/images/popularCategories/1.png",
		},
		{
			label: "Одежда",
			category: "clothes",
			href: "/category/clothes",
			imgSrc: "https://wikkeo.com/assets/front/images/popularCategories/2.png",
		},
		{
			label: "Обувь",
			category: "shoes",
			href: "/category/shoes",
			imgSrc: "https://wikkeo.com/assets/front/images/popularCategories/3.png",
		},
		{
			label: "Автотовары",
			category: "autoproducts",
			href: "/category/autoproducts",
			imgSrc: "https://wikkeo.com/assets/front/images/popularCategories/4.png",
		},
		{
			label: "Строительство",
			category: "build",
			href: "/category/build",
			imgSrc: "https://wikkeo.com/assets/front/images/popularCategories/5.png",
		},
		{
			label: "Аксессуары",
			category: "others",
			href: "/category/others",
			imgSrc: "https://wikkeo.com/assets/front/images/popularCategories/6.png",
		},
	];

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

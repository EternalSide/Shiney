import { AccumulatorItem, RecursiveData } from "@/types";
import {
	electronic,
	beaty,
	sport,
	clothes,
	shoes,
	build,
	autoproducts,
	others,
} from "./categories";

// Для меню и ссылок.
export const allCategories = [
	{
		data: electronic,
		value: "electric",
		href: "/electric",
		label: "Электроника",
	},
	{
		data: beaty,
		value: "beaty",
		href: "/beaty",
		label: "Красота и здоровье",
	},
	{
		data: sport,
		value: "sport",
		href: "/sport",
		label: "Спорт и отдых",
	},
	{
		data: clothes,
		value: "clothes",
		href: "/clothes",
		label: "Одежда",
	},
	{
		data: shoes,
		value: "shoes",
		href: "/shoes",
		label: "Обувь",
	},
	{
		data: autoproducts,
		value: "autoproducts",
		href: "/autoproducts",
		label: "Автотовары",
	},
	{
		data: build,
		value: "build",
		href: "/build",
		label: "Строительство",
	},
	{
		data: others,
		value: "others",
		href: "/others",
		label: "Аксессуары",
	},
];

export type AllCategoryItem = (typeof allCategories)[0];

// Определить на главной ли мы категории
export const detectIfMainCategory = (array: typeof mainCategories, targetValue: string) => {
	for (const item of array) {
		if (item.href === `/${targetValue}`) return item;
	}
};

// Главные категории, Для detectIfMainCategory();
export const mainCategories = [
	{ href: "/electric", label: "Электроника" },
	{ href: "/beaty", label: "Красота и здоровье" },
	{ href: "/sport", label: "Спорт и отдых" },
	{ href: "/clothes", label: "Одежда" },
	{ href: "/shoes", label: "Обувь" },
	{ href: "/autoproducts", label: "Автотовары" },
	{ href: "/build", label: "Строительство" },
	{ href: "/others", label: "Аксессуары" },
];

// Для recursiveSearch();
export const allCategoriesDetection = [
	electronic,
	beaty,
	sport,
	clothes,
	shoes,
	autoproducts,
	build,
	others,
];

export const recursiveSearch = (
	array: any[],
	targetValue: string,
	accumulator: AccumulatorItem[]
): RecursiveData => {
	for (const item of array) {
		accumulator.push({
			label: item.label,
			href: item.href,
		});

		if (item.href === `/${targetValue}`) {
			return {
				currentCategory: {
					label: item.label,
					href: item.href,
				},
				accumulator,
			};
		}

		if (item.categories) {
			const result = recursiveSearch(item.categories, targetValue, accumulator);

			if (result.currentCategory) {
				return {
					currentCategory: {
						label: result.currentCategory.label,
						href: result.currentCategory.href,
					},
					accumulator,
				};
			}
		}

		// Убираем последний элемент, если не нашли искомое значение в текущей категории
		accumulator.pop();
	}

	// Значение не найдено
	return { currentCategory: null, accumulator };
};

export const getCategory = (categoryName: string) => {
	let accumulator: AccumulatorItem[] = [];
	let currentCategory: AccumulatorItem | null = null;

	// Главная категория
	const isMainCategory: AccumulatorItem | undefined = detectIfMainCategory(
		mainCategories,
		categoryName
	);

	if (isMainCategory) {
		accumulator = [
			{
				label: isMainCategory.label,
				href: isMainCategory.href,
			},
		];
		console.log(accumulator);
	}

	// Не главная категория
	if (!isMainCategory) {
		const data = recursiveSearch(allCategoriesDetection, categoryName, accumulator);

		accumulator = data.accumulator;
		currentCategory = data.currentCategory;
	}

	const noCategory = !currentCategory && !isMainCategory;
	const activeTitle = currentCategory?.label || isMainCategory?.label;

	return {
		noCategory,
		accumulator,
		currentCategory,
		isMainCategory,
		activeTitle,
	};
};

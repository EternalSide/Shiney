import {AccumulatorItem, RecursiveData} from "@/types";
import {
	electronic,
	beaty,
	sport,
	clothes,
	shoes,
	bytovia,
	house,
} from "./categories";

// Для меню и ссылок.
export const allCategories = [
	{
		data: electronic,
		value: "electronic",
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
		label: "Спорорт",
	},
	{
		data: clothes,
		value: "beaty",
		href: "/beaty",
		label: "Красота и здоровье",
	},
	{
		data: shoes,
		value: "beaty",
		href: "/beaty",
		label: "Красота и здоровье",
	},
	{
		data: bytovia,
		value: "beaty",
		href: "/beaty",
		label: "Красота и здоровье",
	},
	{
		data: house,
		value: "house",
		href: "/house",
		label: "Красота и здоровье",
	},
];

// Определить на главной ли мы категории
export const detectIfMainCategory = (
	array: typeof mainCategories,
	targetValue: string
) => {
	for (const item of array) {
		if (item.href === `/${targetValue}`) return item;
	}
};

// Главные категории, Для detectIfMainCategory();
export const mainCategories = [
	{href: "/electric", label: "Электроника"},
	{href: "/beaty", label: "Красота и здоровье"},
	{href: "/sport", label: "Спорт и отдых"},
	{href: "/clothes", label: "Одежда"},
	{href: "/shoes", label: "Обувь"},
	{href: "/bytovia", label: "Бытовая техника"},
	{href: "/house", label: "Дом и сад"},
];

// Для recursiveSearch();
export const allCategoriesDetection = [
	electronic,
	beaty,
	sport,
	clothes,
	shoes,
	bytovia,
	house,
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
	return {currentCategory: null, accumulator};
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
	}

	// Не главная категория
	if (!isMainCategory) {
		const data = recursiveSearch(
			allCategoriesDetection,
			categoryName,
			accumulator
		);

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

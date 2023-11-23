import {
	electronic,
	beaty,
	sport,
	clothes,
	shoes,
	bytovia,
	house,
} from "./categories";

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

// Если категория главная.
export const detectIfMainCategory = (array: any, targetValue: string) => {
	for (const item of array) {
		if (item.href === `/${targetValue}`) {
			return item;
		}
	}
};

export const mainCategories = [
	{href: "/electric", label: "Электроника"},
	{href: "/beaty", label: "Красота и здоровье"},
	{href: "/sport", label: "Спорт"},
	{href: "/clothes", label: "Одежда"},
	{href: "/shoes", label: "Тапки"},
	{href: "/bytovia", label: "Бытовая техника"},
	{href: "/house", label: "Дом и сад"},
];

export const allCategoriesDetection = [
	electronic,
	beaty,
	sport,
	clothes,
	shoes,
	bytovia,
	house,
];

// export const recursiveSearch = (
// 	array: any,
// 	targetValue: string,
// 	accumulator: any
// ) => {
// 	let currentCategory;

// 	for (const item of array) {
// 		accumulator = [];

// 		accumulator.push({
// 			label: item.label,
// 			href: item.href,
// 		});

// 		// 2 lvl

// 		const categories = item.categories;

// 		categories.forEach((category: any) => {
// 			if (category.href === `/${targetValue}`) {
// 				console.log(category);
// 				return (currentCategory = category);
// 			}
// 		});
// 		for (const zxc of categories) {
// 			const currentCategories = zxc.categories;

// 			// 3 lvl
// 			currentCategories.forEach((category: any) => {
// 				if (category.href === `/${targetValue}`) {
// 					return (currentCategory = category);
// 				}
// 			});
// 		}
// 	}

// 	return {currentCategory, accumulator};
// };

export const recursiveSearch = (
	array: any,
	targetValue: string,
	accumulator: any
): any => {
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

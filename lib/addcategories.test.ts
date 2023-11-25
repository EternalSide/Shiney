// "use server";
// import Category, {ICategory} from "@/database/models/category.model";
// import entryDatabase from "./mongoose";
// import {allCategoriesDetection} from "./allCategories";

// export async function addCategories() {
// 	const categoriesToAdd: any = [];

// 	const extractCategories = (category: any) => {
// 		categoriesToAdd.push({href: category.href, label: category.label});

// 		if (category.categories) {
// 			category.categories.forEach((subCategory: any) => {
// 				extractCategories(subCategory);
// 			});
// 		}
// 	};

// 	allCategoriesDetection.forEach((item: any) => {
// 		extractCategories(item);
// 	});

// 	try {
// 		await entryDatabase();

// 		for (const categoryItem of categoriesToAdd) {
// 			const category: ICategory = new Category({
// 				label: categoryItem.label,
// 				href: categoryItem.href,
// 			});

// 			await category.save();
// 		}
// 		console.log("Все категории добавлены");
// 	} catch (error) {
// 		console.error("Ошибка в addcategories.test.ts:", error);
// 	}
// }

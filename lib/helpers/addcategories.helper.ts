"use server";
import { allCategoriesDetection, mainCategories } from "../allCategories";
import { db } from "../prisma";

export async function addCategories() {
	// const categoriesToAdd: any = [];

	// const extractCategories = (category: any) => {
	//       categoriesToAdd.push({ href: category.href, label: category.label });

	//       if (category.categories) {
	//             category.categories.forEach((subCategory: any) => {
	//                   extractCategories(subCategory);
	//             });
	//       }
	// };

	// allCategoriesDetection.forEach((item: any) => {
	//       extractCategories(item);
	// });

	try {
		for (const categoryItem of mainCategories) {
			await db.category.create({
				data: {
					href: categoryItem.href,
					label: categoryItem.label,
				},
			});
		}
		console.log("Категории добавлены");
	} catch (error) {
		console.error("Ошибка в addcategories.test.ts:", error);
	}
}

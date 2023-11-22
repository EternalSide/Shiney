"use server";
import Category, {ICategory} from "@/database/models/category.model";
import entryDatabase from "./mongoose";

export async function addCategories() {
	const categoriesToAdd: string[] = [
		"Electronics",
		"Clothing",
		"Shoes",
		"Beauty and Health",
		"Sports and Recreation",
		"Home and Garden",
		"Toys and Hobbies",
		"Books and Education",
		"Kitchen Appliances",
		"Automotive",
	];

	try {
		await entryDatabase();

		for (const categoryName of categoriesToAdd) {
			const category: ICategory = new Category({name: categoryName});
			await category.save();
		}
		console.log("All categories added successfully");
	} catch (error) {
		console.error("Error adding categories:", error);
	}
}

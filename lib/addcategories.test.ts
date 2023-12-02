"use server";
import { allCategoriesDetection } from "./allCategories";
import { prisma } from "./prisma";

export async function addCategories() {
      const categoriesToAdd: any = [];

      const extractCategories = (category: any) => {
            categoriesToAdd.push({ href: category.href, label: category.label });

            if (category.categories) {
                  category.categories.forEach((subCategory: any) => {
                        extractCategories(subCategory);
                  });
            }
      };

      allCategoriesDetection.forEach((item: any) => {
            extractCategories(item);
      });

      try {
            for (const categoryItem of categoriesToAdd) {
                  await prisma.category.create({
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

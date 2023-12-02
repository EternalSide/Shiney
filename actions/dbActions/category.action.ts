"use server";

import { GetCategoryProductsParams } from "./index.shared";
import { prisma } from "@/lib/prisma";

export const getCategoryProducts = async (params: GetCategoryProductsParams) => {
      try {
            const { categoryHref, page } = params;

            let pageSize = 10;

            const skipAmount = (page - 1) * pageSize;

            if (!categoryHref) return { products: [], isNextPage: false, totalLength: 0 };

            const category = await prisma.category.findFirst({
                  where: { href: categoryHref },
                  include: {
                        products: {
                              include: {
                                    Shop: {
                                          select: {
                                                id: true,
                                                name: true,
                                                link: true,
                                                buyCount: true,
                                          },
                                    },
                              },
                              take: pageSize,
                              skip: skipAmount,
                        },
                  },
            });

            if (!category) return { products: [], isNextPage: false, totalLength: 0 };

            const totalLength = await prisma.product.count({ where: { categoryId: category.id } });

            const isNextPage = totalLength > category.products.length + skipAmount;

            return { products: category.products, isNextPage, totalLength };
      } catch (e) {
            console.log(e);
            throw e;
      }
};

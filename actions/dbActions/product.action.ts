"use server";
import { revalidatePath } from "next/cache";
import { AddProductToUserFavData, ProductData } from "./index.shared";
import { prisma } from "@/lib/prisma";

export const addProductToShop = async (productData: ProductData) => {
      try {
            const { title, description, price, categories: categoryHref, shopId, path, avatar } = productData;

            const category = await prisma.category.findFirst({
                  where: {
                        href: categoryHref,
                  },
            });

            await prisma.product.create({
                  data: {
                        shopId,
                        title,
                        description,
                        price,
                        categoryId: category?.id!,
                        picture: avatar,
                  },
            });

            return revalidatePath(path);
      } catch (e) {
            console.log(e);
            throw e;
      }
};

export const addProductToUserFav = async (data: AddProductToUserFavData) => {
      try {
            const { productId, userId, path, inFav } = data;

            const user = await prisma.user.findFirst({ where: { clerkId: userId } });

            const relation = await prisma.favorite.findFirst({
                  where: {
                        productId,
                        userId: user?.id!,
                  },
            });

            if (inFav) {
                  if (relation) {
                        await prisma.favorite.delete({
                              where: {
                                    id: relation?.id!,
                              },
                        });
                  }
            } else {
                  if (relation) return;
                  await prisma.favorite.create({
                        data: {
                              userId: user?.id!,
                              productId,
                        },
                  });
            }

            return revalidatePath(path);
      } catch (e) {
            console.log(e);
            throw e;
      }
};

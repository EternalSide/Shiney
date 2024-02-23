"use server";
import { revalidatePath } from "next/cache";
import { AddProductToUserFavData, ProductData } from "./index.shared";
import { db } from "@/lib/prisma";

export const addProductToShop = async (productData: ProductData) => {
	try {
		const {
			title,
			description,
			price,
			categories: categoryHref,
			shopId,
			path,
			avatar,
		} = productData;

		const category = await db.category.findFirst({
			where: {
				href: categoryHref,
			},
		});
		const shop = await db.shop.findUnique({
			where: {
				id: shopId,
			},
		});
		console.log(shop);
		await db.product.create({
			data: {
				shopId: shopId,

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

		const user = await db.user.findFirst({ where: { clerkId: userId } });

		const relation = await db.favorite.findFirst({
			where: {
				productId,
				userId: user?.id!,
			},
		});

		if (inFav) {
			if (relation) {
				await db.favorite.delete({
					where: {
						id: relation?.id!,
					},
				});
			}
		} else {
			if (relation) return;
			await db.favorite.create({
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

export const deleteProductAction = async (params: any) => {
	try {
		const { id, path } = params;

		await db.product.delete({
			where: {
				id,
			},
		});
		return revalidatePath(path);
	} catch (e) {
		console.log(e);
		throw e;
	}
};
export const editProduct = async (params: any) => {
	try {
		const { title, description, price, path, shopId, picture, id } = params;

		await db.product.update({
			where: { id, shopId },
			data: {
				title,
				price,
				description,
				picture,
			},
		});

		return revalidatePath(path);
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const getProductInfo = async (params: any) => {
	try {
		const { id } = params;

		const productInfo = await db.product.findFirst({
			where: {
				id: params.id,
			},
			include: {
				shop: {
					select: {
						name: true,
					},
				},
			},
		});

		return productInfo;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

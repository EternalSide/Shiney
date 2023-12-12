"use server";
import { revalidatePath } from "next/cache";
import {
	CreateShopParams,
	DeleteShopParams,
	FollowShopParams,
	GetNewProductsParams,
	GetShopInfoParams,
	UpdateShopImages,
	UpdateShopParams,
} from "./index.shared";
import { db } from "@/lib/prisma";

export const createShop = async (shopData: CreateShopParams) => {
	try {
		const { name, link, description, clerkId, image, path } = shopData;

		const user = await db.user.findFirst({ where: { clerkId } });

		const newShop = await db.shop.create({
			data: {
				name,
				link,
				description,
				avatar: image,
				creatorId: user?.id!,
			},
		});

		await db.follower.create({
			data: {
				shopId: newShop.id,
				userId: user?.id!,
			},
		});

		revalidatePath(path);

		return newShop.link;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const updateShop = async (params: UpdateShopParams) => {
	try {
		const { shopLink, name, link, description, path, avatar } = params;

		await db.shop.update({
			where: { link: shopLink },
			data: {
				name,
				link,
				description,
				avatar,
			},
		});

		return revalidatePath(path);
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const updateShopImages = async (params: UpdateShopImages) => {
	try {
		const { shopId, shopImage, path, shopBanner } = params;

		const shop = await db.shop.update({
			where: { id: shopId },
			data: {
				avatar: shopImage,
				banner: shopBanner,
			},
		});

		revalidatePath(path);

		return shop.link;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const getShopInfo = async (params: GetShopInfoParams) => {
	try {
		const { name: link } = params;

		const shop = await db.shop.findUnique({
			where: { link },
			include: {
				products: true,
				followers: true,
			},
		});

		if (!shop) return null;

		return shop;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const getNewProducts = async (params: GetNewProductsParams) => {
	try {
		const { page } = params;

		if (page === 0) return { newProducts: [], isNextPage: false };

		const pageSize = 20;

		const skipAmount = (page - 1) * pageSize;

		const newProducts = await db.product.findMany({
			orderBy: {
				createdAt: "desc",
			},
			skip: skipAmount,
			take: pageSize,
			include: { Shop: true },
		});

		const totalNewProducts = await db.product.count();

		const isNextPage = totalNewProducts > skipAmount + newProducts.length;

		return { newProducts, isNextPage };
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const deleteShop = async (params: DeleteShopParams) => {
	try {
		const { shopId, path } = params;

		await db.shop.delete({ where: { id: shopId } });

		return revalidatePath(path);
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const followShopAction = async (params: FollowShopParams) => {
	try {
		const { shopLink: link, path, clerkId, isFollowing } = params;

		const updatedUser = await db.user.findUnique({
			where: {
				clerkId,
			},
		});

		const shop = await db.shop.findUnique({
			where: { link },
		});

		if (isFollowing) {
			const follow = await db.follower.findFirst({
				where: {
					userId: updatedUser?.id!,
					shopId: shop?.id!,
				},
			});

			if (follow) {
				await db.follower.delete({
					where: {
						id: follow?.id,
						userId: updatedUser?.id!,
						shopId: shop?.id!,
					},
				});
			}
		} else {
			const t = await db.follower.create({
				data: {
					userId: updatedUser?.id!,
					shopId: shop?.id!,
				},
			});
		}

		return revalidatePath(path);
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const getShopProducts = async (params: GetShopInfoParams) => {
	try {
		const { name: link } = params;

		const shop = await db.shop.findUnique({
			where: {
				link,
			},
			select: {
				products: {
					include: {
						Shop: true,
					},
					orderBy: {
						createdAt: "desc",
					},
				},
			},
		});

		if (!shop) return null;

		return shop.products;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

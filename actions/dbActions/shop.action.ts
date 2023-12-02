"use server";
import { revalidatePath } from "next/cache";
import {
      CreateShopParams,
      DeleteShopParams,
      GetNewProductsParams,
      GetShopInfoParams,
      UpdateShopImages,
      UpdateShopParams,
} from "./index.shared";
import { prisma } from "@/lib/prisma";

export const createShop = async (shopData: CreateShopParams) => {
      try {
            const { name, link, description, clerkId, image, path } = shopData;

            const user = await prisma.user.findFirst({ where: { clerkId } });

            const newShop = await prisma.shop.create({
                  data: {
                        name,
                        link,
                        description,
                        avatar: image,
                        creatorId: user?.id!,
                  },
            });

            revalidatePath(path);

            return {
                  shopLink: newShop.link,
            };
      } catch (e) {
            console.log(e);
            throw e;
      }
};

export const updateShop = async (params: UpdateShopParams) => {
      try {
            const { shopLink, name, link, description, path, avatar } = params;

            await prisma.shop.update({
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

            const shop = await prisma.shop.update({
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

            const shop = await prisma.shop.findUnique({
                  where: { link },
                  include: {
                        products: true,
                  },
            });
            console.log(shop);
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

            const newProducts = await prisma.product.findMany({
                  orderBy: {
                        createdAt: "desc",
                  },
                  skip: skipAmount,
                  take: pageSize,
                  include: { Shop: true },
            });

            const totalNewProducts = await prisma.product.count();

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

            await prisma.shop.delete({ where: { id: shopId } });

            return revalidatePath(path);
      } catch (e) {
            console.log(e);
            throw e;
      }
};

// export const followShopAction = async (params: FollowShopParams) => {
//       try {
//

//             const { shopLink: link, path, clerkId, isFollowing } = params;

//             let updateQuery = {};
//             let updateUserQuery = {};

//             const updatedUser = await User.findOne({ clerkId });

//             if (isFollowing) {
//                   updateQuery = {
//                         $pull: {
//                               followers: updatedUser._id,
//                         },
//                   };
//                   updateUserQuery = {
//                         $pull: {
//                               followingShops: updatedUser._id,
//                         },
//                   };
//             } else {
//                   updateQuery = {
//                         $addToSet: {
//                               followers: updatedUser._id,
//                         },
//                   };
//                   updateUserQuery = {
//                         $push: {
//                               followingShops: updatedUser._id,
//                         },
//                   };
//             }

//             await User.findOneAndUpdate({ clerkId }, updateUserQuery);
//             await Shop.findOneAndUpdate({ link }, updateQuery);

//             revalidatePath(path);
//       } catch (e) {
//             console.log(e);
//             throw e;
//       }
// };

export const getShopProducts = async (params: GetShopInfoParams) => {
      try {
            const { name: link } = params;

            const shop = await prisma.shop.findUnique({
                  where: {
                        link,
                  },
                  select: {
                        products: {
                              include: {
                                    Shop: true,
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

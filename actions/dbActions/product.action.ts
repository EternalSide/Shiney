"use server";
import Shop from "@/database/models/shop.model";
import User from "@/database/models/user.model";
import entryDatabase from "@/lib/mongoose";
import { revalidatePath } from "next/cache";
import Product from "@/database/models/product.model";
import Category from "@/database/models/category.model";
import { AddProductToUserFavData, ProductData } from "./index.shared";

export const addProductToShop = async (productData: ProductData) => {
      try {
            entryDatabase();

            const { title, description, price, categories: categoryHref, shopId, path } = productData;

            const shop = await Shop.findById(shopId);

            const product = await Product.create({
                  title,
                  description,
                  price,
                  shop: shopId,
            });

            const category = await Category.findOne({
                  href: categoryHref,
            });

            product.categories.push(category._id);
            shop.products.push(product._id);
            category.products.push(product._id);

            await product.save();
            await shop.save();
            await category.save();

            revalidatePath(path);

            return JSON.parse(JSON.stringify(product));
      } catch (e) {
            console.log(e);
            throw e;
      }
};

export const addProductToUserFav = async (data: AddProductToUserFavData) => {
      try {
            entryDatabase();

            const { productId, userId, path, inFav } = data;

            let updateQuery = {};

            if (inFav) {
                  updateQuery = {
                        $pull: {
                              savedProducts: productId,
                        },
                  };
            } else {
                  updateQuery = {
                        $push: {
                              savedProducts: productId,
                        },
                  };
            }

            await User.findOneAndUpdate({ clerkId: userId }, updateQuery);

            return revalidatePath(path);
      } catch (e) {
            console.log(e);
            throw e;
      }
};

"use server";
import Product from "@/database/models/product.model";
import Shop from "@/database/models/shop.model";
import entryDatabase from "@/lib/mongoose";
import { GlobalSearchParams } from "./index.shared";

export const globalSearch = async (params: GlobalSearchParams) => {
      try {
            entryDatabase();

            const { searchQuery, page } = params;

            let pageLimit = 10;

            let skipAmount = (page - 1) * pageLimit;

            const regexQuery = { $regex: searchQuery, $options: "i" };

            const products = await Product.find({ title: regexQuery })
                  .populate({
                        path: "shop",
                        model: Shop,
                        options: {
                              select: "_id link name buyCount",
                        },
                  })
                  .skip(skipAmount)
                  .limit(pageLimit);

            const noResultsFound = {
                  products: [],
                  totalLength: 0,
                  isNext: false,
            };

            if (!products) return noResultsFound;

            const totalLength = await Product.countDocuments({ title: regexQuery });

            const isNext = totalLength > products.length + skipAmount;

            return { products, totalLength, isNext };
      } catch (e) {
            console.log(e);
      }
};

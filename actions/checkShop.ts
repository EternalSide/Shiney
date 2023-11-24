import {getShopInfo} from "./dbActions/shop.action";
import {IShop} from "@/database/models/shop.model";

const checkShop = async (shopName: string): Promise<IShop> => {
	const shop = await getShopInfo({name: shopName});
	// @ts-ignore
	if (!shop) return null;

	return shop;
};
export default checkShop;

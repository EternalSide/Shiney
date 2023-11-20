import {redirect} from "next/navigation";
import {getShopInfo} from "./dbActions/shop.action";
import {IShop} from "@/database/models/shop.model";

const checkShop = async (shopName: string): Promise<IShop> => {
	const shop: IShop = await getShopInfo({name: shopName});

	if (!shop) redirect("/");

	return shop;
};
export default checkShop;

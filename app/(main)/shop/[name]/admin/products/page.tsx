import checkAdmin from "@/actions/checkAdmin";
import {AdminParams} from "@/types";

const ShopProductsPage = async ({params}: AdminParams) => {
	const data = await checkAdmin(params.name);
	return <div>ShopProductsPage</div>;
};
export default ShopProductsPage;

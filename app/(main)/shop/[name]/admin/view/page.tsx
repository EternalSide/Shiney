import checkAdmin from "@/actions/checkAdmin";
import {AdminParams} from "@/types";

const ShopViewPage = async ({params}: AdminParams) => {
	const data = await checkAdmin(params.name);
	return <div>ShopViewPage</div>;
};
export default ShopViewPage;

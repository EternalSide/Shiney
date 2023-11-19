import checkAdmin from "@/serverActions/checkAdmin";
import {AdminParams} from "@/types";

const OrdersPage = async ({params}: AdminParams) => {
	const data = await checkAdmin(params.name);
	return <div>OrdersPage</div>;
};
export default OrdersPage;

import checkShop from "@/actions/checkShop";
import ShopComments from "@/components/shop/ShopComments";

const ShopReviewsPage = async ({params}: any) => {
	const shop = await checkShop(params.name);
	return <ShopComments />;
};
export default ShopReviewsPage;

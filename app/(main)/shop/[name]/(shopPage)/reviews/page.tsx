import checkShop from "@/actions/checkShop";

const ShopReviewsPage = async ({params}: any) => {
	const shop = await checkShop(params.name);
	return <div>ShopReviewsPage</div>;
};
export default ShopReviewsPage;

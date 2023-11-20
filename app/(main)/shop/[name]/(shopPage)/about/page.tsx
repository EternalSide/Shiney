import checkShop from "@/actions/checkShop";

const ShopAboutPage = async ({params}: any) => {
	const shop = await checkShop(params.name);
	return <div>ShopAboutPage</div>;
};

export default ShopAboutPage;

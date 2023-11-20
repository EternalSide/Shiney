import checkShop from "@/actions/checkShop";

interface ShopPageProps {
	params: {
		name: string;
	};
}

const ShopProductsPage = async ({params}: ShopPageProps) => {
	const shop = await checkShop(params.name);

	return <>Страница товары</>;
};
export default ShopProductsPage;

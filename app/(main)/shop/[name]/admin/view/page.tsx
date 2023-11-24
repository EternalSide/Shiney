import checkAdmin from "@/actions/checkAdmin";
import CreateEditImages from "@/components/forms/CreateEditImages";
import CreateEditShopForm from "@/components/forms/CreateEditShopForm";
import {AdminParams} from "@/types";

export async function generateMetadata({params}: AdminParams) {
	const data = await checkAdmin(params.name);
	return {
		title: `Магазин ${data?.shop.name} | Оформление`,
	};
}

const ShopViewPage = async ({params}: AdminParams) => {
	const data = await checkAdmin(params.name);
	return (
		<div className='base-block'>
			<h1 className='base-title'>Магазин {data?.shop.name} | Оформление</h1>
			<CreateEditImages shopData={JSON.stringify(data?.shop)} />
		</div>
	);
};
export default ShopViewPage;

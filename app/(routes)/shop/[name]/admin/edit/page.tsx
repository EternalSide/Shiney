import CreateEditShopForm from "@/components/forms/CreateEditShopForm";
import checkAdmin from "@/lib/checkAdmin";
import { AdminParams } from "@/types";

export async function generateMetadata({ params }: AdminParams) {
	const data = await checkAdmin(params.name);
	return {
		title: `Магазин ${data?.shop.name} / Редактировать`,
	};
}

const EditShopPage = async ({ params }: AdminParams) => {
	const data = await checkAdmin(params.name);

	return (
		<div className="base-block">
			<h1 className="base-title">Магазин {data.shop.name} / Редактировать</h1>
			<CreateEditShopForm clerkId={data.clerkId} shopData={data.shop} type="Edit" />
		</div>
	);
};
export default EditShopPage;

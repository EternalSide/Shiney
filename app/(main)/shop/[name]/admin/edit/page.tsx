import CreateEditShopForm from "@/components/forms/CreateEditShopForm";
import checkAdmin from "@/actions/checkAdmin";
import {AdminParams} from "@/types";

const EditShopPage = async ({params}: AdminParams) => {
	const data = await checkAdmin(params.name);

	return (
		<div className='base-block'>
			<h1 className='base-title'>Редактировать магазин</h1>
			<CreateEditShopForm
				clerkId={data?.clerkId!}
				shopData={JSON.stringify(data?.shop)}
				type='Edit'
			/>
		</div>
	);
};
export default EditShopPage;

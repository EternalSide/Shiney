import CreateEditProductForm from "@/components/forms/CreateEditProductForm";
import checkAdmin from "@/serverActions/checkAdmin";
import {AdminParams} from "@/types";

const AddProductPage = async ({params}: AdminParams) => {
	const data = await checkAdmin(params.name);

	return (
		<>
			<h1 className='font-semibold text-2xl'>Магазин Peppe</h1>
			<div className='p-6 bg-white rounded-xl mt-4'>
				<h1 className='font-semibold text-2xl'>Добавить товар</h1>
				<CreateEditProductForm clerkId={data?.clerkId!} />
			</div>
		</>
	);
};
export default AddProductPage;

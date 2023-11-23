import checkAdmin from "@/actions/checkAdmin";
import {AdminParams} from "@/types";

const AddProductPage = async ({params}: AdminParams) => {
	const data = await checkAdmin(params.name);

	return (
		<>
			<h1 className='base-title'>Магазин Peppe</h1>
			<div className='base-block mt-4'>
				<h3 className='base-title'>Добавить товар</h3>
				{/* <CreateEditProductForm clerkId={data?.clerkId!} /> */}
			</div>
		</>
	);
};
export default AddProductPage;

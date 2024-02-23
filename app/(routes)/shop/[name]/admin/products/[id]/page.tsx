import checkOwner from "@/lib/checkOwner";
import { getProductInfo } from "@/actions/product.action";
import { getUserInfo } from "@/actions/user.action";
import CreateEditProductForm from "@/components/forms/CreateEditProductForm";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface Props {
	params: {
		id: string;
	};
}

export async function generateMetadata({ params }: Props) {
	const productInfo = await getProductInfo({ id: params.id });
	if (!productInfo) return redirect("/");

	return {
		title: `Магазин ${productInfo?.shop.name} / Редактировать товар / ${productInfo?.title}`,
	};
}

const EditProductPage = async ({ params }: Props) => {
	const { userId } = auth();

	const productInfo = await getProductInfo({ id: params.id });
	const currentUser = await getUserInfo({ clerkId: userId });

	if (!productInfo || !currentUser) return redirect("/");

	const isOwner = checkOwner(currentUser, productInfo.shopId);

	if (!isOwner) return redirect("/");

	return (
		<div className="base-block">
			<h1 className="base-title">
				Магазин {productInfo?.shop.name} / Редактировать товар / {productInfo?.title}
			</h1>
			<CreateEditProductForm productData={productInfo} type="Edit" />
		</div>
	);
};
export default EditProductPage;

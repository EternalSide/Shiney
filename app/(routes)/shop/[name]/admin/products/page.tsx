import checkAdmin from "@/lib/checkAdmin";
import { getShopProducts } from "@/actions/shop.action";
import ProductAdminCard from "@/components/cards/ProductAdminCard";
import { AdminParams } from "@/types";

export async function generateMetadata({ params }: AdminParams) {
	const data = await checkAdmin(params.name);
	return {
		title: `Магазин ${data?.shop.name} / Управление товарами`,
	};
}

const ShopProductsPage = async ({ params }: AdminParams) => {
	const data = await checkAdmin(params.name);
	const shopProducts = await getShopProducts({ name: data?.shop?.link });

	return (
		<div className="base-block">
			<h3 className="base-title">Магазин {data.shop.name} / Управление товарами</h3>
			<div className="grid_new-products mt-4 ">
				{shopProducts && shopProducts?.length > 0 ? (
					shopProducts.map((product: (typeof shopProducts)[0], i) => (
						<ProductAdminCard
							key={product.id}
							id={product.id}
							picture={product.picture!}
							position={i}
							title={product.title}
							link={product.shop.link}
							name={product.shop.name}
							price={product.price}
						/>
					))
				) : (
					<h3 className="dark:text-zinc-400">Товары отсутствуют.</h3>
				)}
			</div>
		</div>
	);
};
export default ShopProductsPage;

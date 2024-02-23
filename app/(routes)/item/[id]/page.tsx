import CategoriesMenu from "@/components/shared/CategoriesMenu";
import { getCategory } from "@/lib/allCategories";
import { db } from "@/lib/prisma";

export async function generateMetadata({ params }: { params: { id: string } }) {
	const product = await db.product.findUnique({
		where: {
			id: params.id,
		},
		include: {
			categories: {
				select: { href: true },
			},
			shop: true,
		},
	});
	if (!product) {
		return {
			title: `Товар не найден / Shiney.ru`,
		};
	}
	return {
		title: `${product.title} / Shiney.ru`,
	};
}

const ItemPage = async ({ params }: { params: { id: string } }) => {
	const product = await db.product.findUnique({
		where: {
			id: params.id,
		},
		include: {
			categories: {
				select: { href: true },
			},
			shop: true,
		},
	});
	if (!product) return <h1 className="base-title">Товар не найден.</h1>;

	const { accumulator, activeTitle } = getCategory(product.categories.href.slice(1));

	return (
		<>
			<CategoriesMenu currentCategory={activeTitle} accumulator={accumulator} />
			<div className="mt-12">
				<h1 className="base-title">{product.title}</h1>
			</div>
		</>
	);
};
export default ItemPage;

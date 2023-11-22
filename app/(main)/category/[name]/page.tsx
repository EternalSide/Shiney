// @ts-nocheck
import CategoriesMenu from "@/components/CategoriesMenu";
import {allCategories} from "@/lib/allCategories";
import {redirect} from "next/navigation";

interface Props {
	params: {
		name: string;
	};
}

export async function generateMetadata({params}: Props) {
	return {
		title: `Shiney`,
	};
}

const CategoryPage = ({params}: Props) => {
	const categoryHref = params.name;

	let accumulator = [];

	const recursiveSearch = (array, targetValue: string) => {
		for (const item of array) {
			if (accumulator.length >= 2) {
				accumulator;
			} else {
				accumulator = [
					...accumulator,
					{
						label: item.label,
						href: item.href,
					},
				];
			}
			// 1 level
			if (item.href === `/${targetValue}`) {
				return item;
			}

			// 2 level
			if (item.data?.categories) {
				const matchedItem = recursiveSearch(item.data.categories, targetValue);

				if (matchedItem) return matchedItem;
			}
			// 3 level
			else if (item?.categories) {
				const matchedItem = recursiveSearch(item.categories, targetValue);
				if (matchedItem) {
					accumulator = [
						...accumulator,
						{
							label: matchedItem.label,
							href: matchedItem.href,
						},
					];
					return matchedItem;
				}
			}
		}

		// 4 level - no results found
		return null;
	};

	const currentCategory = recursiveSearch(allCategories, categoryHref);

	if (!currentCategory) redirect("/");

	return (
		<>
			<CategoriesMenu accumulator={accumulator} />
		</>
	);
};
export default CategoryPage;

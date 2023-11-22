// @ts-nocheck
import {popularCategories} from "@/constants";
import {allCategories} from "@/lib/allCategories";
import {ChevronRight} from "lucide-react";
import Link from "next/link";

interface Props {
	params: {
		name: string;
	};
}

export async function generateMetadata({params}: Props) {
	const recursiveSearch = (array, targetValue) => {
		for (const item of array) {
			accumulator = [
				...accumulator,
				{
					label: item.label,
					href: item.href,
				},
			];

			if (item.href === `/${targetValue}`) {
				console.log(`Совпадение найдено:`, item);
				return {item, accumulator};
			}

			if (item.data?.categories) {
				const foundInSubCategories = recursiveSearch(
					item.data.categories,
					targetValue,
					accumulator
				);

				if (foundInSubCategories) {
					return foundInSubCategories; // Нашли значение в подкатегориях
				}
			} else {
				const searchResult = item.categories.find(
					(i: any) => i.href === `/${targetValue}`
				);
				accumulator = [
					...accumulator,
					{
						label: searchResult.label,
						href: searchResult.href,
					},
				];
			}
		}

		return null; // Ничего не нашли
	};

	// Пример использования

	let accumulator = [];

	return {
		title: `Shiney `,
	};
}

const CategoryPage = ({params}: Props) => {
	const categoryHref = params.name;

	let accumulator = [];

	const recursiveSearch = (array, targetValue) => {
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

	if (!currentCategory) return null;
	return (
		<div className='mt-2 flex items-center gap-2'>
			<Link href='/'>
				<p className='text-[#626d7a] font-medium text-sm hover:text-sky-500 transition'>
					Главная
				</p>
			</Link>

			{accumulator?.map((item: any) => {
				return (
					<Link
						className='flex items-center'
						key={item.href}
						href={`/category/${item.href}`}
					>
						{" "}
						<ChevronRight className='h-4 w-4' />
						<p className='font-medium text-sm text-sky-500 transition'>
							{item.label}
						</p>
					</Link>
				);
			})}
		</div>
	);
};
export default CategoryPage;

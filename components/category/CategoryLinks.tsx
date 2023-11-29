"use client";
import {AllCategoryItem, allCategories} from "@/lib/allCategories";
import {AccumulatorItem, MainCategory} from "@/types";
import Link from "next/link";

interface Props {
	activeCategory: string;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategoryLinks = ({activeCategory, setOpen}: Props) => {
	const currentItem = allCategories.find((item: AllCategoryItem) => {
		if (activeCategory === item.data.label) return item;
	});

	const closeMenu = () => setOpen(false);

	return (
		<div className='w-full'>
			<h3 className='base-title'>{activeCategory}</h3>
			<div className='grid grid-cols-3 mt-6 gap-12 max-[1300px]:grid-cols-2'>
				{currentItem?.data.categories?.map((category: MainCategory) => (
					<div className='flex flex-col gap-3'>
						<Link
							onClick={closeMenu}
							href={`/category/${category.href}`}
						>
							<h3 className='text-black font-semibold'>{category.label}</h3>
						</Link>
						<ul className='mt-1 flex flex-col gap-3'>
							{category.categories?.map((item: AccumulatorItem) => (
								<Link
									onClick={closeMenu}
									href={`/category/${item.href}`}
								>
									<h3 className='text-[#626d7a] text-sm font-semibold max-w-[250px] hover:text-sky-500 transition'>
										{item.label}
									</h3>
								</Link>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};
export default CategoryLinks;

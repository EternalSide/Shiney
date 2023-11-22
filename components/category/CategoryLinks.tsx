"use client";
import {allCategories} from "@/lib/allCategories";
import Link from "next/link";

interface Props {
	activeCategory: string;
	setActive: (action: boolean) => void;
}

const CategoryLinks = ({activeCategory, setActive}: Props) => {
	const currentItem = allCategories?.find((item: any) => {
		if (activeCategory === item.data.label) return item;
	});

	return (
		<div className='w-full'>
			<h3 className='base-title'>{activeCategory}</h3>
			<div className='grid grid-cols-3 mt-6 gap-12 max-[1300px]:grid-cols-2'>
				{/* @ts-ignore */}
				{currentItem?.data.categories?.map((item: any) => (
					<div className='flex flex-col gap-3'>
						<Link
							onClick={() => setActive(false)}
							href={`/category/${item.href}`}
						>
							<h3 className='text-black font-semibold'>{item.label}</h3>
						</Link>
						<ul className='mt-1 flex flex-col gap-3'>
							{item.categories?.map((link: any) => (
								<Link
									onClick={() => setActive(false)}
									href={`/category/${link.href}`}
								>
									<h3 className='text-[#626d7a] text-sm font-semibold max-w-[250px] hover:text-sky-500 transition'>
										{link.label}
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

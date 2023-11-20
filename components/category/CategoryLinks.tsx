import {allCategories} from "@/lib/allCategories";
import Link from "next/link";

interface Props {
	activeCategory: string;
}

const CategoryLinks = ({activeCategory}: Props) => {
	const currentItem = allCategories?.find((item: any) => {
		if (activeCategory === item.data.label) return item;
	});

	return (
		<div className='w-full'>
			<h3 className='base-title'>{activeCategory}</h3>
			<div className='grid grid-cols-3 mt-6 gap-12 max-[1300px]:grid-cols-2'>
				{currentItem?.data.subCategories?.map((item: any) => (
					<div className='flex flex-col gap-3'>
						<Link href={`/category/${item.href}`}>
							<h3 className='text-black font-semibold'>{item.label}</h3>
						</Link>
						<ul className='mt-1 flex flex-col gap-3'>
							{item.links?.map((link: any) => (
								<Link href={`/category/${item.href}`}>
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

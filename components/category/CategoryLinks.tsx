import Link from "next/link";

const CategoryLinks = ({activeCategory, categories}: any) => {
	const current = categories?.filter((item: any) => {
		if (activeCategory === item.label) {
			return item;
		}
	});

	const currentItem = current[0];

	return (
		<div className='w-full'>
			<h3 className='font-semibold text-2xl'>{activeCategory}</h3>
			<div className='grid grid-cols-3 mt-6 gap-12 max-[1300px]:grid-cols-2'>
				{currentItem?.subCategories?.map((item: any) => (
					<div className='flex flex-col gap-3'>
						<Link href={item.href}>
							<h3 className='text-black font-semibold'>{item.label}</h3>
						</Link>
						<ul className='mt-1 flex flex-col gap-3'>
							{item.links?.map((link: any) => (
								<Link href={link.href}>
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

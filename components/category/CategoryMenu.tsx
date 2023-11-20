import Link from "next/link";

const CategoryMenu = ({categories, setActiveCategory}: any) => {
	return (
		<div className='flex flex-col gap-3'>
			{categories.map((item: any) => (
				<Link
					href={`/category/${item.href}`}
					key={item.value}
					className='flex items-center gap-5 hover:bg-[#e0f2fe] p-3 rounded-md w-64 cursor-pointer'
					onMouseEnter={() => setActiveCategory(item.label)}
				>
					<item.icon className='text-zinc-500 h-[22px] w-[22px]' />
					<h3 className='font-semibold text-base'>{item.label}</h3>
				</Link>
			))}
		</div>
	);
};
export default CategoryMenu;

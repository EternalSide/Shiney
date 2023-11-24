import {allCategories} from "@/lib/allCategories";
import Link from "next/link";

interface Props {
	setActiveCategory: (value: string) => void;
	setOpen: (action: boolean) => void;
}

const CategoryMenu = ({setActiveCategory, setOpen}: Props) => {
	return (
		<div className='flex flex-col gap-3'>
			{allCategories.map((item: any) => (
				<Link
					onClick={() => setOpen(false)}
					href={`/category/${item.data.href}`}
					key={item.value}
					className='flex items-center gap-5 hover:bg-[#e0f2fe] p-3 rounded-md w-64 cursor-pointer'
					onMouseEnter={() => setActiveCategory(item.data.label)}
				>
					<item.data.icon className='text-zinc-500 h-[22px] w-[22px]' />
					<h3 className='font-semibold text-base'>{item.data.label}</h3>
				</Link>
			))}
		</div>
	);
};
export default CategoryMenu;

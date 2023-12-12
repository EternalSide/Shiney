import { AllCategoryItem, allCategories } from "@/lib/allCategories";
import Link from "next/link";

interface Props {
	setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategoryMenu = ({ setActiveCategory, setOpen }: Props) => {
	return (
		<div className="flex flex-col gap-3 dark:bg-[#1d1f24]">
			{allCategories.map((item: AllCategoryItem) => (
				<Link
					key={item.value}
					className="flex items-center gap-5 hover:bg-[#e0f2fe] p-3 rounded-md w-64 cursor-pointer dark:hover:bg-neutral-900"
					href={`/category/${item.data.href}`}
					onClick={() => setOpen(false)}
					onMouseEnter={() => setActiveCategory(item.data.label)}
				>
					<item.data.icon className="text-zinc-500 h-[22px] w-[22px]" />
					<h3 className="font-semibold text-base dark:text-white">{item.data.label}</h3>
				</Link>
			))}
		</div>
	);
};
export default CategoryMenu;

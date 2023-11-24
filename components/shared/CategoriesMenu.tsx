import {AccumulatorItem} from "@/types";
import {ChevronRight} from "lucide-react";
import Link from "next/link";
import MainMenuLink from "./MainMenuLink";

const CategoriesMenu = ({accumulator, currentCategory}: any) => {
	const activeCategory = accumulator?.find(
		(item: AccumulatorItem) => item.label === currentCategory
	);

	return (
		<div className='mt-2 flex items-start gap-1'>
			<MainMenuLink />
			{accumulator?.map((item: AccumulatorItem) => {
				const isActive = item.label === activeCategory.label;
				return (
					<Link
						key={item.href}
						className='flex items-center gap-1'
						href={`/category/${item.href}`}
					>
						<ChevronRight className='h-4 w-4' />
						<p
							className={`text-[#626d7a] font-medium text-[14px] hover:text-sky-500 ${
								isActive && "text-sky-500"
							} transition`}
						>
							{item.label}
						</p>
					</Link>
				);
			})}
		</div>
	);
};
export default CategoriesMenu;

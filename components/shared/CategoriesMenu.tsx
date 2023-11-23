import {ChevronRight} from "lucide-react";
import Link from "next/link";

const CategoriesMenu = ({accumulator, currentCategory}: any) => {
	const activeCategory = accumulator?.find(
		(item: any) => item.label === currentCategory
	);

	return (
		<div className='mt-2 flex items-start gap-1'>
			<Link href='/'>
				<p className='text-[#626d7a] font-medium text-[14px]  hover:text-sky-500 transition'>
					Главная
				</p>
			</Link>

			{accumulator?.map((item: any) => {
				const isActive = item.label === activeCategory.label;
				return (
					<Link
						className='flex items-center gap-1'
						key={item.href}
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

import {ChevronRight} from "lucide-react";
import Link from "next/link";

const CategoriesMenu = ({accumulator}: any) => {
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
export default CategoriesMenu;

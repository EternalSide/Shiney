import {ChevronRight} from "lucide-react";
import Link from "next/link";

const SearchPage = ({params, searchParams}: any) => {
	return (
		<div>
			<div className='flex items-end gap-2'>
				<Link
					className='mt-2 flex items-center gap-2'
					href='/'
				>
					<p className='text-[#626d7a] font-medium text-sm hover:text-sky-500 transition'>
						Главная
					</p>
				</Link>
				<div className='flex items-center gap-2'>
					<ChevronRight className='h-4 w-4' />
					<p className='font-medium text-sm text-sky-500'>Поиск</p>
				</div>
			</div>
			<h1 className='base-title mt-12'>
				По запросу <span className='text-blue-500'>“{searchParams?.q}”</span>{" "}
				найдено 0 товаров
			</h1>
		</div>
	);
};
export default SearchPage;

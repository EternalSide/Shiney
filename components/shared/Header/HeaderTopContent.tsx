import {headerTopLinks} from "@/constants";
import {HeaderTopLinkType} from "@/constants/types";
import {Sun} from "lucide-react";
import Link from "next/link";

const HeaderTopContent = () => {
	return (
		<div className='bg-[#f4f5fa] max-lg:hidden'>
			<div className='flex items-center justify-between max-w-[1420px] w-full mx-auto px-4 py-5'>
				<div className='flex items-end gap-1.5'>
					<img
						src='https://www.svgrepo.com/show/508628/flag-ru.svg'
						className='object-cover h-5 w-5'
					/>

					<p className='text-blue-700 text-xs font-semibold'>Россия</p>
				</div>
				<ul className='flex items-center gap-6'>
					{headerTopLinks.map((item: HeaderTopLinkType) => (
						<Link
							key={item.href}
							href={item.href}
							className='hover:underline'
						>
							<li className='text-sm font-medium'>{item.label}</li>
						</Link>
					))}
					<li className='text-sm font-medium hover:underline cursor-pointer'>
						Поддержка
					</li>
				</ul>
				<div className='flex items-end gap-1.5'>
					<Sun
						className='h-4 w-4 text-orange-500'
						fill='orange'
					/>
					<p className='text-xs font-semibold'>Светлая</p>
				</div>
			</div>
		</div>
	);
};
export default HeaderTopContent;

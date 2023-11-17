import {headerTopLinks} from "@/constants";
import {HeaderTopLinkType} from "@/constants/types";
import {Navigation, Sun} from "lucide-react";
import Link from "next/link";

const HeaderTopContent = () => {
	return (
		<div className='bg-[#f4f5fa] relative'>
			<div className='flex items-center justify-between max-w-[1420px] w-full mx-auto px-4 py-5'>
				<div className='flex items-end gap-1.5'>
					<Navigation
						className='h-4 w-4 text-indigo-700'
						fill='blue'
					/>
					<p className='text-indigo-700 text-xs font-semibold'>Россия</p>
				</div>
				<ul className='flex items-center gap-6 fixed left-2/4 -translate-x-2/4'>
					{headerTopLinks.map((item: HeaderTopLinkType) => (
						<Link
							key={item.href}
							href={item.href}
							className='hover:underline'
						>
							<li className='text-sm'>{item.label}</li>
						</Link>
					))}
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

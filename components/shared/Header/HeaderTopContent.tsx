"use client";
import ThemeAction from "@/components/actions/ThemeAction";
import {HeaderTopLinkType} from "@/constants/types";
import {useModal} from "@/hooks/useModal";
import {useAuth} from "@clerk/nextjs";
import Link from "next/link";

const HeaderTopContent = () => {
	const {userId} = useAuth();
	const {onOpen} = useModal();

	const headerTopLinks: HeaderTopLinkType[] = [
		{
			label: userId ? "Создать магазин" : "Войти",
			href: userId ? "/create" : "/login",
		},
		{
			label: "Мои магазины",
			href: "/shops",
		},
		{
			label: "Новинки",
			href: "/new-products",
		},
		{
			label: "Для продавцов",
			href: "/for-sellers",
		},
		{
			label: "Помощь",
			href: "/help",
		},
	];
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

				<ul className='flex items-center gap-8 absolute right-2/4 translate-x-2/4 w-3/4 justify-center'>
					{headerTopLinks.map((item: HeaderTopLinkType) => (
						<Link
							key={item.href}
							href={item.href}
							className='hover:text-sky-500 transition hover:underline flex justify-center'
						>
							<li className='text-sm font-medium text-center'>{item.label}</li>
						</Link>
					))}
					<li
						onClick={() => onOpen("help")}
						className='text-sm font-medium hover:underline cursor-pointer hover:text-sky-500 transition'
					>
						Контакты
					</li>
				</ul>

				<ThemeAction />
			</div>
		</div>
	);
};
export default HeaderTopContent;

"use client";
import {useModal} from "@/hooks/useModal";
import Image from "next/image";

const CountryAction = () => {
	const {onOpen} = useModal();

	const onClick = () => {
		onOpen("development", "На данный момент смена страны не доступна 😔");
	};

	return (
		<button
			onClick={onClick}
			className='flex items-end gap-1.5 cursor-pointer z-[20] '
		>
			<Image
				alt='Флаг России'
				src='https://www.svgrepo.com/show/508628/flag-ru.svg'
				className='object-cover'
				width={20}
				height={20}
			/>
			<p className='text-blue-700 text-xs font-semibold'>Россия</p>
		</button>
	);
};
export default CountryAction;

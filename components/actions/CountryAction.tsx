"use client";
import {useModal} from "@/hooks/useModal";

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
			<img
				src='https://www.svgrepo.com/show/508628/flag-ru.svg'
				className='object-cover h-5 w-5'
			/>

			<p className='text-blue-700 text-xs font-semibold'>Россия</p>
		</button>
	);
};
export default CountryAction;

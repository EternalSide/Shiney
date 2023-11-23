"use client";
import Image from "next/image";

const CountryAction = () => {
	// const {onOpen} = useModal();

	// const message = "На данный момент смена страны не доступна 😔";

	// const onClick = () => onOpen("development", message);

	return (
		<div className='z-[20] relative'>
			<button className='flex items-end gap-1.5 cursor-default'>
				<Image
					alt='Россия'
					src='/russia.svg'
					width={20}
					height={20}
				/>
				<p className='text-blue-700 text-xs font-semibold'>Россия</p>
			</button>
		</div>
	);
};
export default CountryAction;

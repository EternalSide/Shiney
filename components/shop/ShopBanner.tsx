import Image from "next/image";

const ShopBanner = () => {
	return (
		<div className='h-64 w-full relative'>
			<Image
				className='rounded-lg object-cover object-center rounded-br-none rounded-bl-none'
				src='/basedbg.jpg'
				alt='bg'
				fill
			/>
		</div>
	);
};
export default ShopBanner;

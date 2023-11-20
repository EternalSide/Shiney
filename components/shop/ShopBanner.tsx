import Image from "next/image";

const ShopBanner = ({alt}: {alt: string}) => {
	return (
		<div className='h-64 w-full relative'>
			<Image
				className='rounded-lg object-cover object-center rounded-br-none rounded-bl-none'
				src='/defaultBg.jfif'
				alt={alt}
				fill
			/>
		</div>
	);
};
export default ShopBanner;

import Image from "next/image";

interface Props {
	shopBanner?: string;
	alt?: string;
}

const ShopBanner = ({alt, shopBanner}: Props) => {
	return (
		<div className='h-64 w-full relative'>
			<Image
				className='rounded-lg object-cover object-center rounded-br-none rounded-bl-none'
				src={shopBanner || "/defaultBg.jfif"}
				alt={alt || ""}
				fill
			/>
		</div>
	);
};
export default ShopBanner;

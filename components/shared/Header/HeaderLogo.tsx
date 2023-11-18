import Image from "next/image";
import Link from "next/link";

const HeaderLogo = () => {
	return (
		<Link
			className='flex items-center'
			href='/'
		>
			<div className='relative h-14 w-14'>
				<Image
					className='object-cover object-center ml-0.5'
					src='/favicon.png'
					alt='logo'
					fill
				/>
			</div>
			<h1 className='font-extrabold text-sky-500 text-5xl'>hiney</h1>
		</Link>
	);
};
export default HeaderLogo;

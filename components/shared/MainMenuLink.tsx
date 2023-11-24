import Link from "next/link";

const MainMenuLink = () => {
	return (
		<Link href='/'>
			<p className='text-[#626d7a] font-medium text-[14px]  hover:text-sky-500 transition'>
				Главная
			</p>
		</Link>
	);
};
export default MainMenuLink;

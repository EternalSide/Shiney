import HeaderTopContent from "./HeaderTopContent";
import HeaderSearch from "./HeaderSearch";
import HeaderLogo from "./HeaderLogo";
import HeaderRightLinks from "./HeaderRightLinks";

const Header = () => {
	return (
		<header className='bg-white'>
			<HeaderTopContent />
			<div className='flex items-center gap-6 max-w-[1420px] w-full mx-auto p-4 shadow-md shadow-[#00000005]'>
				<HeaderLogo />
				<HeaderSearch />
				<HeaderRightLinks />
			</div>
		</header>
	);
};
export default Header;

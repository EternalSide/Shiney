import HeaderTopContent from "./HeaderTopContent";
import HeaderSearch from "./HeaderSearch";
import HeaderLogo from "./HeaderLogo";
import HeaderRightLinks from "./HeaderRightLinks";
import HeaderCategories from "./HeaderCategories";

const Header = () => {
	return (
		<header className='bg-white'>
			<HeaderTopContent />
			<div className='relative flex items-center gap-6 max-w-[1420px] w-full mx-auto p-4 shadow-md shadow-[#00000005]'>
				<div className='flex items-center gap-1 max-lg:hidden'>
					<HeaderCategories />
					<HeaderLogo />
				</div>
				<HeaderSearch />
				<HeaderRightLinks />
			</div>
		</header>
	);
};
export default Header;

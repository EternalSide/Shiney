import HeaderTopContent from "./HeaderTopContent";
import HeaderSearch from "./HeaderSearch";
import HeaderRightLinks from "./HeaderRightLinks";
import HeaderCategories from "./HeaderCategories";

const Header = () => {
	return (
		<header className='bg-white'>
			<HeaderTopContent />
			<div className='relative flex items-center justify-between gap-6 max-w-[1420px] w-full mx-auto min-h-[90px] pr-4  pl-4 lg:pl-0 shadow-md shadow-[#00000005]'>
				<div className='flex items-center gap-1 max-lg:hidden'>
					<HeaderCategories />
				</div>
				<HeaderSearch />
				<HeaderRightLinks />
			</div>
		</header>
	);
};
export default Header;

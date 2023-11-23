import HeaderTopContent from "./HeaderTopContent";
import HeaderSearch from "./HeaderSearch";
import HeaderRightLinks from "./HeaderRightLinks";
import HeaderCategories from "./HeaderCategories";

const Header = () => {
	return (
		<header className='bg-white'>
			<HeaderTopContent />
			<div className={`header__container max-w-[1420px]`}>
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

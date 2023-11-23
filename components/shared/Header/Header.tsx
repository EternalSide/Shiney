import HeaderTopContent from "./HeaderTopContent";
import HeaderSearch from "./HeaderSearch";
import HeaderRightLinks from "./HeaderRightLinks";
import HeaderCategories from "./HeaderCategories";

const Header = () => {
	return (
		<header className='bg-white'>
			<HeaderTopContent />
			<div className='header__container'>
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

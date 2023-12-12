import HeaderTopContent from "./HeaderTopContent";
import HeaderSearch from "./HeaderSearch";
import HeaderRightLinks from "./HeaderRightLinks";
import HeaderCategories from "./HeaderCategories";
import HeaderMobileMenu from "./HeaderMobileMenu";

const Header = () => {
	return (
		<header className="bg-white dark:bg-[#1d1f24]">
			<HeaderTopContent />
			<div className="header__container">
				<div className="flex items-center gap-1 max-lg:hidden">
					<HeaderCategories />
				</div>
				<div className="flex items-center lg:hidden">
					<HeaderMobileMenu />
				</div>
				<HeaderSearch />
				<HeaderRightLinks />
			</div>
		</header>
	);
};
export default Header;

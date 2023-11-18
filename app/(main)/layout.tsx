import Header from "@/components/shared/Header/Header";
import MobileNavigation from "@/components/shared/MobileNavigation";
import ModalProvider from "@/providers/ModalProvider";
import {ReactChildren} from "@/types";
import {Toaster} from "@/components/ui/toaster";
const MainLayout = ({children}: ReactChildren) => {
	return (
		<>
			<Header />
			<div>{children}</div>
			<MobileNavigation />
			<ModalProvider />
			<Toaster />
		</>
	);
};
export default MainLayout;

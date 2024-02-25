import Header from "@/components/shared/Header/Header";
import MobileNavigation from "@/components/shared/MobileNavigation";
import ModalProvider from "@/providers/ModalProvider";
import { ReactChildren } from "@/types";
import { Toaster } from "@/components/ui/toaster";
import Hydration from "@/providers/Hydration";

const MainLayout = async ({ children }: ReactChildren) => {
	return (
		<Hydration>
			<Header />
			<div className="max-w-[1420px] w-full mx-auto p-6 max-lg:px-4 max-lg:pb-[88px]">
				{children}
			</div>
			<MobileNavigation />
			<ModalProvider />
			<Toaster />
		</Hydration>
	);
};
export default MainLayout;

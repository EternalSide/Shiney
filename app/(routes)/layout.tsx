import Header from "@/components/shared/Header/Header";
import MobileNavigation from "@/components/shared/MobileNavigation";
import ModalProvider from "@/providers/ModalProvider";
import { ReactChildren } from "@/types";
import { Toaster } from "@/components/ui/toaster";
import Hydration from "@/providers/Hydration";
import { addCategories } from "@/lib/helpers/addcategories.helper";

const MainLayout = async ({ children }: ReactChildren) => {
	return (
		<div className="h-full">
			<Hydration>
				<Header />
				<div className="max-w-[1420px] w-full mx-auto p-6 max-lg:px-4 max-lg:pb-[88px] h-full">
					{children}
				</div>
				<MobileNavigation />
				<ModalProvider />
				<Toaster />
			</Hydration>
		</div>
	);
};
export default MainLayout;

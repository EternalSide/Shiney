import Header from "@/components/shared/Header/Header";
import MobileNavigation from "@/components/shared/MobileNavigation";
import ModalProvider from "@/providers/ModalProvider";
import { ReactChildren } from "@/types";
import { Toaster } from "@/components/ui/toaster";

const MainLayout = async ({ children }: ReactChildren) => {
      return (
            <>
                  <Header />
                  <div className="max-w-[1420px] w-full mx-auto p-6 max-lg:px-4 max-lg:pb-[88px]">{children}</div>
                  <MobileNavigation />
                  <ModalProvider />
                  <Toaster />
            </>
      );
};
export default MainLayout;

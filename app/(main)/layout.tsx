import Header from "@/components/shared/Header/Header";
import ModalProvider from "@/providers/ModalProvider";
import {ReactChildren} from "@/types";

const MainLayout = ({children}: ReactChildren) => {
	return (
		<>
			<Header />
			<div>{children}</div>
			<ModalProvider />
		</>
	);
};
export default MainLayout;

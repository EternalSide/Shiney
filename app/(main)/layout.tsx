import Header from "@/components/shared/Header/Header";
import {ReactChildren} from "@/types";

const MainLayout = ({children}: ReactChildren) => {
	return (
		<>
			<Header />
			<div className='bg-[#f4f5fa] h-[2000px]'>{children}</div>
		</>
	);
};
export default MainLayout;

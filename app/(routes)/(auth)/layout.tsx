import {ReactChildren} from "@/types";

const AuthLayout = ({children}: ReactChildren) => {
	return <div className='pt-10 flex justify-center'>{children}</div>;
};
export default AuthLayout;

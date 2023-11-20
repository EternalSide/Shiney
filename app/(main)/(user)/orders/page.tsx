import {Metadata} from "next";

export const metadata: Metadata = {
	title: "Shiney / Заказы ",
};

const OrdersPage = () => {
	return (
		<>
			<div className='base-block'>
				<h1 className='base-title'>Заказы</h1>
			</div>
		</>
	);
};
export default OrdersPage;

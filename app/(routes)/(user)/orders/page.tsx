import { Metadata } from "next";

export const metadata: Metadata = {
      title: "Shiney / Заказы ",
};

const OrdersPage = () => {
      return (
            <>
                  <div className="base-block">
                        <h1 className="base-title">Заказы</h1>
                        <h3 className="mt-4">Ничего не найдено.</h3>
                  </div>
            </>
      );
};
export default OrdersPage;

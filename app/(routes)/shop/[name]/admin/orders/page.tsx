import checkAdmin from "@/actions/checkAdmin";
import { AdminParams } from "@/types";

export async function generateMetadata({ params }: AdminParams) {
      const data = await checkAdmin(params.name);
      return {
            title: `Магазин ${data?.shop.name} / Заказы`,
      };
}

const OrdersPage = async ({ params }: AdminParams) => {
      const data = await checkAdmin(params.name);

      return (
            <div className="base-block">
                  <h3 className="base-title">Магазин {data.shop.name} / Заказы</h3>
            </div>
      );
};
export default OrdersPage;

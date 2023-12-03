import checkAdmin from "@/actions/checkAdmin";
import CreateEditProductForm from "@/components/forms/CreateEditProductForm";
import { AdminParams } from "@/types";

export async function generateMetadata({ params }: AdminParams) {
      const data = await checkAdmin(params.name);
      return {
            title: `Магазин ${data?.shop.name} / Управление товарами`,
      };
}

const ShopProductsPage = async ({ params }: AdminParams) => {
      const data = await checkAdmin(params.name);
      return (
            <>
                  <div className="base-block">
                        <h3 className="base-title">Магазин {data.shop.name} / Управление товарами</h3>
                  </div>
            </>
      );
};
export default ShopProductsPage;

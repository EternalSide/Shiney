import checkAdmin from "@/actions/checkAdmin";
import CreateEditProductForm from "@/components/forms/CreateEditProductForm";
import { AdminParams } from "@/types";
import Loading from "../loading";

export async function generateMetadata({ params }: AdminParams) {
      const data = await checkAdmin(params.name);
      return {
            title: `Магазин ${data?.shop.name} / Добавить товар`,
      };
}

const AddProductPage = async ({ params }: AdminParams) => {
      const data = await checkAdmin(params.name);

      return (
            <>
                  <div className="base-block">
                        <h3 className="base-title">Магазин {data.shop.name} / Добавить товар</h3>
                        <CreateEditProductForm shopId={data.shop.id} shopLink={data.shop.link} userId={data.user.id} />
                  </div>
            </>
      );
};
export default AddProductPage;

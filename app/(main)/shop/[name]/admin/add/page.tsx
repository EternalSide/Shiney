import checkAdmin from "@/actions/checkAdmin";
import CreateEditProductForm from "@/components/forms/CreateEditProductForm";
import { AdminParams } from "@/types";

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
                  <h1 className="base-title">Магазин {data.shop.name}</h1>
                  <div className="base-block mt-4">
                        <h3 className="base-title">Добавить товар</h3>
                        <CreateEditProductForm shopId={data.shop.id} userId={data.user.id} />
                  </div>
            </>
      );
};
export default AddProductPage;

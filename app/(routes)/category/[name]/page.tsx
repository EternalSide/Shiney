import ProductCard from "@/components/cards/ProductCard";
import CategoriesMenu from "@/components/shared/CategoriesMenu";
import { getCategory } from "@/lib/allCategories";
import { Suspense } from "react";
import Loading from "./loading";
import { getCategoryProducts } from "@/actions/dbActions/category.action";
import { noShopImage } from "@/constants";
import { auth } from "@clerk/nextjs";
import { getUserProducts } from "@/actions/dbActions/user.action";
import Pagination from "@/components/shared/Pagination";

const CategoryPage = async ({ params, searchParams }: any) => {
      const { userId } = auth();
      const userProducts = await getUserProducts({ clerkId: userId });

      // Управление категорией, активная, главная ли категория, меню.
      const { accumulator, noCategory, activeTitle, currentCategory, isMainCategory } = getCategory(params.name);

      // Текущая страница
      const currentPage = searchParams?.page ? parseInt(searchParams.page) : 1;

      const { isNextPage, products, totalLength } = await getCategoryProducts({
            categoryHref: currentCategory?.href || isMainCategory?.href,
            page: currentPage,
      });

      if (noCategory) {
            return (
                  <h1 className="base-title">
                        Категории <span className="text-blue-500">{params.name}</span> не существует
                  </h1>
            );
      }

      return (
            <>
                  <CategoriesMenu currentCategory={activeTitle} accumulator={accumulator} />
                  <div className="mt-12">
                        <div className="flex items-center gap-2.5">
                              <h1 className="base-title">{activeTitle}</h1>
                              <p className="text-[#626d7a] font-semibold mt-0.5">Товаров - {totalLength}</p>
                        </div>
                        <div className="mt-2 flex items-start h-full">
                              <Suspense fallback={<Loading />}>
                                    {products?.length > 0 ? (
                                          <div className="grid max-[520px]:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full">
                                                {products.map((item: any) => (
                                                      <ProductCard
                                                            key={item.id}
                                                            title={item.title}
                                                            id={item.id}
                                                            imgSrc={item?.picture || noShopImage}
                                                            price={Number(item.price)}
                                                            ratingNumber={5.0}
                                                            ratingCounter={0}
                                                            buyNumber={item.Shop.buyCount}
                                                            shopName={item.Shop.name}
                                                            shopLink={item.Shop.link}
                                                            description={item.description}
                                                            clerkId={userId!}
                                                            shopImage={item.Shop.avatar}
                                                            inFav={userProducts?.some(
                                                                  (product: (typeof userProducts)[0]) => product.id === item.id
                                                            )}
                                                      />
                                                ))}
                                          </div>
                                    ) : (
                                          <div className="flex justify-center items-center mt-10 w-full">
                                                <h1 className="text-[#626d7a] font-semibold text-2xl">Ничего не найдено</h1>
                                          </div>
                                    )}
                              </Suspense>
                        </div>
                        {products?.length >= 20 && <Pagination currentPage={currentPage} isNextPage={isNextPage} />}
                  </div>
            </>
      );
};
export default CategoryPage;

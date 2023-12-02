"use client";
import { useKorzina } from "@/hooks/useKorzina";
import { Heart, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";
import { useToast } from "../ui/use-toast";
import { usePathname } from "next/navigation";
import { useOptimistic } from "react";
import { MotionDiv } from "../shared/MotionDiv";
import { addProductToUserFav } from "@/actions/dbActions/product.action";

interface Props {
      id: string | number;
      title: string;
      description: string;
      imgSrc: string;
      shopName: string;
      shopLink: string;
      buyNumber: number | string;
      ratingNumber: number;
      ratingCounter: number;
      price: number;
      clerkId?: string | undefined | null;
      inFav?: boolean;
}

const variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
};

const ProductCard = ({
      id,
      inFav,
      title,
      description,
      imgSrc,
      shopName,
      buyNumber,
      ratingNumber,
      ratingCounter,
      price,
      clerkId,
      shopLink,
}: Props) => {
      const { addProduct, products } = useKorzina();
      const { toast } = useToast();
      const path = usePathname();
      // Optimistic UI
      const [optimisticState, addOptimistic] = useOptimistic(inFav, (currentState: boolean | undefined, optimisticValue: boolean) => {
            return (currentState = optimisticValue);
      });

      const handleKorzina = () => {
            const alreadyInKorzina = products.some((item: any) => item.id === id);

            if (alreadyInKorzina) return;

            let product = {
                  title,
                  description,
                  picture: imgSrc,
                  price,
                  id,
                  quantity: 1,
            };

            addProduct(product);

            return toast({
                  title: "Товар добавлен в корзину!",
            });
      };

      const handleLikeProduct = async () => {
            if (!clerkId) {
                  return toast({
                        title: "Вы не авторизованы!",
                        description: "Войдите, чтобы добавить товар в избранное",
                        variant: "destructive",
                  });
            }

            addOptimistic(!optimisticState);

            toast({
                  title: optimisticState ? "Товар удален из избранного" : "Товар добавлен в избранное!",
            });

            await addProductToUserFav({
                  productId: id as string,
                  userId: clerkId,
                  path,
                  inFav,
            });
      };

      return (
            <MotionDiv
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                        delay: 0,
                        ease: "easeInOut",
                        duration: 0.5,
                  }}
                  viewport={{ amount: 0 }}
                  className="max-w-sm rounded relative w-full"
            >
                  <Link className="block relative w-full h-64" href={`/${id}`}>
                        <img className="h-64 object-cover rounded-xl w-full" src={imgSrc} />
                        {/* <Image
					className='h-64 object-cover rounded-xl'
					src={imgSrc}
					alt={title}
					fill
				/> */}
                  </Link>

                  <div className="flex justify-between w-full items-center mt-2.5">
                        <Link href="/" className="flex-1">
                              <h3 className="text-[#252525] font-semibold">{title}</h3>
                        </Link>
                        <div className="flex gap-2 items-center">
                              <button onClick={handleLikeProduct}>
                                    <Heart
                                          className={`h-5 w-5 hover:text-sky-400 transition hover:scale-110 ${
                                                optimisticState && "text-sky-400"
                                          }`}
                                    />
                              </button>
                              <button onClick={handleKorzina}>
                                    <ShoppingCart className={"h-5 w-5 hover:text-orange-400 transition hover:scale-110"} />
                              </button>
                        </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                        <h3 className="text-xl font-semibold">{price}₽</h3>
                        <div className="flex items-center gap-1.5">
                              <Star className="h-4 w-4 text-orange-400 " fill="orange" />
                              <p className="font-semibold text-gray-400 text-sm">
                                    <span className="text-orange-400">{ratingNumber} </span>({ratingCounter || 0})
                              </p>
                        </div>
                  </div>

                  <div className="mt-2 flex items-center justify-between">
                        <Link href={`/shop/${shopLink}`}>
                              <h3 className="text-zinc-700 font-semibold text-sm hover:text-blue-600 transition">{shopName}</h3>
                        </Link>
                        <p className="text-zinc-700 text-sm font-semibold">
                              Покупок: <span className="text-gray-400">{buyNumber}</span>
                        </p>
                  </div>
            </MotionDiv>
      );
};
export default ProductCard;

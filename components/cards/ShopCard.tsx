import Link from "next/link";
import { MotionDiv } from "../shared/MotionDiv";
import Image from "next/image";
import { motionVariants } from "@/constants";

interface Props {
      imgSrc: string | null;
      title: string;
      productCount: number;
      description: string;
      followersCount: number;
      link: string;
}

const ShopCard = ({ imgSrc, title, productCount, description, followersCount, link }: Props) => {
      return (
            <MotionDiv
                  variants={motionVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                        delay: 0,
                        ease: "easeInOut",
                        duration: 0.5,
                  }}
                  viewport={{ amount: 0 }}
                  className="max-w-sm  relative w-full"
            >
                  <Link className="block relative w-full h-64" href={`/shop/${link}`}>
                        <Image className="h-64 object-cover rounded-xl rounded-b-none" src={imgSrc!} alt="" fill />
                  </Link>
                  <div className="bg-white p-5 rounded-xl rounded-t-none">
                        <div className="flex w-full">
                              <Link href={`/shop/${link}`} className="flex-1">
                                    <h3 className="text-[#252525] font-semibold hover:text-blue-600 transition text-lg">{title}</h3>
                              </Link>
                        </div>
                        <div className="mt-0.5">
                              <p className="text-gray-500 font-medium">{description}</p>
                        </div>
                        <div className="mt-5 flex flex-col items-start gap-3 justify-center">
                              <p className="text-zinc-700 text-sm font-semibold">
                                    Товаров: <span className="text-gray-400">{productCount}</span>
                              </p>
                              <p className="text-zinc-700 text-sm font-semibold">
                                    Подписчиков: <span className="text-gray-400">{followersCount}</span>
                              </p>
                        </div>
                  </div>
            </MotionDiv>
      );
};
export default ShopCard;

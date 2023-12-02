import Link from "next/link";
import { MotionDiv } from "../shared/MotionDiv";
import Image from "next/image";

const variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
};

interface Props {
      imgSrc: string | null;
      title: string;
      buyNumber: number;
      description: string;
      followersCount: number;
      link: string;
}

const ShopCard = ({ imgSrc, title, buyNumber, description, followersCount, link }: Props) => {
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
                  <Link className="block relative w-full h-64" href={`/shop/${link}`}>
                        <Image className="h-64 object-cover rounded-xl" src={imgSrc!} alt="" fill />
                  </Link>
                  <div className="flex w-full  mt-2.5">
                        <Link href={`/shop/${link}`} className="flex-1">
                              <h3 className="text-[#252525] font-semibold hover:text-blue-600 transition">{title}</h3>
                        </Link>
                  </div>
                  <div className="mt-0.5">
                        <p className="text-gray-500 font-medium">{description}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-6 justify-center">
                        <p className="text-zinc-700 text-sm font-semibold">
                              Продаж: <span className="text-gray-400">{buyNumber}</span>
                        </p>
                        <p className="text-zinc-700 text-sm font-semibold">
                              Подписчиков: <span className="text-gray-400">{followersCount}</span>
                        </p>
                  </div>
            </MotionDiv>
      );
};
export default ShopCard;

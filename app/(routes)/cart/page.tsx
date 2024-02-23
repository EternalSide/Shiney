"use client";
import { Button } from "@/components/ui/button";
import { noShopImage } from "@/constants";
import { useKorzina } from "@/hooks/useKorzina";
import { ILocalProduct } from "@/types";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const CartPage = () => {
	const getInitialProducts = () => {
		if (typeof window !== "undefined") {
			const productsCookie = Cookies.get("products");
			return productsCookie ? JSON.parse(productsCookie) : [];
		}
		return [];
	};

	const [hydrate, setHydrate] = useState(false);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setHydrate(true);
		const products = getInitialProducts();
		setProducts(products);
	}, [hydrate]);

	const { products: productsLocale } = useKorzina();

	useEffect(() => {
		// @ts-ignore
		setProducts(productsLocale);
	}, [productsLocale]);

	if (!hydrate)
		return (
			<div>
				<h1 className="base-title">Корзина</h1>
			</div>
		);

	const makeOrder = async () => {
		try {
			// await createOrder({
			// });
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<>
			<h1 className="base-title mb-6">Корзина</h1>
			{products && products.length > 0 ? (
				<div className="flex items-start gap-6">
					<div className="flex flex-col gap-3 flex-1">
						{products.map((product: ILocalProduct) => {
							return (
								<div className="flex-1 w-full" key={product.id}>
									<div className="flex items-center gap-1.5 ">
										<Link href={`/shop/${product.shopLink}`}>
											<button className="dark:bg-neutral-800 bg-white flex items-center gap-2.5 py-3 px-6 rounded-t-2xl">
												<Image
													className="rounded-full object-cover"
													alt=""
													width={40}
													height={40}
													src={product.shopImage || noShopImage}
												/>
												<h3 className="text-sky-500 font-semibold">
													{product.shopName}
												</h3>
											</button>
										</Link>
									</div>
									<div className="bg-white dark:bg-neutral-800 rounded-t-none rounded-lg w-full p-5 flex items-center justify-between">
										<div className="flex gap-2.5 items-center">
											<div className="relative w-[100px] h-[100px]">
												<Image
													className="rounded-lg object-cover"
													alt=""
													fill
													src={product.picture || noShopImage}
												/>
											</div>
											<div className="">
												<Link href={"/"}>
													<h3 className="font-bold dark:text-zinc-200 text-lg hover:text-sky-500 transition">
														{product.title}
													</h3>
												</Link>
												<p className="mt-0.5 text-base text-[#626d7a] font-medium line-clamp-1 max-w-[250px]">
													{product.description}
												</p>
												<p className="mt-0.5 text-base text-[#626d7a] font-medium line-clamp-1 max-w-[250px]">
													Количество: {product.quantity}
												</p>
											</div>
										</div>
										<div className="mr-10 flex items-center gap-6">
											<p className="font-bold text-xl text-sky-500">
												{product.quantity * product.price} ₽
											</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
					<div className="bg-white mt-[54px] rounded-lg w-[320px] p-5">
						<Button onClick={makeOrder} className="w-full text-lg" variant={"blue"}>
							Оформить
						</Button>
					</div>
				</div>
			) : (
				<div className="dark:text-zinc-400">Ничего не найдено.</div>
			)}
		</>
	);
};
export default CartPage;

"use client";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import { useEdgeStore } from "@/lib/edgestore";
import { FormEvent, useState } from "react";
import { SingleImageDropzone } from "./SingleImageDropzone";
import { updateShopImages } from "@/actions/dbActions/shop.action";
import { noShopBanner } from "@/constants";
import { useEasyLoad } from "@/hooks/useEasyLoad";

interface Props {
	shopData?: any;
}

const CreateEditImages = ({ shopData }: Props) => {
	const shop = shopData && JSON.parse(shopData);

	const [shopImage, setShopImage] = useState<File>();
	const [shopBanner, setShopBanner] = useState<File>();
	const [isLoading, setIsLoading] = useState(false);

	const { easyLoad } = useEasyLoad();

	const { edgestore } = useEdgeStore();
	const router = useRouter();
	const { toast } = useToast();
	const path = usePathname();

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			let shop_image = shop?.avatar;
			let shop_banner = shop?.banner;

			toast({
				title: "Обновляем внешний вид магазина..",
			});

			// Если есть фото
			if (shopImage) {
				const res = await edgestore.shopImage.upload({
					file: shopImage!,
					options: {
						replaceTargetUrl: shop?.avatar,
					},
				});

				await easyLoad.upload(shopImage, "3e2ae505-main");
				await easyLoad.delete(
					"https://s3.timeweb.com/3e2ae505-main/64ff9ee3-ae32-4a31-9702-0b87d44005bc-a35f3931074ef21c94fa9fbae4259431.jpg",
					"3e2ae505-main"
				);
				shop_image = res.url;
			}

			// Если есть Баннер
			if (shopBanner) {
				const res = await edgestore.shopBanner.upload({
					file: shopBanner,
					options: {
						replaceTargetUrl: shop?.banner ? shop.banner : "",
					},
				});

				shop_banner = res.url;
			}

			await updateShopImages({
				shopId: shop.id,
				shopImage: shop_image,
				shopBanner: shop_banner,
				path,
			});

			toast({
				title: "Внешний вид магазина изменен ✔️",
			});

			router.back();
		} catch (e) {
			toast({
				title: "Что-то пошло не так...",
				description: "Попробуйте еще раз",
				variant: "destructive",
			});
			console.log(e);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form className="mt-8 space-y-8" onSubmit={onSubmit}>
			<div>
				<h3 className="mb-3 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold">
					Изображение
				</h3>
				<SingleImageDropzone
					width={300}
					height={300}
					value={shopImage || shop?.avatar}
					onChange={(file) => setShopImage(file)}
				/>
				<p className="mt-2 text-sm text-muted-foreground">Изображение вашего магазина.</p>
			</div>
			<div>
				<h3 className="mb-3 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold">
					Баннер
				</h3>
				<SingleImageDropzone
					className="w-full"
					height={256}
					value={shopBanner || shop?.banner || noShopBanner}
					onChange={(file) => setShopBanner(file)}
				/>
				<p className="mt-2 text-sm text-muted-foreground">Баннер вашего магазина.</p>
			</div>

			<div className="flex justify-end items-center gap-6">
				<Button
					onClick={() => router.back()}
					className="bg-[#edeefb] font-semibold text-sky-500  p-6 rounded-lg"
					type="button"
				>
					Отменить
				</Button>
				<Button
					disabled={(!shopImage && !shopBanner) || isLoading}
					variant="blue"
					type="submit"
				>
					Сохранить изменения
				</Button>
			</div>
		</form>
	);
};
export default CreateEditImages;

"use client";
import { noShopImage } from "@/constants";
import { Edit, Trash } from "lucide-react";
import Image from "next/image";
import { useToast } from "../ui/use-toast";
import { deleteProductAction } from "@/actions/product.action";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

interface Props {
	id: string;
	picture: string;
	title: string;
	position: number;
	link: string;
	name: string;
	price: string;
}

const ProductAdminCard = ({ id, picture, title, position, link, name, price }: Props) => {
	const { toast } = useToast();
	const path = usePathname();
	const [isLoading, setIsLoading] = useState(false);

	const deleteProduct = async () => {
		setIsLoading(true);
		try {
			await deleteProductAction({
				id,
				path,
			});

			toast({
				title: "Товар удален",
			});
		} catch (e) {
			toast({
				title: "Что-то пошло не так...",
				description: "Попробуйте еще раз",
				variant: "destructive",
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div key={id} className="flex flex-col border border-sky-500 p-3 rounded-lg">
			<p className="font-bold text-sky-500 text-3xl mb-1">{position + 1}</p>
			<div className="relative h-64 w-full">
				<Image
					src={picture || noShopImage}
					alt={title}
					fill
					className="object-cover rounded-lg"
				/>
			</div>
			<div className="flex justify-between items-center">
				<h3 className="font-bold text-lg mt-3 dark:text-white">{title}</h3>
				<div className="flex gap-3 items-center mt-2.5">
					<Link href={`/shop/${link}/admin/products/${id}`}>
						<button>
							<Edit className="h-5 w-5 text-sky-500 hover:opacity-90 transition" />
						</button>
					</Link>
					<button disabled={isLoading} onClick={deleteProduct}>
						<Trash className="h-5 w-5 text-red-500 hover:opacity-90 transition" />
					</button>
				</div>
			</div>

			<div className="mt-2 flex items-center justify-between">
				<h3 className="text-xl font-semibold dark:text-white">{price} ₽</h3>
			</div>
		</div>
	);
};
export default ProductAdminCard;

import {popularCategories} from "@/constants";
import {ChevronRight} from "lucide-react";
import Link from "next/link";
import {redirect} from "next/navigation";

interface Props {
	params: {
		name: string;
	};
}

const CategoryPage = ({params}: Props) => {
	const detectName = () => {
		const category = popularCategories.find((item: any) => {
			if (item.category === params.name) return item;
		});

		return category;
	};
	const category = detectName();
	if (!category) redirect("/");

	return (
		<div className='max-w-[1420px] w-full mx-auto p-6'>
			<div className='mt-2 flex items-center gap-2'>
				<Link href='/'>
					<p className='text-[#626d7a] font-medium text-sm hover:text-sky-500 transition'>
						Главная
					</p>
				</Link>
				<ChevronRight className='h-4 w-4' />
				<Link href={category?.href!}>
					<p className='font-medium text-sm text-sky-500 transition'>
						{category?.label}
					</p>
				</Link>
			</div>
		</div>
	);
};
export default CategoryPage;

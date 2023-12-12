import Link from "next/link";

interface Props {
	title: string;
	href: string;
	imgSrc: string;
}

const CategoryCard = ({ title, href, imgSrc }: Props) => {
	return (
		<Link
			href={href}
			className="group h-48 rounded-xl justify-center items-center bg-[#e7eaf3] flex flex-col gap-3 dark:bg-[#1d1f24]"
		>
			<img
				className="object-cover group-hover:scale-105 group-hover:-translate-y-3 transition duration-300"
				src={imgSrc}
			/>
			<h3 className="font-semibold group-hover:text-blue-600 transition dark:text-[#626d7a]">
				{title}
			</h3>
		</Link>
	);
};
export default CategoryCard;

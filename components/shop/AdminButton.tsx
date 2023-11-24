import Image from "next/image";
import Link from "next/link";

interface Props {
	href: string;
	imgSrc: string;
	label: string;
}

const AdminButton = ({href, imgSrc, label}: Props) => {
	return (
		<Link
			className='rounded-md bg-transparent text-black text-xl font-semibold flex justify-center transition group hover:bg-sky-500'
			href={href}
		>
			<button className='admin-shop-card'>
				<div className='relative h-28 w-28'>
					<Image
						fill
						className='object-cover'
						src={`/ducks/${imgSrc}`}
						alt={label}
					/>
				</div>
				<p className='group-hover:text-white transition'>{label}</p>
			</button>
		</Link>
	);
};
export default AdminButton;

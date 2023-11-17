import Link from "next/link";

interface Props {
	imgSrc: string;
}

const PromoCard = ({imgSrc}: Props) => {
	return (
		<Link href='/'>
			<img
				src={imgSrc}
				className='object-cover rounded-xl'
			/>
		</Link>
	);
};
export default PromoCard;

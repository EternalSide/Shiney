import Link from "next/link";

const BigPromoCard = ({imgSrc}: {imgSrc: string}) => {
	return (
		<Link href='/'>
			<img
				src={imgSrc}
				className='rounded-xl'
			/>
		</Link>
	);
};
export default BigPromoCard;

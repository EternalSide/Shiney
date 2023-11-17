import PromoCard from "../cards/PromoCard";

const Promos = () => {
	return (
		<div className='mt-6 grid grid-cols-2 gap-6 max-md:grid-cols-1'>
			<PromoCard imgSrc='https://blablabla.cdn.wikkeo.com/BlaBlaBla/cf/34/1e/86/20/018b37fc-cf34-7d1e-8620-a072849c6900.avif' />
			<PromoCard imgSrc='https://blablabla.cdn.wikkeo.com/BlaBlaBla/1b/19/65/bc/33/0189fb5c-1b19-7265-bc33-291d59e5a07d.jpg' />
		</div>
	);
};
export default Promos;

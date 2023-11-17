interface ShopPageProps {
	params: {
		name: string;
	};
}

const ShopPage = async ({params}: ShopPageProps) => {
	const {name} = params;

	// await getShopInfo({name});

	return (
		<div>
			<h1>Магазин - {name}</h1>
		</div>
	);
};
export default ShopPage;

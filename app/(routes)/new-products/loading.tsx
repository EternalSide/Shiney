import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
	return (
		<>
			<h1 className="base-title">Новинки</h1>
			<div className="grid_new-products">
				{Array.from({ length: 20 }, (_, i) => (
					<Skeleton key={i} className="h-64 rounded-lg bg-loading" />
				))}
			</div>
		</>
	);
};
export default Loading;

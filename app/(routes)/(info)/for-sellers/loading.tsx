import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
	return (
		<>
			<h1 className="base-title text-black">Для продавцов</h1>
			<Skeleton className="h-[146px] w-full rounded-lg bg-loading mt-4" />
		</>
	);
};
export default Loading;

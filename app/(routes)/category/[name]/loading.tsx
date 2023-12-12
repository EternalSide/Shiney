import { Skeleton } from "@/components/ui/skeleton";
import { ChevronRight } from "lucide-react";

const Loading = () => {
	return (
		<div className="grid_new-products !mt-20">
			{Array.from({ length: 20 }, (_, i) => (
				<Skeleton key={i} className="h-64 rounded-lg bg-loading" />
			))}
		</div>
	);
};
export default Loading;

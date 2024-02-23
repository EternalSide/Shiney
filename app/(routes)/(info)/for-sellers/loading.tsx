import { Loader2Icon } from "lucide-react";

const Loading = () => {
	return (
		<>
			<h1 className="base-title text-black">Для продавцов</h1>
			<Loader2Icon className="mx-auto mt-10 h-10 w-10 animate-spin text-indigo-500" />
		</>
	);
};
export default Loading;

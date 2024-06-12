import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
	return (
		<div className="min-h-screen w-full flex justify-center items-center flex-col gap-3">
			<div className="relative h-[250px] w-[250px]">
				<Image className="object-cover" src="/404.gif" alt="404" fill />
			</div>
			<div className="text-center z-[100]">
				<h1 className="text-2xl font-bold max-md:text-lg -mt-2 dark:text-white">
					ха-ха, ты нашел меня, но страницы такой нету..
				</h1>
			</div>
			<Link href="/">
				<p className="text-sky-500 text-2xl font-semibold max-md:text-lg">
					Вернуться на главную?
				</p>
			</Link>
		</div>
	);
};
export default NotFound;

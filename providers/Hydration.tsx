"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Hydration = ({ children }: any) => {
	const [h, setH] = useState(false);

	useEffect(() => setH(true), []);

	if (!h)
		return (
			<div
				style={{
					backgroundColor: "#141518",
				}}
				className="bg-[#141518] relative h-full w-full flex justify-center items-center min-h-screen flex-col gap-0.5"
			>
				<div className="relative w-32 h-32 animate-spin ">
					<Image
						className="object-cover object-center"
						src="/logo.svg"
						alt="Shiney"
						fill
					/>
				</div>

				<h1 className="block text-white text-3xl font-bold">Shiney.ru</h1>
			</div>
		);

	return <>{children}</>;
};
export default Hydration;

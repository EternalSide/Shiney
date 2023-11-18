"use client";

import {Check, Copy} from "lucide-react";
import {useState} from "react";

const CopyAction = ({text}: {text: string}) => {
	const [copied, setCopied] = useState(false);
	return (
		<>
			{copied ? (
				<button disabled={copied}>
					<Check className='h-4 w-4 text-neutral-400' />
				</button>
			) : (
				<Copy
					onClick={(e) => {
						e.preventDefault();
						navigator.clipboard.writeText(text);
						setCopied(true);
						setTimeout(() => {
							setCopied(false);
						}, 1500);
					}}
					className='h-4 w-4 text-neutral-400'
				/>
			)}
		</>
	);
};
export default CopyAction;

"use client";
import {Check, Copy} from "lucide-react";
import {useState} from "react";

const CopyAction = ({text}: {text: string}) => {
	const [copied, setCopied] = useState(false);

	const copyLink = (e: React.MouseEvent) => {
		e.preventDefault();
		navigator.clipboard.writeText(text);
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	};

	return (
		<button
			onClick={(e) => (copied ? () => {} : copyLink(e))}
			disabled={copied}
		>
			{copied ? (
				<Check className='h-4 w-4 text-neutral-400' />
			) : (
				<Copy className='h-4 w-4 text-neutral-400' />
			)}
		</button>
	);
};
export default CopyAction;

import {useEffect} from "react";

interface Props {
	ref: React.ForwardedRef<HTMLDivElement>;
	setOpen: (action: boolean) => void;
	pathname: string;
	open: boolean;
}

const useClickOutside = ({ref, open, setOpen, pathname}: Props) => {
	useEffect(() => {
		const handleOutsideClick = (e: MouseEvent) => {
			// @ts-ignore
			if (ref && ref.current && !ref.current.contains(e.target)) {
				setOpen(false);
			}
		};

		const handleScroll = (e: Event) => window.scrollTo(0, 0);

		const handleEscClick = (e: KeyboardEvent) => {
			if (e.key === "Escape") return setOpen(false);
		};

		document.addEventListener("click", handleOutsideClick);
		document.addEventListener("keydown", handleEscClick);

		if (open) {
			document.addEventListener("scroll", handleScroll);
		}

		return () => {
			document.removeEventListener("click", handleOutsideClick);
			document.removeEventListener("scroll", handleScroll);
			document.removeEventListener("keydown", handleEscClick);
		};
	}, [ref, pathname, open]);
};

export default useClickOutside;

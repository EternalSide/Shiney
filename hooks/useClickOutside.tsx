import {useEffect} from "react";

interface Props {
	ref: React.RefObject<any>;
	setOpen: (action: boolean) => void;
	open: boolean;
	korzina?: boolean;
}

const useClickOutside = ({ref, open, setOpen, korzina}: Props) => {
	useEffect(() => {
		const handleOutsideClick = (e: MouseEvent) => {
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

		if (open && !korzina) {
			document.addEventListener("scroll", handleScroll);
		}

		return () => {
			document.removeEventListener("click", handleOutsideClick);
			document.removeEventListener("scroll", handleScroll);
			document.removeEventListener("keydown", handleEscClick);
		};
	}, [ref, ref.current, open, setOpen]);
};

export default useClickOutside;

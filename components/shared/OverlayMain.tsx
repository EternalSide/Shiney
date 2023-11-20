import {useState} from "react";

// Для анимация Overlay над переместить в Layout и переключать класс hidden
// Сейчас закрывается сразу
const OverlayMain = ({zIndex}: {zIndex: string}) => {
	const [isVisible, setIsVisible] = useState(true);

	let animation = {
		transitionDuration: isVisible ? "0.5s" : "0s",
		opacity: isVisible ? "1" : "0",
	};

	return (
		<div
			style={animation}
			className={`min-h-screen bg-neutral-800/20 w-full fixed left-0 top-0 ${zIndex} transition`}
		/>
	);
};

export default OverlayMain;

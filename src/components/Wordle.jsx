import { useEffect } from "react";
import useWordle from "../hooks/useWordle";

const Wordle = ({ solution }) => {
	const { currentGuess, handleKeyUp } = useWordle(solution);

	useEffect(() => {
		window.addEventListener("keyup", handleKeyUp);

		return () => window.removeEventListener("keyup", handleKeyUp);
	}, [handleKeyUp]);

	return (
		<div>
			<div>solution - {solution}</div>
			<div>current guess - {currentGuess}</div>
		</div>
	);
};

export default Wordle;

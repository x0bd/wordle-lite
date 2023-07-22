import { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";

const Wordle = ({ solution }) => {
	const {
		currentGuess,
		handleKeyUp,
		guesses,
		isCorrect,
		turn,
		usedKeys,
	} = useWordle(solution);

	useEffect(() => {
		window.addEventListener("keyup", handleKeyUp);

		if (isCorrect) {
			window.removeEventListener("keyup", handleKeyUp);
		}

		if (turn > 5) {
			window.removeEventListener("keyup", handleKeyUp);
		}

		return () => window.removeEventListener("keyup", handleKeyUp);
	}, [handleKeyUp, isCorrect, turn]);

	return (
		<div>
			<div>solution - {solution}</div>
			<div>current guess - {currentGuess}</div>
			<Grid
				currentGuess={currentGuess}
				guesses={guesses}
				turn={turn}
			/>
			<Keypad usedKeys={usedKeys} />
		</div>
	);
};

export default Wordle;

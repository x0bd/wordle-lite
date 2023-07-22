import React from "react";
import Row from "./Row";

const Grid = ({ currentGuess, guesses, turn }) => {
	return (
		<div>
			{guesses.map((guess, i) => {
				return <Row key={i} />;
			})}
		</div>
	);
};

export default Grid;

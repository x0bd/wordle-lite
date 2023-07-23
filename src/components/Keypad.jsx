import React, { useEffect, useState } from "react";

const Keypad = ({ usedKeys }) => {
	const [letters, setLetters] = useState(null);

	const [firstRowLetters, setFirstRowLetters] = useState(null);
	const [secondRowLetters, setSecondRowLetters] = useState(null);
	const [thirdRowLetters, setThirdRowLetters] = useState(null);

	useEffect(() => {
		fetch("http://localhost:3000/first-row")
			.then((res) => res.json())
			.then((json) => {
				setFirstRowLetters(json);
			});
	}, []);

	useEffect(() => {
		fetch("http://localhost:3000/second-row")
			.then((res) => res.json())
			.then((json) => {
				setSecondRowLetters(json);
			});
	});

	useEffect(() => {
		fetch("http://localhost:3000/third-row")
			.then((res) => res.json())
			.then((json) => {
				setThirdRowLetters(json);
			});
	});

	return (
		<div className="keypad">
			{firstRowLetters &&
				firstRowLetters.map((l) => {
					const color = usedKeys[l.key];
					return (
						<div className={color} key={l.key}>
							{l.key}
						</div>
					);
				})}
			{secondRowLetters &&
				secondRowLetters.map((l) => {
					const color = usedKeys[l.key];
					return (
						<div className={color} key={l.key}>
							{l.key}
						</div>
					);
				})}
			{thirdRowLetters &&
				thirdRowLetters.map((l) => {
					const color = usedKeys[l.key];
					return (
						<div className={color} key={l.key}>
							{l.key}
						</div>
					);
				})}
		</div>
	);
};

export default Keypad;

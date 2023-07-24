import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";
import Head from "./components/Head";

const App = () => {
	const [solution, setSolution] = useState(null);

	useEffect(() => {
		fetch("http://localhost:3000/solutions")
			.then((res) => res.json())
			.then((json) => {
				const randomSolution =
					json[Math.floor(Math.random() * json.length)];
				setSolution(randomSolution.word);
			});
	}, [setSolution]);

	return (
		<div className="app">
			<Head />
			{solution && <Wordle solution={solution} />}
		</div>
	);
};

export default App;

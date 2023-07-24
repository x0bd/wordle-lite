import React, { useState } from "react";
import "../css/modal.css";

const Modal = ({ isCorrect, turn, solution }) => {
	const restart = () => {
		// TODO FIX HERE
		window.open(self);
	};

	return (
		<div className="modal">
			{isCorrect && (
				<div>
					<h2 class="win">You win!</h2>
					<p className="solution">{solution}</p>
					<p>You found the solution in {turn} guesses 😊</p>
					<button className="btn" onClick={() => restart()}>
						New Game
					</button>
				</div>
			)}
			{!isCorrect && (
				<div>
					<h2 class="lose">Nevermind!</h2>
					<p className="solution">{solution}</p>
					<p>Better Luck next time 🤣</p>
					<button className="btn" onClick={() => restart()}>
						Try Again
					</button>
				</div>
			)}
		</div>
	);
};

export default Modal;

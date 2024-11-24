'use client'

import { DetailedHTMLProps, FormEvent } from "react";

export default function Guess() {
	const guessed = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);

		const whiteEloGuess = formData.get("white-elo-guess");
		const blackEloGuess = formData.get("black-elo-guess");
	}

	const validateNaturalNumInput = (e: FormEvent<HTMLInputElement>) => {
		const t = (e.target as HTMLInputElement);
		t.value = t.value.replace(/[^0-9]/g, '');
	}

	const minElo = 0;
	const maxElo = 4000;

	return (
		<div className="mx-4 text-neutral-300">
			<h1 className="text-4xl font-bold pb-4">Make your guess!</h1>
			<form id="guess" onSubmit={guessed}>
				<label htmlFor="white-elo-guess"><h2 className="text-2xl font-bold">White&apos;s ELO</h2></label>
				<input type="number" min={minElo} max={maxElo} onInput={validateNaturalNumInput} id="white-elo-guess" name="white-elo-guess" className="mb-4 text-xl w-64" placeholder="0-4000" required></input>
				<label htmlFor="black-elo-guess"><h2 className="text-2xl font-bold">Black&apos;s ELO</h2></label>
				<input type="number" min={minElo} max={maxElo} onInput={validateNaturalNumInput} id="black-elo-guess" name="black-elo-guess" className="mb-4 text-xl w-64" placeholder="0-4000" required></input>
				<br/>

				<button className="bg-blue-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded appearance-none">
					Submit
				</button>
			</form>
		</div>
	)
}
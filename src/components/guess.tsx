'use client'

import { getPgn } from "@/shared/get-pgn";
import { getPgnHeaderAttrib } from "@/shared/get-pgn-header-attrib";
import { Dispatch, FormEvent, MouseEventHandler, MutableRefObject, SetStateAction, SyntheticEvent, useEffect, useRef } from "react";

export default function Guess({ pgn, setPgn, boardRef, setGuessedElos, setScore, setReward } : { pgn: string, setPgn: Dispatch<SetStateAction<string>>, boardRef: MutableRefObject<HTMLElement | null>, setGuessedElos: Dispatch<SetStateAction<number[]>>, setScore: Dispatch<SetStateAction<number>>, setReward: Dispatch<SetStateAction<number>> }) {
	const minElo = 0;
	const maxElo = 4000;

	const guessed = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const whiteElo = Number(getPgnHeaderAttrib(pgn, "WhiteElo"));
		const blackElo = Number(getPgnHeaderAttrib(pgn, "BlackElo"));

		const formData = new FormData(e.currentTarget);
		const whiteEloGuess = Number(formData.get("white-elo-guess"));
		const blackEloGuess = Number(formData.get("black-elo-guess"));
		setGuessedElos([whiteEloGuess, blackEloGuess]);

		let reward = 2 * maxElo - 10 * ((((whiteElo - whiteEloGuess) + (blackElo - blackEloGuess)) * 0.05) ** 2);
		if (reward < 0)
			reward = -Math.log(Math.abs(reward)) / Math.log(1.002);
		reward = Math.round(reward);

		setReward(reward);
		setScore(score => score + reward);
		e.currentTarget.reset();
	}

	const validateNaturalNumInput = (e: FormEvent<HTMLInputElement>) => {
		const t = (e.target as HTMLInputElement);
		t.value = t.value.replace(/[^0-9]/g, '');
	}

	const game = "zlma26yn";
	useEffect(() => getPgn(game, boardRef, setPgn), [boardRef, setPgn]);

	const toNextGame = (e: SyntheticEvent) => {
		const nextGame = "YcZrY6q4";
		getPgn(nextGame, boardRef, setPgn), [boardRef, setPgn]
		setGuessedElos([-1, -1]);
	}

	return (
		<div className="dark:text-neutral-300 text-neutral-700 w-full">
			<h1 className="text-4xl font-bold pb-4">Make your guess!</h1>
			<form id="guess" onSubmit={guessed}>
				<label htmlFor="white-elo-guess"><h2 className="text-2xl font-bold">White&apos;s ELO</h2></label>
				<input type="number" min={minElo} max={maxElo} onInput={validateNaturalNumInput} id="white-elo-guess" name="white-elo-guess" className="mb-4 text-xl w-64" placeholder="0-4000" required></input>
				<label htmlFor="black-elo-guess"><h2 className="text-2xl font-bold">Black&apos;s ELO</h2></label>
				<input type="number" min={minElo} max={maxElo} onInput={validateNaturalNumInput} id="black-elo-guess" name="black-elo-guess" className="mb-4 text-xl w-64" placeholder="0-4000" required></input>
				<br/>

				<button type="submit" className="bg-lime-600 hover:bg-lime-700 mt-4 mr-4 text-white font-bold py-2 px-4 rounded appearance-none">
					Submit
				</button>
				<button type="button" onClick={toNextGame} className="bg-blue-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded appearance-none">
					Next
				</button>
			</form>
		</div>
	)
}
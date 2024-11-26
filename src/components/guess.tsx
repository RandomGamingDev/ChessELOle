'use client'

import { getPgn } from "@/shared/get-pgn";
import { getPgnHeaderAttrib } from "@/shared/get-pgn-header-attrib";
import { getRandGameId } from "@/shared/get-rand-game-id";
import { Dispatch, FormEvent, MouseEventHandler, MutableRefObject, SetStateAction, SyntheticEvent, useEffect, useRef } from "react";

export default function Guess({ pgn, setPgn, boardRef, guessedElos, setGuessedElos, setScore, setReward } : { pgn: string, setPgn: Dispatch<SetStateAction<string>>, boardRef: MutableRefObject<HTMLElement | null>, guessedElos: number[], setGuessedElos: Dispatch<SetStateAction<number[]>>, setScore: Dispatch<SetStateAction<number>>, setReward: Dispatch<SetStateAction<number>> }) {
	const minElo = 0;
	const maxElo = 4000;

	const guessForm: MutableRefObject<HTMLFormElement | null> = useRef(null);

	const guessed = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (e.currentTarget.classList.contains("already-guessed"))
			return;

		const whiteElo = Number(getPgnHeaderAttrib(pgn, "WhiteElo"));
		const blackElo = Number(getPgnHeaderAttrib(pgn, "BlackElo"));

		const formData = new FormData(e.currentTarget);
		const whiteEloGuess = Number(formData.get("white-elo-guess"));
		const blackEloGuess = Number(formData.get("black-elo-guess"));
		setGuessedElos([whiteEloGuess, blackEloGuess]);

		let reward = 2 * maxElo - 10 * (((Math.abs(whiteElo - whiteEloGuess) + Math.abs(blackElo - blackEloGuess)) * 0.028) ** 2);
		if (reward < 0)
			reward = -Math.log(Math.abs(reward)) / Math.log(1.005);
		reward = Math.round(reward);

		setReward(reward);
		setScore(score => score + reward);

		e.currentTarget.classList.add("already-guessed");
	}

	const validateNaturalNumInput = (e: FormEvent<HTMLInputElement>) => {
		const t = (e.target as HTMLInputElement);
		t.value = t.value.replace(/[^0-9]/g, '');
	}

	useEffect(() => {
		if (window.location.hash.length == 0)
			getRandGameId()
				.then(id => getPgn(id, boardRef, setPgn));
		else
			getPgn(window.location.hash.slice(1), boardRef, setPgn);
	}, [boardRef, setPgn]);

	const toNextGame = (e: SyntheticEvent) => {
		getRandGameId()
			.then(id => getPgn(id, boardRef, setPgn));
		setGuessedElos([-1, -1]);
		guessForm.current!.reset();

		guessForm.current!.classList.remove("already-guessed");
	}

	return (
		<div className="dark:text-neutral-300 text-neutral-700">
			<h1 className="text-4xl font-bold pb-4 text-nowrap">Make your guess!</h1>
			<form id="guess" ref={guessForm} onSubmit={guessed}>
				<label htmlFor="white-elo-guess"><h2 className="text-2xl font-bold">White&apos;s ELO</h2></label>
				<input type="number" min={minElo} max={maxElo} onInput={validateNaturalNumInput} id="white-elo-guess" name="white-elo-guess" className="mb-4 text-xl w-64" placeholder="0-4000" required></input>
				<label htmlFor="black-elo-guess"><h2 className="text-2xl font-bold">Black&apos;s ELO</h2></label>
				<input type="number" min={minElo} max={maxElo} onInput={validateNaturalNumInput} id="black-elo-guess" name="black-elo-guess" className="mb-4 text-xl w-64" placeholder="0-4000" required></input>
				<br/>

				<button type="submit" className="bg-lime-600 hover:bg-lime-700 mt-4 mr-4 text-white font-bold py-2 px-4 rounded appearance-none">
					Submit
				</button>
				<button type="button" onClick={toNextGame} className={`${ guessedElos[0] == -1 ? "invisible" : ''} bg-blue-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded appearance-none`}>
					Next
				</button>
			</form>
		</div>
	)
}
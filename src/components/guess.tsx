'use client'

import { getPgn } from "@/shared/get-pgn";
import { getPgnHeaderAttrib } from "@/shared/get-pgn-header-attrib";
import { Dispatch, FormEvent, MutableRefObject, SetStateAction, useEffect, useRef } from "react";

export default function Guess({ pgn, setPgn, boardRef, score, setScore } : { pgn: string, setPgn: Dispatch<SetStateAction<string>>, boardRef: MutableRefObject<null>, score: number, setScore: Dispatch<SetStateAction<number>> }) {
	const minElo = 0;
	const maxElo = 4000;

	const guessed = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const whiteElo = Number(getPgnHeaderAttrib(pgn, "WhiteElo"));
		const blackElo = Number(getPgnHeaderAttrib(pgn, "BlackElo"));

		const formData = new FormData(e.currentTarget);
		const whiteEloGuess = Number(formData.get("white-elo-guess"));
		const blackEloGuess = Number(formData.get("black-elo-guess"));

		let reward = 2 * maxElo - 10 * ((((whiteElo - whiteEloGuess) + (blackElo - blackEloGuess)) * 0.05) ** 2);
		if (reward < 0)
			reward = -Math.log(Math.abs(reward)) / Math.log(1.002);

		setScore(score + reward);
	}

	const validateNaturalNumInput = (e: FormEvent<HTMLInputElement>) => {
		const t = (e.target as HTMLInputElement);
		t.value = t.value.replace(/[^0-9]/g, '');
	}

	const game = "zlma26yn";
	useEffect(() => getPgn(game, boardRef, setPgn), [boardRef, setPgn]);

	return (
		<div className="mx-4 dark:text-neutral-300 text-neutral-700">
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

			<div id="result">

			</div>
			<div className="flex flex-col justify-center ml-3">
					<input type="checkbox" id="light-switch" name="light-switch" className="light-switch sr-only" />
					<label className="relative cursor-pointer p-2" htmlFor="light-switch">
							<svg className="dark:hidden" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
									<path className="fill-slate-300" d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z" />
									<path className="fill-slate-400" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
							</svg>
							<svg className="hidden dark:block" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
									<path className="fill-slate-400" d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
									<path className="fill-slate-500" d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z" />
							</svg>
							<span className="sr-only">Switch to light / dark version</span>
					</label>
			</div>
		</div>
	)
}
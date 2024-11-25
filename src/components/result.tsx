import { getPgnHeaderAttrib } from "@/shared/get-pgn-header-attrib";

export default function Result({ pgn, guessedElos, reward } : { pgn: string, guessedElos: number[], reward: number }) {
	const white = getPgnHeaderAttrib(pgn, "White");
	const whiteElo = Number(getPgnHeaderAttrib(pgn, "WhiteElo"));
	const whiteRatingDiff = getPgnHeaderAttrib(pgn, "WhiteRatingDiff");
	const black = getPgnHeaderAttrib(pgn, "Black");
	const blackElo = Number(getPgnHeaderAttrib(pgn, "BlackElo"));
	const blackRatingDiff = getPgnHeaderAttrib(pgn, "BlackRatingDiff");

	const gameUrl = getPgnHeaderAttrib(pgn, "Site");

	const ratingType = Math.sign(reward) + 1;
	const rewardColor = ["text-rose-600", "text-neutral-500", "text-lime-500"][ratingType];

	return (
		<div className={`m-8 mt-8 dark:text-neutral-300 text-neutral-700 w-fit flex ${ guessedElos[0] == -1 ? "invisible" : ''}`}>
			<div>
				<div className="mb-16">
					<h1 className="flex font-bold text-4xl w-fit">Results:&nbsp;<p className={`${rewardColor}`}>{ratingType != 0 ? '+' : ''}{reward} points!</p></h1>
				</div>
				<div id="elo-display">
					<div className="flex mb-32">
						<div className="white pawn w-10 h-10 scale-[3] mr-16"></div>
						<div>
							<h2 className="text-2xl font-bold">{white} ({whiteElo}) [{blackRatingDiff}]</h2>
							<h2 className="text-2xl font-bold">Your Guess: {guessedElos[0]} (off by {Math.abs(whiteElo - guessedElos[0])})</h2>
						</div>
					</div>
					<div className="flex">
						<div className="black pawn w-10 h-10 scale-[3] mr-16"></div>
						<div>
							<h2 className="text-2xl font-bold">{black} ({blackElo}) [{whiteRatingDiff}]</h2>
							<h2 className="text-2xl font-bold">Your Guess: {guessedElos[1]} (off by {Math.abs(blackElo - guessedElos[1])})</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="ml-14 mt-8">
				<a target="_blank" href={gameUrl}><img className="rounded-full ml-6" src="/lichess-logo.png"></img></a>
				<h2 className="text-2xl font-bold mt-4 text-center">Check out the game on Lichess!</h2>
			</div>
		</div>
	);
}
export default function Navbar({ pgn, score } : { pgn: string, score: number }) {
	return (
		<div id="navbar" className="w-full select-none pointer-events-none inline-block flex p-4 bg-gradient-to-b dark:from-neutral-800 dark:text-neutral-300 text-neutral-700">
			<img src="/favicon.ico" className="float-left w-20 h-20" width="64" height="64" alt="Icon"></img>
			<div id="title" className="w-full">
				<h1 className="font-bold text-4xl w-fit px-3">ChessELOle</h1>
				<h2 className="font-bold text-2xl w-fit px-4 dark:text-neutral-400 text-neutral-500">Guess the elo of the chess game!</h2>
			</div>
			<div className="w-full">
				<h2 className="font-bold text-center text-5xl mx-128 my-4">Score: { Math.round(score) } </h2>
			</div>
		</div>
	)
}
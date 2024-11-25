export default function Navbar({ pgn, score } : { pgn: string, score: number }) {
	return (
		<div id="navbar" className="w-full select-none pointer-events-none inline-block flex p-4 bg-gradient-to-b from-neutral-800 text-neutral-300">
			<img src="/favicon.ico" className="float-left w-20 h-20" width="64" height="64" alt="Icon"></img>
			<div>
				<h1 className="font-bold text-4xl w-fit px-3">ChessELOle</h1>
				<h2 className="font-bold text-2xl w-fit px-4 text-neutral-400">Guess the elo of the chess game!</h2>
			</div>
			<h2 className="font-bold text-2xl w-fit px-4 text-neutral-400">Score: { Math.round(score) }</h2>
		</div>
	)
}
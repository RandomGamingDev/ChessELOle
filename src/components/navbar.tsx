import Image from 'next/image';
import icon from '@/app/favicon.ico'

export default function Navbar() {
	return (
		<div id="navbar" className="w-full select-none pointer-events-none inline-block flex p-4 bg-gradient-to-b from-neutral-800 text-neutral-300">
			<Image src={icon} className="float-left w-20 h-20" width="64" height="64" alt="Icon"></Image>
			<div>
				<h1 className="font-bold text-4xl w-fit px-3">ChessELOle</h1>
				<h2 className="font-bold text-2xl w-fit px-4 text-neutral-400">Guess the elo of the chess game!</h2>
			</div>
		</div>
	)
}
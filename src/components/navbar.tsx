import { useEffect, useRef } from "react";

export default function Navbar({ pgn, score } : { pgn: string, score: number }) {
	const themeToggleLightIcon = useRef<SVGSVGElement>(null);
	const themeToggleDarkIcon = useRef<SVGSVGElement>(null);

	useEffect(() => {
		if (
				localStorage.getItem('color-theme') === 'dark' ||
				(!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
			) {
				document.documentElement.classList.add("dark");
				themeToggleLightIcon.current!.classList.remove('hidden');
		}
		else
				themeToggleDarkIcon.current!.classList.remove('hidden');
	}, []);

	const lightModeToggle = () => {
		themeToggleDarkIcon.current!.classList.toggle('hidden');
		themeToggleLightIcon.current!.classList.toggle('hidden');

		const globalClassList = document.documentElement.classList;

		const wasDarkMode = globalClassList.contains('dark');

		const newMode = 
				wasDarkMode ?
						"light" : "dark";
		localStorage.setItem("color-theme", newMode);

		const swapOp = 
				wasDarkMode ?
						() => globalClassList.remove("dark") :
						() => globalClassList.add("dark");
		swapOp();
	}

	return (
		<div id="navbar" className="w-full select-none inline-block flex p-4 bg-gradient-to-b dark:from-neutral-800 dark:text-neutral-300 text-neutral-700">
			<img src="/favicon.ico" className="float-left w-20 h-20" width="64" height="64" alt="Icon"></img>
			<div id="title" className="w-full">
				<h1 className="font-bold text-4xl w-fit px-3">ChessELOle</h1>
				<h2 className="font-bold text-2xl w-fit px-4 dark:text-neutral-400 text-neutral-500">Guess the elo of the chess game!</h2>
			</div>
			<div className="w-full">
				<h2 className="font-bold text-center text-5xl mx-128 my-4">Score: { Math.round(score) } </h2>
			</div>

			<div className="m-3 float-right">
				<button id="theme-toggle" type="button" onClick={lightModeToggle} className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2">
					<span className="sr-only">Light Mode Toggle</span>
					<svg id="theme-toggle-dark-icon" ref={themeToggleDarkIcon} className="hidden w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
					<svg id="theme-toggle-light-icon" ref={themeToggleLightIcon} className="hidden w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
				</button>
			</div>
		</div>
	)
}
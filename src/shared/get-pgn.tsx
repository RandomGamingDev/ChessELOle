import { Dispatch, MutableRefObject, SetStateAction } from "react";

import LichessPgnViewer from 'lichess-pgn-viewer';

export const getPgn = (gameId: string, boardRef: MutableRefObject<HTMLElement | null>, setPgn: Dispatch<SetStateAction<string>>) => {
	setPgn(""); // Set it to empty so that other components can tell that it's loading
	fetch(`https://lichess.org/game/export/${gameId}?literate=1`)
		.then(res => res.text())
		.then(txt => {
			if (!boardRef.current)
				return;

			window.history.pushState(null, '', `#${gameId}`);
			setPgn(txt);
			const dispPgn = txt.split('\n').find(line => line.trim().startsWith("1. "));

			while (boardRef.current.lastChild)
				boardRef.current.removeChild(boardRef.current.lastChild);
			const boardDiv = document.createElement("div");
			boardRef.current.appendChild(boardDiv);
			LichessPgnViewer(boardDiv, {
				pgn: dispPgn
			});
		});
}
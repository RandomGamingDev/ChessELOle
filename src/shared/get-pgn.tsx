import { Dispatch, MutableRefObject, SetStateAction } from "react";

import LichessPgnViewer from 'lichess-pgn-viewer';

// The API for exporting games is documented here: https://lichess.org/api#tag/Games/operation/gamePgn
// https://lichess.org/${gameId} to access the game itself
export const getPgn = (gameId: string, boardRef: MutableRefObject<HTMLElement | null>, setPgn: Dispatch<SetStateAction<string>>) => {
	setPgn(""); // Set it to empty so that other components can tell that it's loading
	fetch(`https://lichess.org/game/export/${gameId}?clocks=1`)
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
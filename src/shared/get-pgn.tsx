import { Dispatch, MutableRefObject, SetStateAction } from "react";

import LichessPgnViewer from 'lichess-pgn-viewer';

export const getPgn = (gameId: string, boardRef: MutableRefObject<null>, setPgn: Dispatch<SetStateAction<string>>) => {
	setPgn(""); // Set it to empty so that other components can tell that it's loading
	fetch(`https://lichess.org/game/export/${gameId}?literate=1`)
		.then(res => res.text())
		.then(txt => {
			if (!boardRef.current)
				return;

			window.history.pushState(null, '', `#${gameId}`);
			setPgn(txt);
			const dispPgn = txt.split('\n').find(line => line.trim().startsWith("1. "));
			LichessPgnViewer(boardRef.current, {
				pgn: dispPgn
			});
		});
}
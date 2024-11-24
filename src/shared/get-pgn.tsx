import { Dispatch, MutableRefObject, SetStateAction } from "react";

import LichessPgnViewer from 'lichess-pgn-viewer';

export const getPgn = (gameId: string, boardRef: MutableRefObject<null>, setPgn: Dispatch<SetStateAction<string>>) => {
	fetch(`https://lichess.org/game/export/${gameId}?literate=1`)
		.then(res => res.text())
		.then(txt => {
			if (!boardRef.current)
				return;

			//window.location.hash = gameId
			window.history.pushState(null, '', `#${gameId}`);
			setPgn(txt);
			LichessPgnViewer(boardRef.current, {
				pgn: txt
			});
		});
}
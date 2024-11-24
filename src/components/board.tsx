'use client'

import { useEffect, useRef } from 'react';
import LichessPgnViewer from 'lichess-pgn-viewer';

import '@/styles/lichess-pgn-viewer.css';

export default function Board() {
	const boardRef = useRef(null);

	useEffect(() => {
		fetch("https://lichess.org/game/export/zlma26yn?literate=1")
			.then(res => res.text())
			.then(txt => {
				if (!boardRef.current)
					return;
				LichessPgnViewer(boardRef.current, {
					pgn: txt
				});
			});
	}, []);

  return (
		<div className="board-container viewers mx-8 gap-8">
			<div ref={boardRef}></div>
		</div>
	)
}
'use client'

import { MutableRefObject } from 'react';

import '@/styles/lichess-pgn-viewer.css';

export default function Board({ pgn, boardRef } : { pgn: string, boardRef: MutableRefObject<null> }) {
  return (
		<div className="board-container viewers mx-8 gap-8 min-w-[57rem]">
			<div ref={boardRef}></div>
		</div>
	)
}
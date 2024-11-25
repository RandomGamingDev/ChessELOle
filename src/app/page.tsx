'use client'

import { useRef, useState } from "react";

import Navbar from "@/components/navbar";
import Board from "@/components/board";
import Footer from "@/components/footer";
import Guess from "@/components/guess";

export default function Home() {
  const [pgn, setPgn] = useState("");
	const boardRef = useRef(null);

  const [score, setScore] = useState(0);

  return (
    <div>
      <Navbar pgn={pgn} score={score}></Navbar>
      <div className="w-full flex">
        <Board pgn={pgn} boardRef={boardRef}></Board>
        <Guess pgn={pgn} setPgn={setPgn} boardRef={boardRef} score={score} setScore={setScore}></Guess>
      </div>
      <Footer></Footer>
    </div>
  );
}
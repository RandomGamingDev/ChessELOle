'use client'

import { useRef, useState } from "react";

import Navbar from "@/components/navbar";
import Board from "@/components/board";
import Footer from "@/components/footer";
import Guess from "@/components/guess";
import Details from "@/components/details";

export default function Home() {
  const [pgn, setPgn] = useState("");
	const boardRef = useRef(null);

  const [score, setScore] = useState(0);

  return (
    <div>
      <Navbar pgn={pgn} score={score} />
      <div className="w-full flex">
        <Board pgn={pgn} boardRef={boardRef} />
        <Guess pgn={pgn} setPgn={setPgn} boardRef={boardRef} score={score} setScore={setScore} />
        <Details pgn={pgn} />
      </div>
      <Footer />
    </div>
  );
}
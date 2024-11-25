'use client'

import { useRef, useState } from "react";

import Navbar from "@/components/navbar";
import Board from "@/components/board";
import Footer from "@/components/footer";
import Guess from "@/components/guess";
import Details from "@/components/details";
import Result from "@/components/result";

export default function Home() {
  const [pgn, setPgn] = useState("");
	const boardRef = useRef(null);

  const [guessedElos, setGuessedElos] = useState([0, 0]);
  const [score, setScore] = useState(0);

  return (
    <div>
      <Navbar pgn={pgn} score={score} />
      <div className="w-full flex">
        <Board pgn={pgn} boardRef={boardRef} />
        <div className="w-full">
          <div className="w-full h-fit flex">
            <Guess pgn={pgn} setPgn={setPgn} boardRef={boardRef} score={score} setGuessedElos={setGuessedElos} setScore={setScore} />
            <Details pgn={pgn} />
          </div>
          <Result pgn={pgn} guessedElos={guessedElos} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
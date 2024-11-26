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

  const [guessedElos, setGuessedElos] = useState([-1, -1]);
  const [score, setScore] = useState(0);
  const [reward, setReward] = useState(0);

  return (
    <div>
      <Navbar pgn={pgn} score={score} />
      <div className="w-full lg:flex">
        <Board pgn={pgn} boardRef={boardRef} />
        <div className="w-max-full w-full pt-4 pl-4 lg:ml-0">
          <div className="w-max-full w-full h-fit flex">
            <Guess pgn={pgn} setPgn={setPgn} boardRef={boardRef} guessedElos={guessedElos} setGuessedElos={setGuessedElos} setScore={setScore} setReward={setReward} />
            <Details pgn={pgn} />
          </div>
          <Result pgn={pgn} guessedElos={guessedElos} reward={reward} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
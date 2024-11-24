import Navbar from "@/components/navbar";
import Board from "@/components/board";
import Footer from "@/components/footer";
import Guess from "@/components/guess";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-full flex">
        <Board></Board>
        <Guess></Guess>
      </div>
      <Footer></Footer>
    </div>
  );
}
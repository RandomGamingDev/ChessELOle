import { getPgnHeaderAttrib } from "@/shared/get-pgn-header-attrib";

export default function Result({ pgn } : { pgn: string }) {
	const white = getPgnHeaderAttrib(pgn, "White");
	const whiteElo = getPgnHeaderAttrib(pgn, "WhiteElo");
	const whiteRatingDiff = getPgnHeaderAttrib(pgn, "WhiteRatingDiff");
	const black = getPgnHeaderAttrib(pgn, "Black");
	const blackElo = getPgnHeaderAttrib(pgn, "BlackElo");
	const blackRatingDiff = getPgnHeaderAttrib(pgn, "BlackRatingDiff");

  return (
		<div className="m-8 mt-16 dark:text-neutral-300 text-neutral-700 w-full">
			<div className="flex mb-32">
				<div className="white pawn w-10 h-10 scale-[3] mr-16"></div>
				<h2 className="text-2xl font-bold">{white} ({whiteElo}) [{blackRatingDiff}]</h2>
			</div>
			<div className="flex mb-32">
				<div className="black pawn w-10 h-10 scale-[3] mr-16"></div>
				<h2 className="text-2xl font-bold">{black} ({blackElo}) [{whiteRatingDiff}]</h2>
			</div>
    </div>
  );
}
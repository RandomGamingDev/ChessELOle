import { getPgnHeaderAttrib } from "@/shared/get-pgn-header-attrib";

export default function Details({ pgn } : { pgn: string }) {
  return (
		<div className="px-8 dark:text-neutral-300 text-neutral-700 text-right right-0 pl-32">
			<h1 className="text-4xl font-bold pb-4">Game Details:</h1>
			{
				["Event", "Result", "Variant", "TimeControl", "ECO", "Opening", "Termination"].map(h => 
					<h2 key={h} className="text-2xl font-bold">{h}: {getPgnHeaderAttrib(pgn, h)}</h2>
				)
			}
    </div>
  );
}
export const getPgnHeaderAttrib = (pgn: string, attrib: string) => {
	const head = `[${attrib} "`;
	const start = pgn.indexOf(head) + head.length;
	const end = pgn.indexOf('"', start);

	return pgn.slice(start, end);
}
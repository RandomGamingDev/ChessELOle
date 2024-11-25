export const getRandGameId = () => {
	const fileId = Math.round(30000 * Math.random());
	const fileUrl = `https://raw.githubusercontent.com/RandomGamingDev/lichess-id-divider/master/out-lichess_db_standard_rated_2024-10/lichess-${fileId}.ids`;

	return fetch(fileUrl)
		.then(res => res.arrayBuffer())
		.then(arrBuff => {
			const idId = 6 * Math.round(1000 * Math.random());
			const arr = new Uint8Array(arrBuff.slice(idId, idId + 6));

			let binary = "";
			for (let i = 0; i < arr.length; i++)
				binary += String.fromCharCode(arr[i]);

			const id = btoa(binary);

			return id;
		});
}
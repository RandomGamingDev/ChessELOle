# ChessELOLe
![banner](https://github.com/user-attachments/assets/38673344-70dc-4e9a-bbc6-4cc00c4f6d7d)

### Play the game here: https://randomgamingdev.github.io/ChessELOle

#### ChessELOle gets random games from lichess and gives you the game to guess the ELO of. Based on how close or far you are from the actual elos you get a reward or punishment determined by the following code:
```js
let reward = 2 * maxElo - 10 * (((Math.abs(whiteElo - whiteEloGuess) + Math.abs(blackElo - blackEloGuess)) * 0.028) ** 2);
if (reward < 0)
  reward = -Math.log(Math.abs(reward)) / Math.log(1.005);
reward = Math.round(reward);
```

## UI:
![example screen](https://github.com/user-attachments/assets/014c299f-902e-4b11-afc6-0801acd69a22)

This project uses the [`lichess-id-divider`](https://github.com/RandomGamingDev/lichess-id-divider) script and dataset for its random games.

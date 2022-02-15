import express from 'express';
import cors from 'cors'
var app = express();
app.use(cors())
app.use(express.static('public'));

import bodyParser from 'body-parser';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var initialPlayers = [
    { name: "player0", age: 303, awards: ["AAAAA", "asas"] },
    { name: "player1", age: 81, awards: ["asasa", "asas"] },
    { name: "player2", age: 39, awards: ["troubleshooter", "kingfisher"] },
    { name: "player3", age: 303, awards: ["AAAAA", "asas"] },
    { name: "player4", age: 84, awards: ["AAAAA", "asas"] },
]

app.get('/players', (req, res) => {
    res.json(initialPlayers);
});
export default initialPlayers;
  app.listen(8000, () => {
      console.log('Listening to Port 8000');
});

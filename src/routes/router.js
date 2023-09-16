const express = require("express");

const router = express.Router();

const app = express()


router.get("/", (req, res) => {
    res.render("index")
})





// const gamesController = require('../controllers/games-controller');
// const playersController = require('../controllers/players-controller');

// router.get('/games');

// router.post('/games', gamesController.createGame);
// router.get('/games/:id', gamesController.getGameById);
// router.post('/games/:id/players', playersController.addPlayer);
// router.patch('/games/:id/players/:player_id/vote', playersController.vote);

module.exports = router;
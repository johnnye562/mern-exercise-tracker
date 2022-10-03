const router = require("express").Router();
let User = require("../models/user.model");

// Post route to get "/" user from DB
router.get('/', (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

// POST route to write "add" to DB
router.route('/add').post((req, res) => {
  // username from POST body
  const username = req.body.json(username);
  // Creates a new user object with username
  const newUser = new User({ username });
  // If json is returned with newUser save
  // else error
  newUser
    .save()
    .then(() => res.json(newUser))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

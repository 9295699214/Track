const express = require('express');
const router = express.Router();
const { validateCredentials } = require('../types');

router.post('/login', (req, res) => {
  console.log("Here at backedn in login route")
  const { username, password } = req.body; // Assuming username and password are in the request body
  const validation = validateCredentials(username, password);

  if (validation.valid) {
    res.send("Credentials are valid");
  } else {
    res.status(400).json({ errors: validation.errors });
  }
});

router.post('/signup', (req, res) => {
  const { username, password } = req.body; // Assuming username and password are in the request body
  const validation = validateCredentials(username, password);

  if (validation.valid) {
    res.send("Credentials are valid");
  } else {
    res.status(400).json({ errors: validation.errors });
  }
});

module.exports = router;

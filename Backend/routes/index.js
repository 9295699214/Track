const express = require('express');
const router = express.Router();

const userRouter = require('./user');

console.log("Indide Index.js")
router.use('/user', userRouter);

module.exports = router;

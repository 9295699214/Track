const express = require('express');
const router = express.Router();
const { validateCredentials } = require('../types');
const jwt = require('jsonwebtoken')
require('dotenv').config(); 



const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/login', async(req, res) => {
  const { username, password } = req.body;
  const validation = validateCredentials(username, password);

  if (!validation.valid) {
    return res.status(400).json({ errors: validation.errors });
  }

  try {
    // Check if a user with the provided username exists
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the provided password with the password stored in the database
    if (password !== user.password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

      const token = jwt.sign({username: username}, process.env.JWT_PASS)

    res.status(200).json({ message: 'Login successful', user, token });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const validation = validateCredentials(username, password);
  if (!validation.valid) {
    return res.status(400).json({ errors: validation.errors });
  }

  try {
    const newUser = await prisma.user.create({
      data: {
        username,
        password,
      },
    });
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

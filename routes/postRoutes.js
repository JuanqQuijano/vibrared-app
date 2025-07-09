const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// Obtener todos los posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('userId', 'username profilePic');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener posts de un usuario
router.get('/user/:userId', async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.params.userId });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

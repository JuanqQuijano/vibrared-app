const express = require('express');
const Comment = require('../models/Comment');
const router = express.Router();

// Ruta GET base (lista todos los comentarios)
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find().populate('userId postId', 'username content');
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Ruta GET para comentarios de un post específico
router.get('/post/:postId', async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId })
      .populate('userId', 'username profilePic');
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

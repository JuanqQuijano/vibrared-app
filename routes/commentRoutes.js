const express = require('express');
const Comment = require('../models/Comment');
const router = express.Router();

// Obtener comentarios de un post
router.get('/post/:postId', async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId })
      .populate('userId', 'username profilePic');
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

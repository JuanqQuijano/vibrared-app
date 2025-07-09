const express = require('express');
const Group = require('../models/Group');
const router = express.Router();

// Obtener todos los grupos
router.get('/', async (req, res) => {
  try {
    const groups = await Group.find().populate('adminId members', 'username profilePic');
    res.json(groups);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();

// Sories Index
router.get('/', (req, res) => {
  res.render('stories/index');
});

// Add Story Form
router.get('/add', (req, res) => {
  res.render('stories/add');
});

module.exports = router;
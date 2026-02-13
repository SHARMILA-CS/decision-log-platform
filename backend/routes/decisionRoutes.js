const express = require('express');
const {
  getDecisions,
  getDecision,
  createDecision,
  updateDecision,
  deleteDecision,
} = require('../controllers/decisionController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.route('/').get(protect, getDecisions).post(protect, createDecision);
router.route('/:id').get(protect, getDecision).put(protect, updateDecision).delete(protect, deleteDecision);

module.exports = router;
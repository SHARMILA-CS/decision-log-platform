const Decision = require('../models/Decision');

// @desc    Get all decisions
// @route   GET /api/decisions
// @access  Private
const getDecisions = async (req, res) => {
  try {
    const decisions = await Decision.find().populate('createdBy', 'name email').sort({ createdAt: -1 });
    res.json(decisions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single decision
// @route   GET /api/decisions/:id
// @access  Private
const getDecision = async (req, res) => {
  try {
    const decision = await Decision.findById(req.params.id).populate('createdBy', 'name email');
    
    if (!decision) {
      return res.status(404).json({ message: 'Decision not found' });
    }
    
    res.json(decision);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create new decision
// @route   POST /api/decisions
// @access  Private
const createDecision = async (req, res) => {
  try {
    const { title, description, optionsConsidered, finalDecision, reason, status } = req.body;

    // Validation
    if (!title || !description || !finalDecision || !reason) {
      return res.status(400).json({ message: 'Please fill all required fields' });
    }

    const decision = await Decision.create({
      title,
      description,
      optionsConsidered,
      finalDecision,
      reason,
      status: status || 'pending',
      createdBy: req.user._id,
    });

    res.status(201).json(decision);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update decision
// @route   PUT /api/decisions/:id
// @access  Private
const updateDecision = async (req, res) => {
  try {
    const decision = await Decision.findById(req.params.id);

    if (!decision) {
      return res.status(404).json({ message: 'Decision not found' });
    }

    // Check user authorization
    if (decision.createdBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to update this decision' });
    }

    const updatedDecision = await Decision.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate('createdBy', 'name email');

    res.json(updatedDecision);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete decision
// @route   DELETE /api/decisions/:id
// @access  Private
const deleteDecision = async (req, res) => {
  try {
    const decision = await Decision.findById(req.params.id);

    if (!decision) {
      return res.status(404).json({ message: 'Decision not found' });
    }

    // Check user authorization
    if (decision.createdBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to delete this decision' });
    }

    await Decision.findByIdAndDelete(req.params.id);

    res.json({ message: 'Decision deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getDecisions,
  getDecision,
  createDecision,
  updateDecision,
  deleteDecision,
};
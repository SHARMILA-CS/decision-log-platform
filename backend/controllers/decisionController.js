// const Decision = require('../models/Decision');

// // @desc    Get all decisions
// // @route   GET /api/decisions
// // @access  Private
// const getDecisions = async (req, res) => {
//   try {
//     const decisions = await Decision.find().populate('createdBy', 'name email').sort({ createdAt: -1 });
//     res.json(decisions);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // @desc    Get single decision
// // @route   GET /api/decisions/:id
// // @access  Private
// const getDecision = async (req, res) => {
//   try {
//     const decision = await Decision.findById(req.params.id).populate('createdBy', 'name email');
    
//     if (!decision) {
//       return res.status(404).json({ message: 'Decision not found' });
//     }
    
//     res.json(decision);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // @desc    Create new decision
// // @route   POST /api/decisions
// // @access  Private
// const createDecision = async (req, res) => {
//   try {
//     const { title, description, optionsConsidered, finalDecision, reason, status } = req.body;

//     // Validation
//     if (!title || !description || !finalDecision || !reason) {
//       return res.status(400).json({ message: 'Please fill all required fields' });
//     }

//     const decision = await Decision.create({
//       title,
//       description,
//       optionsConsidered,
//       finalDecision,
//       reason,
//       status: status || 'pending',
//       createdBy: req.user._id,
//     });

//     res.status(201).json(decision);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // @desc    Update decision
// // @route   PUT /api/decisions/:id
// // @access  Private
// const updateDecision = async (req, res) => {
//   try {
//     const decision = await Decision.findById(req.params.id);

//     if (!decision) {
//       return res.status(404).json({ message: 'Decision not found' });
//     }

//     // Check user authorization
//     if (decision.createdBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
//       return res.status(403).json({ message: 'Not authorized to update this decision' });
//     }

//     const updatedDecision = await Decision.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     ).populate('createdBy', 'name email');

//     res.json(updatedDecision);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // @desc    Delete decision
// // @route   DELETE /api/decisions/:id
// // @access  Private
// const deleteDecision = async (req, res) => {
//   try {
//     const decision = await Decision.findById(req.params.id);

//     if (!decision) {
//       return res.status(404).json({ message: 'Decision not found' });
//     }

//     // Check user authorization
//     if (decision.createdBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
//       return res.status(403).json({ message: 'Not authorized to delete this decision' });
//     }

//     await Decision.findByIdAndDelete(req.params.id);

//     res.json({ message: 'Decision deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = {
//   getDecisions,
//   getDecision,
//   createDecision,
//   updateDecision,
//   deleteDecision,
// };


const Decision = require('../models/Decision');
const User = require('../models/User');
const { createNotification } = require('./notificationController');

const getDecisions = async (req, res) => {
  try {
    const decisions = await Decision.find().populate('createdBy', 'name email').sort({ createdAt: -1 });
    res.json(decisions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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

const createDecision = async (req, res) => {
  try {
    const { title, description, optionsConsidered, finalDecision, reason, status } = req.body;

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

    // NOTIFY ALL ADMINS
    const admins = await User.find({ role: 'admin' });
    for (const admin of admins) {
      await createNotification(
        admin._id,
        'decision_created',
        `${req.user.name} created a new decision: "${title}"`,
        decision._id
      );
    }

    res.status(201).json(decision);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateDecision = async (req, res) => {
  try {
    const decision = await Decision.findById(req.params.id);

    if (!decision) {
      return res.status(404).json({ message: 'Decision not found' });
    }

    if (decision.createdBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to update this decision' });
    }

    const oldStatus = decision.status;
    const newStatus = req.body.status;

    const updatedDecision = await Decision.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate('createdBy', 'name email');

    // NOTIFY USER IF ADMIN CHANGED STATUS
    if (req.user.role === 'admin' && oldStatus !== newStatus) {
      if (newStatus === 'approved') {
        await createNotification(
          updatedDecision.createdBy._id,
          'decision_approved',
          `Your decision "${updatedDecision.title}" has been approved!`,
          updatedDecision._id
        );
      } else if (newStatus === 'rejected') {
        await createNotification(
          updatedDecision.createdBy._id,
          'decision_rejected',
          `Your decision "${updatedDecision.title}" has been rejected.`,
          updatedDecision._id
        );
      }
    }

    res.json(updatedDecision);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteDecision = async (req, res) => {
  try {
    const decision = await Decision.findById(req.params.id);

    if (!decision) {
      return res.status(404).json({ message: 'Decision not found' });
    }

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
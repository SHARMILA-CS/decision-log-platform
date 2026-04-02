// const mongoose = require('mongoose');

// const decisionSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   optionsConsidered: {
//     type: String,
//   },
//   finalDecision: {
//     type: String,
//     required: true,
//   },
//   reason: {
//     type: String,
//     required: true,
//   },
//   status: {
//     type: String,
//     enum: ['pending', 'approved', 'rejected'],
//     default: 'pending',
//   },
//   createdBy: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
// }, {
//   timestamps: true,
// });

// module.exports = mongoose.model('Decision', decisionSchema);


const mongoose = require('mongoose');

const decisionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Technical', 'Business', 'Personal', 'Financial', 'Strategic', 'Operational'],
    required: true,
  },
  tags: [{
    type: String,
  }],
  optionsConsidered: {
    type: String,
  },
  finalDecision: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Decision', decisionSchema);
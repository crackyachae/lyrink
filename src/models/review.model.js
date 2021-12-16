const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  createdDate: {
    type: Date,
    required: [true, 'created date required'],
    default: Date.now(),
  },
  updatedDate: {
    type: Date,
    required: [true, 'updated date required'],
    default: Date.now(),
  },
  content: {
    type: String,
    required: [true, 'review content required'],
  },
  writer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'review writer required'],
  },
  trackId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'have to specify the track id it belongs to'],
  },
});

reviewSchema.virtual('url').get(function () {
  return `/review/${this._id}`;
});

/**
 * @typedef Review
 */
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

const mongoose = require('mongoose');

const API_VERSION = 'v1';

// const reviewSchema = mongoose.Schema({});

const lyricSchema = mongoose.Schema({
  text: {
    type: String,
    required: [true, 'lyric text is required'],
  },
  trackId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'have to specify the track id it belongs to'],
  },
  reviewList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review',
    },
  ],
});

lyricSchema.virtual('url').get(function () {
  return `/${API_VERSION}/lyric/${this._id}`;
});

/**
 * @typedef Lyric
 */
const Lyric = mongoose.model('Lyric', lyricSchema);

module.exports = Lyric;

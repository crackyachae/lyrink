const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
    required: [true, 'review id required'],
  },
});

const lyricSchema = mongoose.Schema({
  list: {
    type: [reviewSchema],
  },
  trackId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'have to specify the track id it belongs to'],
  },
});

lyricSchema.virtual('url').get(function () {
  return `/lyric/${this._id}`;
});

/**
 * @typedef Lyric
 */
const Lyric = mongoose.model('Lyric', lyricSchema);

module.exports = Lyric;

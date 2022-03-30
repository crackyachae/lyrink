const mongoose = require('mongoose');

const API_VERSION = 'v1';

const lyricSchema = mongoose.Schema({
  text: {
    type: String,
    required: [true, 'lyric text required'],
    trim: true,
  },
  reviewCount: {
    type: Number,
    required: [true, 'review count required'],
    default: 0,
  },
});

lyricSchema.virtual('url').get(function () {
  return `/${API_VERSION}/lyric/${this._id}`;
});

const trackSchema = mongoose.Schema({
  album: {
    type: String,
    required: [true, 'have to specify the album title it belongs to'],
  },
  albumId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'have to specify the album id it belongs to'],
    ref: 'Album',
  },
  title: {
    type: String,
    required: [true, 'track title required'],
  },
  artists: {
    type: [String],
    required: [true, 'track artists required'],
    default: ['Unknown'],
  },
  lyrics: {
    type: [[lyricSchema]],
  },
});

trackSchema.virtual('url').get(function () {
  return `/${API_VERSION}/track/${this._id}`;
});

/**
 * @typedef Track
 */
const Track = mongoose.model('Track', trackSchema);

module.exports = Track;

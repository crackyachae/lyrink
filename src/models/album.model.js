const mongoose = require('mongoose');

const trackSchema = mongoose.Schema({
  /*
   *discNum: {
   *  type: Number,
   *  required: [true, 'error message'],
   *  min: [1, 'error message'],
   *},
   *trackNum: {
   *  type: Number,
   *  required: [true, 'error message'],
   */
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Track',
    required: [true, 'track id required'],
  },
  title: {
    type: String,
    required: [true, 'song title required'],
    trim: true,
  },
  artists: {
    type: [String],
    required: [true, 'song artists required'],
    default: ['Unknown'],
  },
});

const albumSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'album title required'],
    trim: true,
  },
  type: {
    type: String,
    required: [true, 'album type required'],
    enum: {
      values: ['정규', 'EP', '싱글', '라이브', '리믹스', 'OST', '컴필레이션', '참여'], // eng: ['studio', 'EP', 'single', 'live', 'remix', 'soundtrack', 'compilation', 'featuring']
      message: '{VALUE} is not supported',
    },
    trim: true,
  },
  releaseDate: {
    type: Date,
  },
  artists: {
    type: [String],
    required: [true, 'album artists required'],
    default: ['Unknown'],
  },
  tracks: [[trackSchema]], // [discNum - 1][trackNum - 1]
});

albumSchema.virtual('url').get(function () {
  return `/album/${this._id}`;
});

/**
 * @typedef Album
 */
const Album = mongoose.model('Album', albumSchema);

module.exports = Album;

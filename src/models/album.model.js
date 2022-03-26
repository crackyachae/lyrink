const mongoose = require('mongoose');
const { DateTime } = require('luxon');

const API_VERSION = 'v1';

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

trackSchema.virtual('url').get(function () {
  return `/${API_VERSION}/track/${this._id}`;
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
  trackList: [[trackSchema]], // [discNum - 1][trackNum - 1]
});

albumSchema.virtual('releaseDateYear').get(function () {
  return DateTime.fromJSDate(this.releaseDate).toFormat('yyyy');
});

albumSchema.virtual('releaseDateFormatted').get(function () {
  return DateTime.fromJSDate(this.releaseDate).toFormat('yyyy.MM.dd');
});

albumSchema.virtual('url').get(function () {
  return `/${API_VERSION}/album/${this._id}`;
});

/**
 * @typedef Album
 */
const Album = mongoose.model('Album', albumSchema);

module.exports = Album;

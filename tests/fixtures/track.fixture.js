const mongoose = require('mongoose');
const faker = require('faker');
const Track = require('../../src/models/track.model');

const album = 'album1';
const albumId = mongoose.Schema.Types.ObjectId;
const artists = ['artist1'];

/*
const lyricSchema = mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lyric',
    required: [true, 'lyric id required'],
  },
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
*/

const tracksStudio = new Array(10).map((track, index) => ({
  _id: mongoose.Schema.Types.ObjectId,
  album,
  albumId,
  artists,
  discNum: 1,
  trackNum: index + 1,
  title: faker.lorem.words(),
}));

const tracksEpOne = new Array(4).map((track, index) => ({
  _id: mongoose.Schema.Types.ObjectId,
  album,
  albumId,
  artists,
  discNum: 1,
  trackNum: index + 1,
  title: faker.lorem.words(),
}));

const tracksEpTwo = new Array(4).map((track, index) => ({
  _id: mongoose.Schema.Types.ObjectId,
  album,
  albumId,
  artists,
  discNum: 1,
  trackNum: index + 1,
  title: faker.lorem.words(),
}));

const tracksSingleOne = new Array(1).map((track, index) => ({
  _id: mongoose.Schema.Types.ObjectId,
  album,
  albumId,
  artists,
  discNum: 1,
  trackNum: index + 1,
  title: faker.lorem.words(),
}));

const tracksSingleTwo = new Array(2).map((track, index) => ({
  _id: mongoose.Schema.Types.ObjectId,
  album,
  albumId,
  artists,
  discNum: 1,
  trackNum: index + 1,
  title: faker.lorem.words(),
}));

const insertTracks = async (tracks, album) => {
  await Track.insertMany(
    tracks.map((track) => ({ ...track, album: album.title, albumId: album._id })),
  );
};

module.exports = {
  tracksStudio,
  tracksEpOne,
  tracksEpTwo,
  tracksSingleOne,
  tracksSingleTwo,
  insertTracks,
};

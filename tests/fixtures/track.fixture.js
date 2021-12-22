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

const trackStudioOne = {
  _id: mongoose.Schema.Types.ObjectId,
  album,
  albumId,
  artists,
  discNum: 1,
  trackNum: 1,
  title: faker.lorem.words(),
};

const trackStudioTwo = {
  _id: mongoose.Schema.Types.ObjectId,
  album,
  albumId,
  artists,
  discNum: 1,
  trackNum: 2,
  title: faker.lorem.words(),
};

const trackStudioThree = {
  _id: mongoose.Schema.Types.ObjectId,
  album,
  albumId,
  artists,
  discNum: 1,
  trackNum: 3,
  title: faker.lorem.words(),
};

const trackStudioFour = {
  _id: mongoose.Schema.Types.ObjectId,
  album,
  albumId,
  artists,
  discNum: 1,
  trackNum: 4,
  title: faker.lorem.words(),
};

const trackStudioFive = {
  _id: mongoose.Schema.Types.ObjectId,
  album,
  albumId,
  artists,
  discNum: 1,
  trackNum: 5,
  title: faker.lorem.words(),
};

const trackStudioSix = {
  _id: mongoose.Schema.Types.ObjectId,
  album,
  albumId,
  artists,
  discNum: 1,
  trackNum: 6,
  title: faker.lorem.words(),
};

const trackStudioSeven = {
  _id: mongoose.Schema.Types.ObjectId,
  album,
  albumId,
  artists,
  discNum: 1,
  trackNum: 7,
  title: faker.lorem.words(),
};

const trackStudioEight = {
  _id: mongoose.Schema.Types.ObjectId,
  album,
  albumId,
  artists,
  discNum: 1,
  trackNum: 8,
  title: faker.lorem.words(),
};

const trackStudioNine = {
  _id: mongoose.Schema.Types.ObjectId,
  album,
  albumId,
  artists,
  discNum: 1,
  trackNum: 9,
  title: faker.lorem.words(),
};

const trackStudioTen = {
  _id: mongoose.Schema.Types.ObjectId,
  album,
  albumId,
  artists,
  discNum: 1,
  trackNum: 10,
  title: faker.lorem.words(),
};

const trackEpOneOne = {
  _id: mongoose.Schema.Types.ObjectId,
  album,
  albumId,
  artists,
  discNum: 1,
  trackNum: 1,
  title: faker.lorem.words(),
};

const trackEpOneTwo = {
  _id: mongoose.Schema.Types.ObjectId,
  album,
  albumId,
  artists,
  discNum: 1,
  trackNum: 2,
  title: faker.lorem.words(),
};

const trackEpOneThree = {
  _id: mongoose.Schema.Types.ObjectId,
  album,
  albumId,
  artists,
  discNum: 1,
  trackNum: 3,
  title: faker.lorem.words(),
};

const trackEpOneFour = {
  _id: mongoose.Schema.Types.ObjectId,
  album,
  albumId,
  artists,
  discNum: 1,
  trackNum: 4,
  title: faker.lorem.words(),
};

const trackEpTwoOne = {
  _id: mongoose.Schema.Types.ObjectId,
  album,
  albumId,
  artists,
  discNum: 1,
  trackNum: 1,
  title: faker.lorem.words(),
};

const trackEpTwoTwo = {
  _id: mongoose.Schema.Types.ObjectId,
  album,
  albumId,
  artists,
  discNum: 1,
  trackNum: 2,
  title: faker.lorem.words(),
};

const trackEpTwoThree = {
  _id: mongoose.Schema.Types.ObjectId,
  album,
  albumId,
  artists,
  discNum: 1,
  trackNum: 3,
  title: faker.lorem.words(),
};

const trackEpTwoFour = {
  _id: mongoose.Schema.Types.ObjectId,
  album,
  albumId,
  artists,
  discNum: 1,
  trackNum: 4,
  title: faker.lorem.words(),
};

const trackSingleOneOne = {
  _id: mongoose.Schema.Types.ObjectId,
  album,
  albumId,
  artists,
  discNum: 1,
  trackNum: 1,
  title: faker.lorem.words(),
};

const trackSingleTwoOne = {
  _id: mongoose.Schema.Types.ObjectId,
  album,
  albumId,
  artists,
  discNum: 1,
  trackNum: 1,
  title: faker.lorem.words(),
};

const trackSingleTwoTwo = {
  _id: mongoose.Schema.Types.ObjectId,
  album,
  albumId,
  artists,
  discNum: 1,
  trackNum: 2,
  title: faker.lorem.words(),
};

const insertTracks = async (tracks, album) => {
  await Track.insertMany(
    tracks.map((track) => ({ ...track, album: album.title, albumId: album._id })),
  );
};

module.exports = {
  trackStudioOne,
  trackStudioTwo,
  trackStudioThree,
  trackStudioFour,
  trackStudioFive,
  trackStudioSix,
  trackStudioSeven,
  trackStudioEight,
  trackStudioNine,
  trackStudioTen,
  trackEpOneOne,
  trackEpOneTwo,
  trackEpOneThree,
  trackEpOneFour,
  trackEpTwoOne,
  trackEpTwoTwo,
  trackEpTwoThree,
  trackEpTwoFour,
  trackSingleOneOne,
  trackSingleTwoOne,
  trackSingleTwoTwo,
  insertTracks,
};

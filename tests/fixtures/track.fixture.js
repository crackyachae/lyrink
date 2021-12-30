const mongoose = require('mongoose');
const faker = require('faker');
const Track = require('../../src/models/track.model');

const album = 'album1';
const albumId = mongoose.Types.ObjectId();
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

const studioDiscNumber = () => 1 + Math.floor(Math.random());
const studioTrackNumber = () => 8 + Math.floor(Math.random() * 5);
const epTrackNumber = () => 4 + Math.floor(Math.random() * 3);
const singleTrackNumber = () => 1 + Math.floor(Math.random() * 3);

const trackListStudio = [...Array(studioDiscNumber())].map((disc, discNum) =>
  [...Array(studioTrackNumber())].map((track, trackNum) => ({
    _id: mongoose.Types.ObjectId(),
    album,
    albumId,
    artists,
    discNum: discNum + 1,
    trackNum: trackNum + 1,
    title: faker.lorem.words(),
  })),
);

const trackListEpOne = [...Array(1)].map((disc, discNum) =>
  [...Array(studioTrackNumber())].map((track, trackNum) => ({
    _id: mongoose.Types.ObjectId(),
    album,
    albumId,
    artists,
    discNum: 1,
    trackNum: trackNum + 1,
    title: faker.lorem.words(),
  })),
);

const trackListEpTwo = [...Array(1)].map((disc, discNum) =>
  [...Array(studioTrackNumber())].map((track, trackNum) => ({
    _id: mongoose.Types.ObjectId(),
    album,
    albumId,
    artists,
    discNum: 1,
    trackNum: trackNum + 1,
    title: faker.lorem.words(),
  })),
);

const trackListSingleOne = [...Array(1)].map((disc, discNum) =>
  [...Array(studioTrackNumber())].map((track, trackNum) => ({
    _id: mongoose.Types.ObjectId(),
    album,
    albumId,
    artists,
    discNum: 1,
    trackNum: trackNum + 1,
    title: faker.lorem.words(),
  })),
);

const trackListSingleTwo = [...Array(1)].map((disc, discNum) =>
  [...Array(studioTrackNumber())].map((track, trackNum) => ({
    _id: mongoose.Types.ObjectId(),
    album,
    albumId,
    artists,
    discNum: 1,
    trackNum: trackNum + 1,
    title: faker.lorem.words(),
  })),
);

const insertTracks = async (tracks, album) => {
  await Track.insertMany(
    tracks.forEach((disc) =>
      disc.map((track) => ({ ...track, album: album.title, albumId: album._id })),
    ),
  );
};

const setLyricsInTrack = async (lyrics, track) => {
  Track.findByIdAndUpdate(track._id, { lyrics });
};

module.exports = {
  trackListStudio,
  trackListEpOne,
  trackListEpTwo,
  trackListSingleOne,
  trackListSingleTwo,
  insertTracks,
  setLyricsInTrack,
};

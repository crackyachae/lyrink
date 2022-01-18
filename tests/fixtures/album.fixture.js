const mongoose = require('mongoose');
const faker = require('faker');
const Album = require('../../src/models/album.model');

const types = ['정규', 'EP', '싱글', '라이브', '리믹스', 'OST', '컴필레이션', '참여'];
const artists = ['artist1'];
const YEAR_RANGE = 20;

const albumStudio = {
  _id: mongoose.Types.ObjectId(),
  title: faker.lorem.words(),
  type: types[0],
  artists,
  releaseDate: faker.date.past(YEAR_RANGE),
};

const albumEpOne = {
  _id: mongoose.Types.ObjectId(),
  title: faker.lorem.words(),
  type: types[1],
  artists,
  releaseDate: faker.date.past(YEAR_RANGE),
};

const albumEpTwo = {
  _id: mongoose.Types.ObjectId(),
  title: faker.lorem.words(),
  type: types[1],
  artists,
  releaseDate: faker.date.past(YEAR_RANGE),
};

const albumSingleOne = {
  _id: mongoose.Types.ObjectId(),
  title: faker.lorem.words(),
  type: types[2],
  artists,
  releaseDate: faker.date.past(YEAR_RANGE),
};

const albumSingleTwo = {
  _id: mongoose.Types.ObjectId(),
  title: faker.lorem.words(),
  type: types[2],
  artists,
  releaseDate: faker.date.past(YEAR_RANGE),
};

const insertAlbums = async (albums) => {
  await Album.insertMany(albums);
};

const setTrackListInAlbum = async (trackList, album) => {
  const trackListInAlbum = trackList.map((tracks) =>
    tracks.map((track) => ({ _id: track._id, title: track.title, artists: track.artists })),
  );
  await Album.findByIdAndUpdate(album._id, { trackList: trackListInAlbum });
};

module.exports = {
  albumStudio,
  albumEpOne,
  albumEpTwo,
  albumSingleOne,
  albumSingleTwo,
  insertAlbums,
  setTrackListInAlbum,
};

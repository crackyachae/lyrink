const mongoose = require('mongoose');
const faker = require('faker');
const Album = require('../../src/models/album.model');

const types = ['정규', 'EP', '싱글', '라이브', '리믹스', 'OST', '컴필레이션', '참여'];
const YEAR_RANGE = 20;

/*
const songOne = {
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
  artist: {
    type: [String],
    required: [true, 'song artist required'],
  },
};
*/

const albumStudio = {
  _id: mongoose.Types.ObjectId(),
  title: faker.lorem.words(),
  type: types[0],
  releaseDate: faker.date.past(YEAR_RANGE),
};

const albumEpOne = {
  _id: mongoose.Types.ObjectId(),
  title: faker.lorem.words(),
  type: types[1],
  releaseDate: faker.date.past(YEAR_RANGE),
};

const albumEpTwo = {
  _id: mongoose.Types.ObjectId(),
  title: faker.lorem.words(),
  type: types[1],
  releaseDate: faker.date.past(YEAR_RANGE),
};

const albumSingleOne = {
  _id: mongoose.Types.ObjectId(),
  title: faker.lorem.words(),
  type: types[2],
  releaseDate: faker.date.past(YEAR_RANGE),
};

const albumSingleTwo = {
  _id: mongoose.Types.ObjectId(),
  title: faker.lorem.words(),
  type: types[2],
  releaseDate: faker.date.past(YEAR_RANGE),
};

const insertAlbums = async (albums) => {
  await Album.insertMany(albums);
};

module.exports = {
  albumStudio,
  albumEpOne,
  albumEpTwo,
  albumSingleOne,
  albumSingleTwo,
  insertAlbums,
};

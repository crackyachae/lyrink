const mongoose = require('mongoose');
const app = require('../src/app');
const config = require('../src/config/config');
const logger = require('../src/config/logger');

// 필요한 모듈 불러오기
const { User, Album, Track, Lyric, Review } = require('../src/models');
const { userOne, userTwo, admin, insertUsers } = require('./fixtures/user.fixture');
const { userOneAccessToken, adminAccessToken } = require('./fixtures/token.fixture');
const {
  albumStudio,
  albumEpOne,
  albumEpTwo,
  albumSingleOne,
  albumSingleTwo,
  insertAlbums,
  setTracksInAlbum,
} = require('./fixtures/album.fixture');
const {
  tracksStudio,
  tracksEpOne,
  tracksEpTwo,
  tracksSingleOne,
  tracksSingleTwo,
  insertTracks,
  setLyricsInTrack,
} = require('./fixtures/track.fixture');
const { createLyrics, insertLyrics, appendReview } = require('./fixtures/lyric.fixture');
const {
  reviewOne,
  reviewTwo,
  reviewThree,
  reviewFour,
  reviewFive,
  insertReview,
} = require('./fixtures/review.fixture');

async function clearData() {
  await Promise.all(
    Object.values(mongoose.connection.collections).map(async (collection) =>
      collection.deleteMany(),
    ),
  );
}

async function createData() {
  // TODO
}

async function populateSampleDB() {
  // db 연결
  mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
    logger.info('Connected to MongoDB');
    app.listen(config.port, () => {
      logger.info(`Listening to port ${config.port}`);
    });
  });

  mongoose.Promise = global.Promise;
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  await clearData();
  await createData();

  mongoose.connection.close();
}

populateSampleDB();

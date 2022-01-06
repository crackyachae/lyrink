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
  setTrackListInAlbum,
} = require('./fixtures/album.fixture');
const {
  trackListStudio,
  trackListEpOne,
  trackListEpTwo,
  trackListSingleOne,
  trackListSingleTwo,
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

// 각 모델의 document를 저장할 변수 선언
const albums = [albumStudio, albumEpOne, albumEpTwo, albumSingleOne, albumSingleTwo];
const trackLists = [
  trackListStudio,
  trackListEpOne,
  trackListEpTwo,
  trackListSingleOne,
  trackListSingleTwo,
];

async function clearData() {
  await Promise.all(
    Object.values(mongoose.connection.collections).map(async (collection) =>
      collection.deleteMany(),
    ),
  );
}

async function createData() {
  // album 생성
  await insertAlbums(albums);

  await Promise.all(
    trackLists.map(async (trackList, index) => {
      const album = albums[index];

      // track 생성
      await insertTracks(
        trackList.reduce((prev, curr) => prev.concat(curr)),
        album,
      );
      // album에 track 정보 업데이트
      await setTrackListInAlbum(trackList, album);

      await Promise.all(
        trackList
          .reduce((prev, curr) => prev.concat(curr))
          .map(async (track) => {
            // lyric 생성
            const lyrics = createLyrics();
            await insertLyrics(
              lyrics.reduce((prev, curr) => prev.concat(curr)),
              track,
            );
            // track에 lyric 정보 업데이트
            await setLyricsInTrack(lyrics, track);
          }),
      );
    }),
  );
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

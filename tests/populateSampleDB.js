const mongoose = require('mongoose');
const app = require('../src/app');
const config = require('../src/config/config');
const logger = require('../src/config/logger');

// 필요한 모듈 불러오기
const { Track } = require('../src/models');
const { userOne, userTwo, admin, insertUsers } = require('./fixtures/user.fixture');
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
const users = [userOne, userTwo, admin];
const reviewInfos = [
  { review: reviewOne, user: userOne, track: trackListStudio[0][0] },
  { review: reviewTwo, user: userOne, track: trackListStudio[0][0] },
  { review: reviewThree, user: userOne, track: trackListStudio[0][5] },
  { review: reviewFour, user: userTwo, track: trackListStudio[0][5] },
  { review: reviewFive, user: userTwo, track: trackListEpOne[0][2] },
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

  // user 생성
  await insertUsers(users);

  // review 생성
  await Promise.all(
    reviewInfos.map(async (reviewInfo) => {
      const { review, user, track } = reviewInfo;

      await insertReview(review, user, track);
      const foundTrack = await Track.findById(track._id);
      const line = Math.floor(Math.random() * foundTrack.lyrics.length);
      const word = Math.floor(Math.random() * foundTrack.lyrics[line].length);
      await appendReview(review, foundTrack.lyrics[line][word]);
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
  mongoose.connection.on('error', (error) => {
    logger.error(error);
  });

  await clearData();
  await createData();

  mongoose.connection.close();
}

populateSampleDB();

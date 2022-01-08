const mongoose = require('mongoose');
const faker = require('faker');
const Lyric = require('../../src/models/lyric.model');

const trackId = mongoose.Types.ObjectId();
const randomLines = () => 20 + Math.floor(Math.random() * 20);

const createLyrics = () => {
  const sentences = faker.lorem.sentences(randomLines()).trim().split('.');
  sentences.pop();
  return sentences.map((sentence) =>
    sentence
      .trim()
      .split(' ')
      .map((word) => ({
        _id: mongoose.Types.ObjectId(),
        text: word,
        trackId,
      })),
  );
};

const insertLyrics = async (lyricWords, track) => {
  await Lyric.insertMany(lyricWords.map((lyricWord) => ({ ...lyricWord, trackId: track._id })));
};

const appendReview = async (review, lyric) => {
  // console.log(lyric._id);
  await Lyric.findByIdAndUpdate(lyric._id, {
    $push: { reviewList: review._id },
  });
};

module.exports = {
  createLyrics,
  insertLyrics,
  appendReview,
};

const mongoose = require('mongoose');
const faker = require('faker');
const Lyric = require('../../src/models/lyric.model');

const trackId = mongoose.Types.ObjectId();
const randomLines = () => 20 + Math.floor(Math.random() * 20);

const createLyrics = () =>
  faker.lorem
    .sentences(randomLines())
    .trim()
    .split('.')
    .map((sentence) =>
      sentence
        .trim()
        .split(' ')
        .map((word) => ({
          _id: mongoose.Types.ObjectId(),
          text: word,
          trackId,
        })),
    );

const insertLyrics = async (lyrics, track) => {
  await Lyric.insertMany(
    lyrics.forEach((sentence) => sentence.map((word) => ({ ...word, trackId: track._id }))),
  );
};

const appendReview = async (review, lyric) => {
  Lyric.findByIdAndUpdate(lyric._id, { reviewList: lyric.reviewList.append(review) });
};

module.exports = {
  createLyrics,
  insertLyrics,
  appendReview,
};

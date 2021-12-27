const mongoose = require('mongoose');
const faker = require('faker');
const Lyric = require('../../src/models/lyric.model');

const trackId = mongoose.Schema.Types.ObjectId;
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
          text: word,
          trackId,
        })),
    );

const insertLyrics = async (lyrics, track) => {
  await Lyric.insertMany(
    lyrics.forEach((sentence) => sentence.map((word) => ({ ...word, trackId: track._id }))),
  );
};

module.exports = {
  createLyrics,
  insertLyrics,
};

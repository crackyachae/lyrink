const mongoose = require('mongoose');
const faker = require('faker');
const Review = require('../../src/models/review.model');

const writer = mongoose.Schema.Types.ObjectId;
const trackId = mongoose.Schema.Types.ObjectId;

const reviewOne = {
  createdDate: faker.date.past(2),
  updatedDate: faker.date.recent(),
  content: faker.lorem.paragraphs(),
  writer,
  trackId,
};

const reviewTwo = {
  createdDate: faker.date.past(2),
  updatedDate: faker.date.recent(),
  content: faker.lorem.paragraphs(),
  writer,
  trackId,
};

const reviewThree = {
  createdDate: faker.date.past(2),
  updatedDate: faker.date.recent(),
  content: faker.lorem.paragraphs(),
  writer,
  trackId,
};

const reviewFour = {
  createdDate: faker.date.past(2),
  updatedDate: faker.date.recent(),
  content: faker.lorem.paragraphs(),
  writer,
  trackId,
};

const reviewFive = {
  createdDate: faker.date.past(2),
  updatedDate: faker.date.recent(),
  content: faker.lorem.paragraphs(),
  writer,
  trackId,
};

const insertReview = async (reviews, user, track) => {
  await Review.insertMany(
    reviews.map((review) => ({ ...review, writer: user._id, trackId: track._id })),
  );
};

module.exports = {
  reviewOne,
  reviewTwo,
  reviewThree,
  reviewFour,
  reviewFive,
  insertReview,
};

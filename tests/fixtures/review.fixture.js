const mongoose = require('mongoose');
const faker = require('faker');
const Review = require('../../src/models/review.model');

const writer = mongoose.Types.ObjectId();
const trackId = mongoose.Types.ObjectId();

const reviewOne = {
  _id: mongoose.Types.ObjectId(),
  createdDate: faker.date.past(2),
  updatedDate: faker.date.recent(),
  content: faker.lorem.paragraphs(),
  writer,
  trackId,
};

const reviewTwo = {
  _id: mongoose.Types.ObjectId(),
  createdDate: faker.date.past(2),
  updatedDate: faker.date.recent(),
  content: faker.lorem.paragraphs(),
  writer,
  trackId,
};

const reviewThree = {
  _id: mongoose.Types.ObjectId(),
  createdDate: faker.date.past(2),
  updatedDate: faker.date.recent(),
  content: faker.lorem.paragraphs(),
  writer,
  trackId,
};

const reviewFour = {
  _id: mongoose.Types.ObjectId(),
  createdDate: faker.date.past(2),
  updatedDate: faker.date.recent(),
  content: faker.lorem.paragraphs(),
  writer,
  trackId,
};

const reviewFive = {
  _id: mongoose.Types.ObjectId(),
  createdDate: faker.date.past(2),
  updatedDate: faker.date.recent(),
  content: faker.lorem.paragraphs(),
  writer,
  trackId,
};

const insertReview = async (review, user, track) => {
  await Review.create({ ...review, writer: user._id, trackId: track._id });
};

module.exports = {
  reviewOne,
  reviewTwo,
  reviewThree,
  reviewFour,
  reviewFive,
  insertReview,
};

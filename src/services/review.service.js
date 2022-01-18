const { Review } = require('../models');

/**
 * Create a review
 * @param {Object} reviewBody
 * @returns {Promise<Review>}
 */
const createReview = async (reviewBody) => {
  return Review.create(reviewBody);
};

module.exports = {
  createReview,
};

const { reviewService } = require('../services');

const getReview = (req, res) => {
  res.send(`not implemented: Review detail: ${req.params.id}`);
};

const createReview = (req, res) => {
  res.send('not implemented: Review create');
};

const updateReview = (req, res) => {
  res.send('not implemented: Review update');
};

const deleteReview = (req, res) => {
  res.send('not implemented: Review delete');
};

const getReviewCreateForm = (req, res) => {
  res.render('review_form', {});
};

const getReviewEditForm = (req, res) => {
  res.send('not implemented: Review edit form');
};

module.exports = {
  getReview,
  createReview,
  updateReview,
  deleteReview,
  getReviewCreateForm,
  getReviewEditForm,
};

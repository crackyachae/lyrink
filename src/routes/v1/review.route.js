const express = require('express');
// need validation module
const reviewController = require('../../controllers/review.controller');

const router = express.Router();

router
  .route('/write')
  .get(reviewController.getReviewCreateForm)
  .post(reviewController.createReview);

router.route('/:reviewId').get(reviewController.getReview).delete(reviewController.deleteReview);

router
  .route('/:reviewId/edit')
  .get(reviewController.getReviewEditForm)
  .patch(reviewController.updateReview);

module.exports = router;

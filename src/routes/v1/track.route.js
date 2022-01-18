const express = require('express');
// need validation module
const trackController = require('../../controllers/track.controller');

const router = express.Router();

router.route('/').post(trackController.createTrack);

router
  .route('/:trackId')
  .get(trackController.getTrack)
  .patch(trackController.updateTrack)
  .delete(trackController.deleteTrack);

module.exports = router;

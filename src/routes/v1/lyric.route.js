const express = require('express');
// need validation module
const lyricController = require('../../controllers/lyric.controller');

const router = express.Router();

router.route('/').post(lyricController.createLyric);

router
  .route('/:lyricId')
  .get(lyricController.getLyric)
  .patch(lyricController.updateLyric)
  .delete(lyricController.deleteLyric);

module.exports = router;

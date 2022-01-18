const express = require('express');
// need validation module
const albumController = require('../../controllers/album.controller');

const router = express.Router();

router.route('/').post(albumController.createAlbum).get(albumController.getAlbums);

router
  .route('/:albumId')
  .get(albumController.getAlbum)
  .patch(albumController.updateAlbum)
  .delete(albumController.deleteAlbum);

module.exports = router;

const { Album } = require('../models');

/**
 * Create a album
 * @param {Object} tempAlbumBody
 * @returns {Promise<Album>}
 */
const createAlbum = async (albumBody) => {
  return Album.create(albumBody);
};

module.exports = {
  createAlbum,
};

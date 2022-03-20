const { Album } = require('../models');

/**
 * Create a album
 * @param {Object} tempAlbumBody
 * @returns {Promise<Album>}
 */
const createAlbum = async (albumBody) => {
  return Album.create(albumBody);
};

/**
 * Query for album
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @returns {Promise<QueryResult>}
 */
const queryAlbums = async (filter, options) => {
  const albums = await Album.find(filter, options);
  return albums;
};

module.exports = {
  createAlbum,
  queryAlbums,
};

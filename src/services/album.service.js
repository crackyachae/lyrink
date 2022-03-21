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

/**
 * Get album filters from queried albums data
 * @param {QueryResult} albums - Mongo Query
 * @returns {Object}
 */
const getAlbumFilters = (albums) => {
  const typeFilters = new Set();
  const yearFilters = new Set();

  albums.forEach((album) => {
    typeFilters.add(album.type);
    yearFilters.add(album.releaseDateYear);
  });

  // [TODO] type 필터도 priority 지정해서 항상 일관된 순서로 유지될 수 있게
  return [[...typeFilters], [...yearFilters].sort((a, b) => a - b)];
};

module.exports = {
  createAlbum,
  queryAlbums,
  getAlbumFilters,
};

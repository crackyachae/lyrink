const { Lyric } = require('../models');

/**
 * Create a lyric
 * @param {Object} lyricBody
 * @returns {Promise<Lyric>}
 */
const createLyric = async (lyricBody) => {
  return Lyric.create(lyricBody);
};

module.exports = {
  createLyric,
};

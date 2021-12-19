const { Track } = require('../models');

/**
 * Create a track
 * @param {Object} trackBody
 * @returns {Promise<Track>}
 */
const createTrack = async (trackBody) => {
  return Track.create(trackBody);
};

module.exports = {
  createTrack,
};

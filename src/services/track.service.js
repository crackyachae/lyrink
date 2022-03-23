const { Track } = require('../models');

/**
 * Create a track
 * @param {Object} trackBody
 * @returns {Promise<Track>}
 */
const createTrack = async (trackBody) => {
  return Track.create(trackBody);
};

const queryTrack = async (id) => {
  const track = await Track.findById(id);
  return track;
};

module.exports = {
  createTrack,
  queryTrack,
};

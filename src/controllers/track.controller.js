const { trackService } = require('../services');

const getTrack = async (req, res) => {
  const { trackId: id } = req.params;
  const option = {};
  const track = await trackService.queryTrack(id, option);

  res.render('track', { track });
};

const createTrack = (req, res) => {
  res.send('not implemented: Track create');
};

const updateTrack = (req, res) => {
  res.send('not implemented: Track update');
};

const deleteTrack = (req, res) => {
  res.send('not implemented: Track delete');
};

module.exports = { getTrack, createTrack, updateTrack, deleteTrack };

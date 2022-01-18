const getTrack = (req, res) => {
  res.send(`not implemented: Track detail: ${req.params.id}`);
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

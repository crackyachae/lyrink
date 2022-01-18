const getAlbums = (req, res) => {
  res.send('not implemented: Album list');
};

const getAlbum = (req, res) => {
  res.send(`not implemented: Album detail: ${req.params.id}`);
};

const createAlbum = (req, res) => {
  res.send('not implemented: Album create');
};

const updateAlbum = (req, res) => {
  res.send('not implemented: Album update');
};

const deleteAlbum = (req, res) => {
  res.send('not implemented: Album delete');
};

module.exports = { getAlbums, getAlbum, createAlbum, updateAlbum, deleteAlbum };

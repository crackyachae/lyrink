// [TODO] catchAsync 적용 알아보기
const { albumService } = require('../services');

const getAlbums = async (req, res) => {
  const filter = {};
  const option = {};
  const albums = await albumService.queryAlbums(filter, option);

  const filters = albumService.getAlbumFilters(albums);

  res.render('album', { albums, filters });
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

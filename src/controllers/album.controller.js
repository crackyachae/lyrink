const { albumService } = require('../services');

const getAlbums = async (req, res) => {
  const filter = {}; // [TODO] 필터는 프론트에서 할지 여기서 할지 결정하고. pick 라이브러리 어떻게 쓰는건지도 알아보기
  const option = {}; // [TODO] sort가 여기로
  const result = await albumService.queryAlbums(filter, option);
  res.render('album', { albums: result });
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

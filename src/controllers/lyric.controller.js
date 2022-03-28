const { lyricService } = require('../services');

const getLyric = async (req, res) => {
  const { lyricId: id } = req.params;
  const option = {};
  const lyric = await lyricService.queryLyric(id, option);

  res.render(`lyric`, { lyric });
};

const createLyric = (req, res) => {
  res.send('not implemented: Lyric create');
};

const updateLyric = (req, res) => {
  res.send('not implemented: Lyric update');
};

const deleteLyric = (req, res) => {
  res.send('not implemented: Lyric delete');
};

module.exports = { getLyric, createLyric, updateLyric, deleteLyric };

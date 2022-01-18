const getLyric = (req, res) => {
  res.send(`not implemented: Lyric detail: ${req.params.id}`);
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

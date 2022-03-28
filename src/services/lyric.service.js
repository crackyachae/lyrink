const { Lyric } = require('../models');

/**
 * Create a lyric
 * @param {Object} lyricBody
 * @returns {Promise<Lyric>}
 */
const createLyric = async (lyricBody) => {
  return Lyric.create(lyricBody);
};

const queryLyric = async (id) => {
  // [TODO] 페이지네이션이나 더보기 구현 해야함
  const lyric = await Lyric.findById(id).populate({
    path: 'reviewList',
    populate: {
      path: 'writer',
    },
  });
  // console.log(`populated?: ${lyric.populated('reviewList')}`);

  return lyric;
};

module.exports = {
  createLyric,
  queryLyric,
};

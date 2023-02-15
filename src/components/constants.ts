export const ALBUM_TYPE = {
  STUDIO: 1,
  EP: 2,
  SINGLE: 3,
  OST: 4,
  COMPILATION: 5,
  LIVE: 6,
  SPECIAL: 7,
} as const;

export const AlbumTypeMap = {
  1: '정규',
  2: 'EP(미니)',
  3: '싱글',
  4: 'OST',
  5: '컴필레이션',
  6: '라이브',
  7: '스페셜',
};

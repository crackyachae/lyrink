import type { ALBUM_TYPE } from '@/components/constants';

type AlbumType = typeof ALBUM_TYPE[keyof typeof ALBUM_TYPE];
type Album = {
  id: string;
  title: string;
  artists: string;
  albumType: AlbumType;
  coverImg: string;
  releaseDate: datetime;
  songs: {
    title: string;
  }[][];
  // [discNum][trackNum]
};

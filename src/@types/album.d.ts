import type { ObjectId } from 'mongodb';

import type { ALBUM_TYPE } from '@/components/constants';

type AlbumType = typeof ALBUM_TYPE[keyof typeof ALBUM_TYPE];
type Album = {
  _id: ObjectId;
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

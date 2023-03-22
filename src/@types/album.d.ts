import type { ObjectId } from 'mongodb';

import type { ALBUM_TYPE } from '@/components/constants';

type TAlbumType = typeof ALBUM_TYPE[keyof typeof ALBUM_TYPE];
type TAlbum = {
  _id: ObjectId;
  title: string;
  artists: string;
  albumType: TAlbumType;
  coverImg: string;
  releaseDate: string;
  songs: {
    title: string;
  }[][];
  // [discNum][trackNum]
};

type TAlbumFilter = {
  type: { [key in TAlbumType]: boolean };
  year: { [key: string]: boolean };
};

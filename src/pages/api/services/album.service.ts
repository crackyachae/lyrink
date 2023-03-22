import type { TAlbum } from '@/@types/album';
import config from '@/configs/config';

import clientPromise from '../../../lib/mongodb';

const COLLECTION_NAME = 'albums';

const connectToDB = async () => {
  const client = await clientPromise;
  const db = client.db(config.mongoDB.name);

  return db;
};

const getAllAlbumList = async () => {
  try {
    const db = await connectToDB();

    const allAlbumList = await db
      .collection<TAlbum>(COLLECTION_NAME)
      .find({})
      .sort({ releaseDate: 1 })
      .toArray();

    return allAlbumList;
  } catch (error) {
    console.error('fail to get all album list', error);

    return [];
  }
};

const albumService = {
  getAllAlbumList,
};

export default albumService;

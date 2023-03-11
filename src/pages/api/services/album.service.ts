import config from '@/configs/config';

import clientPromise from '../../../lib/mongodb';

const COLLECTION_NAME = 'albums';

async function connectToDB() {
  const client = await clientPromise;
  const db = client.db(config.mongoDB.name);

  return db;
}

async function getAllAlbumList() {
  try {
    const db = await connectToDB();

    const allAlbumList = await db
      .collection(COLLECTION_NAME)
      .find({})
      .sort({ releaseDate: 1 })
      .toArray();

    return allAlbumList;
  } catch (error) {
    console.error('fail to get all album list', error);

    return [];
  }
}

export default getAllAlbumList;

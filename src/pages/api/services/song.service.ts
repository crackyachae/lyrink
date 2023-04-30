import type { ObjectId } from 'mongodb';

import type { TSong } from '@/@types/song';
import config from '@/configs/config';

import clientPromise from '../../../lib/mongodb';

const COLLECTION_NAME = 'songs';

const connectToDB = async () => {
  const client = await clientPromise;
  const db = client.db(config.mongoDB.name);

  return db;
};

const getSongWithId = async (songId: ObjectId) => {
  try {
    const db = await connectToDB();

    const song = await db
      .collection<TSong>(COLLECTION_NAME)
      .findOne({ _id: songId });

    return song;
  } catch (error) {
    console.error(`fail to get song with id ${songId}`, error);

    return null;
  }
};

const songService = {
  getSongWithId,
};

export default songService;

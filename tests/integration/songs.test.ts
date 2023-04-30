import type { Db, MongoClient } from 'mongodb';
import { createMocks } from 'node-mocks-http';

import type { TSong } from '@/@types/song';
import config from '@/configs/config';
import clientPromise from '@/lib/mongodb';
import handleSongWithSongId from '@/pages/api/songs/[songId]';

import { Studio1Track2 } from '../fixtures/song.fixture';
import { parseFixtureToJson } from '../utils/fixtureUtils';

let client: MongoClient;
let db: Db;
const sampleSong = Studio1Track2;

beforeAll(async () => {
  client = await clientPromise;
  db = await client.db(config.mongoDB.name);
});

afterAll(async () => {
  await client.close();
});

describe('GIVEN songs route', () => {
  beforeAll(async () => {
    const albumsDB = db.collection<TSong>('songs');
    await albumsDB.insertOne(sampleSong);
  });

  afterAll(async () => {
    const albumsDB = db.collection<TSong>('songs');
    await albumsDB.deleteMany({});
  });

  describe('WHEN GET /api/songs/:songId', () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        songId: sampleSong._id,
      },
    });

    it('should returns response with song of given songId', async () => {
      await handleSongWithSongId(req, res);

      expect(res._getStatusCode()).toBe(200);

      const resData = JSON.parse(res._getData());
      expect(resData).toEqual(parseFixtureToJson(sampleSong));
    });
  });
});

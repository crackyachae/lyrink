import type { Db, MongoClient } from 'mongodb';
import { createMocks } from 'node-mocks-http';

import type { TAlbum } from '@/@types/album';
import config from '@/configs/config';
import clientPromise from '@/lib/mongodb';
import handleAlbums from '@/pages/api/albums';

import {
  EpOne,
  EpTwo,
  SingleOne,
  SingleTwo,
  sortWithReleasedDate,
  StudioOne,
  StudioTwo,
} from '../fixtures/album.fixture';
import { parseFixtureToJson } from '../utils/fixtureUtils';

let client: MongoClient;
let db: Db;
const sampleAlbumList = [
  StudioOne,
  StudioTwo,
  EpOne,
  EpTwo,
  SingleOne,
  SingleTwo,
];
const sortedSampleAlbumList = sortWithReleasedDate(sampleAlbumList);

beforeAll(async () => {
  client = await clientPromise;
  db = await client.db(config.mongoDB.name);
});

afterAll(async () => {
  await client.close();
});

describe('GIVEN albums route', () => {
  describe('WHEN GET /api/albums', () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    it('should return 200 and all album list if data is OK', async () => {
      const albumsDB = db.collection<TAlbum>('albums');
      await albumsDB.insertMany(sampleAlbumList);

      await handleAlbums(req, res);

      expect(res._getStatusCode()).toBe(200);

      const resData = JSON.parse(res._getData());

      expect(resData).toHaveLength(sampleAlbumList.length);
      expect(resData[0]).toEqual(parseFixtureToJson(sortedSampleAlbumList[0]));

      await albumsDB.deleteMany({});
    });
  });

  describe('WHEN NOT-ALLOWED-METHOD /api/albums', () => {
    const { req, res } = createMocks({
      method: 'CONNECT',
    });

    it('should returns 405 and error message', async () => {
      await handleAlbums(req, res);

      expect(res._getStatusCode()).toBe(405);
      expect(res._getData()).toMatch('Not Allowed');
    });
  });
});

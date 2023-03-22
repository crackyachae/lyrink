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
  sortWithReleaseDate,
  StudioOne,
  StudioTwo,
} from '../fixtures/album.fixture';

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
const sortedSampleAlbumList = sortWithReleaseDate(sampleAlbumList);

const parseFixtureToJson = (fixture: TAlbum | undefined) => {
  if (!fixture) {
    return {};
  }
  return JSON.parse(JSON.stringify(fixture));
};

beforeAll(async () => {
  client = await clientPromise;
  db = await client.db(config.mongoDB.name);
});

afterAll(async () => {
  await client.close();
});

describe('GIVEN albums route', () => {
  beforeAll(async () => {
    const albumsDB = db.collection<TAlbum>('albums');
    await albumsDB.insertMany(sampleAlbumList);
  });

  afterAll(async () => {
    const albumsDB = db.collection<TAlbum>('albums');
    await albumsDB.deleteMany({});
  });

  describe('WHEN GET /api/albums', () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    it('should returns response with all album list', async () => {
      await handleAlbums(req, res);

      expect(res._getStatusCode()).toBe(200);

      const resData = JSON.parse(res._getData());

      expect(resData).toHaveLength(sampleAlbumList.length);
      expect(resData[0]).toEqual(parseFixtureToJson(sortedSampleAlbumList[0]));
    });
  });

  describe('WHEN /api/albums called with other method', () => {
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

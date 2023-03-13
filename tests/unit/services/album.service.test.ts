import type { Db, MongoClient } from 'mongodb';

import config from '@/configs/config';
import clientPromise from '@/lib/mongodb';
import albumService from '@/pages/api/services/album.service';

import {
  EpOne,
  EpTwo,
  SingleOne,
  SingleTwo,
  StudioOne,
  StudioTwo,
} from '../../fixtures/album.fixture';

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

beforeAll(async () => {
  client = await clientPromise;
  db = await client.db(config.mongoDB.name);
});

afterAll(async () => {
  await client.close();
});

describe('GIVEN album service', () => {
  beforeAll(async () => {
    const albumsDB = db.collection('albums');
    await albumsDB.insertMany(sampleAlbumList);
  });

  describe('WHEN [GET] albums', () => {
    it('should get all albums successfully', async () => {
      const earliestReleased = sampleAlbumList.reduce((min, album) => {
        return min && album.releaseDate > min.releaseDate ? min : album;
      }, sampleAlbumList[0]);

      const queriedAlbumList = await albumService.getAllAlbumList();

      expect(queriedAlbumList).toHaveLength(sampleAlbumList.length);
      expect(queriedAlbumList[0]).toEqual(earliestReleased);
    });
  });
});

/* eslint-disable no-var */
/* eslint-disable vars-on-top */
import type { MongoClient } from 'mongodb';

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
  // jest-mongo-db
  var __MONGO_URI__: string;
  var __MONGO_DB_NAME__: string;
}

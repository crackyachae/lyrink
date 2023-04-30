import type { ObjectId } from 'mongodb';

type TSong = {
  _id: ObjectId;
  songTitle: string;
  albumTitle: string;
  artists: string;
  lyrics: {
    sectionLyricId: ObjectId | null;
    phrases: {
      phraseLyricId: ObjectId | null;
      words: {
        wordLyricId: ObjectId | null;
        wordText: string;
      }[];
    }[];
  }[];
};

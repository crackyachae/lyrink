import type { ObjectId } from 'mongodb';

import { StudioOne, StudioThree } from './album.fixture';
import { Studio1Track2Lyrics, Studio3Track12Lyrics } from './lyric.fixture';

const createLyricsObject = (lyrics: string[][][]) => {
  return lyrics.map((section) => ({
    sectionLyricId: null,
    phrases: section.map((phrase) => ({
      phraseLyricId: null,
      words: phrase.map((word) => ({
        wordLyricId: null,
        wordText: word,
      })),
    })),
  }));
};

export const Studio1Track2 = {
  _id: StudioOne.songs[0]?.[1]?.songId as ObjectId,
  songTitle: StudioOne.songs[0]?.[1]?.title as string,
  albumTitle: StudioOne.title,
  artists: StudioOne.artists,
  lyrics: createLyricsObject(Studio1Track2Lyrics),
};

export const Studio3Track12 = {
  _id: StudioThree.songs[0]?.[11]?.songId as ObjectId,
  songTitle: StudioThree.songs[0]?.[11]?.title as string,
  albumTitle: StudioThree.title,
  artists: StudioThree.artists,
  lyrics: createLyricsObject(Studio3Track12Lyrics),
};

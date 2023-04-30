import type { TAlbum } from '@/@types/album';
import type { TSong } from '@/@types/song';

export const parseFixtureToJson = (fixture: TAlbum | TSong | undefined) => {
  if (!fixture) {
    return {};
  }
  return JSON.parse(JSON.stringify(fixture));
};

import type { Album } from '@/@types/album';
import { AlbumTypeMap } from '@/components/constants';

export const getSortedAlbumYears = (albums: Album[]): string[] => {
  return [
    ...new Set(albums.map((album) => album.releaseDate.slice(0, 4))),
  ].sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
};

export const getSortedAlbumTypes = (albums: Album[]): string[] => {
  return [...new Set(albums.map((album) => album.albumType))]
    .sort((a, b) => a - b)
    .map((type) => AlbumTypeMap[type]);
};

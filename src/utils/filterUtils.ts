import type { Album, AlbumFilterType, AlbumType } from '@/@types/album';
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

export const getAlbumFilter = (albums: Album[]): AlbumFilterType => {
  const typeFilter = new Set<AlbumType>([]);
  const yearFilter = new Set<string>([]);

  albums.forEach((album) => {
    typeFilter.add(album.albumType);
    yearFilter.add(album.releaseDate.slice(0, 4));
  });

  return {
    type: [...typeFilter].sort((a, b) => a - b),
    year: [...yearFilter].sort(),
  };
};

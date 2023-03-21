import type { Album, AlbumFilterType, AlbumType } from '@/@types/album';

type FilterObjectType<T extends AlbumType | string> = { [key in T]: boolean };

export const getSortedAlbumYears = (albums: Album[]): string[] => {
  return [
    ...new Set(albums.map((album) => album.releaseDate.slice(0, 4))),
  ].sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
};

export const getSortedAlbumTypes = (albums: Album[]): AlbumType[] => {
  return [...new Set(albums.map((album) => album.albumType))].sort();
};

export const createFilterObject = <T extends AlbumType | string>(
  filter: T[]
): FilterObjectType<T> => {
  return filter.reduce(
    (acc, type) => ({ ...acc, [type]: false }),
    {} as FilterObjectType<T>
  );
};

export const getAlbumFilter = (albums: Album[]): AlbumFilterType => {
  const typeFilter = new Set<AlbumType>([]);
  const yearFilter = new Set<string>([]);

  albums.forEach((album) => {
    typeFilter.add(album.albumType);
    yearFilter.add(album.releaseDate.slice(0, 4));
  });

  return {
    type: createFilterObject([...typeFilter].sort()),
    year: createFilterObject([...yearFilter].sort()),
  };
};

import type { TAlbum, TAlbumFilter, TAlbumType } from '@/@types/album';

type FilterObjectType<T extends TAlbumType | string> = { [key in T]: boolean };

export const getSortedAlbumYears = (albums: TAlbum[]): string[] => {
  return albums.map((album) => album.releaseDate.slice(0, 4)).sort();
};

export const getSortedAlbumTypes = (albums: TAlbum[]): TAlbumType[] => {
  return albums.map((album) => album.albumType).sort();
};

export const createFilterObject = <T extends TAlbumType | string>(
  filter: T[]
): FilterObjectType<T> => {
  return filter.reduce(
    (acc, type) => ({ ...acc, [type]: false }),
    {} as FilterObjectType<T>
  );
};

export const getAlbumFilter = (albums: TAlbum[]): TAlbumFilter => {
  const typeFilter = new Set<TAlbumType>([]);
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

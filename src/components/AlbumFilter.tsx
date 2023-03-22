import type { Dispatch, SetStateAction } from 'react';
import { useCallback } from 'react';

import type { TAlbumFilter, TAlbumType } from '@/@types/album';

import { AlbumTypeMap } from './constants';

type TAlbumFilterProps = {
  filter: TAlbumFilter;
  setFilter: Dispatch<SetStateAction<TAlbumFilter>>;
};

export default function AlbumFilter(props: TAlbumFilterProps) {
  const { filter, setFilter } = props;
  const albumTypes = Object.keys(filter.type);
  const albumYears = Object.keys(filter.year);

  const handleClickFilter = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const { value } = e.currentTarget;
      const filterType = e.currentTarget.name as keyof TAlbumFilter;

      // TODO: return if filterType is not keyof AlbumFilter

      setFilter((prevFilter) => {
        // TODO: separate type without condition block
        let target;
        if (filterType === 'type') {
          target = prevFilter.type[value as TAlbumType];
        } else {
          target = prevFilter.year[value as string];
        }

        return {
          ...prevFilter,
          [filterType]: {
            ...prevFilter[filterType],
            [value]: !target,
          },
        };
      });
    },
    []
  );

  return (
    <section>
      <div>
        <h4>유형</h4>
        <div>
          {albumTypes.map((albumType) => (
            <button
              type="button"
              key={`type-${albumType}`}
              name="type"
              value={albumType}
              onClick={handleClickFilter}
            >
              {AlbumTypeMap[albumType]}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h4>연도</h4>
        <div>
          {albumYears.map((year) => (
            <button
              type="button"
              key={`year-${year}`}
              name="year"
              value={year}
              onClick={handleClickFilter}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

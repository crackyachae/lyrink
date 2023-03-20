import type { AlbumFilterType } from '@/@types/album';

import { AlbumTypeMap } from './constants';

export default function AlbumFilter({ filter }: { filter: AlbumFilterType }) {
  const albumTypes = Object.values(filter.type);
  const albumYears = Object.values(filter.year);

  return (
    <section>
      <div>
        <h4>유형</h4>
        <div>
          {albumTypes.map((type) => (
            <button type="button" key={`type-${type}`}>
              {AlbumTypeMap[type]}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h4>연도</h4>
        <div>
          {albumYears.map((year) => (
            <button type="button" key={`year-${year}`}>
              {year}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

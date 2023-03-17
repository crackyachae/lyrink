import type { Album } from '@/@types/album';
import { getSortedAlbumTypes, getSortedAlbumYears } from '@/utils/filterUtils';

export default function AlbumFilter({ albums }: { albums: Album[] }) {
  const albumYears = getSortedAlbumYears(albums);
  const albumTypes = getSortedAlbumTypes(albums);

  return (
    <section>
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
      <div>
        <h4>유형</h4>
        <div>
          {albumTypes.map((type) => (
            <button type="button" key={`type-${type}`}>
              {type}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

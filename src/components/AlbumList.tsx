import type { TAlbum } from '@/@types/album';

import { AlbumTypeMap } from './constants';

export default function AlbumList({ albums }: { albums: TAlbum[] }) {
  return (
    <section>
      {albums.map((album) => {
        const { _id, title, coverImg, albumType, releaseDate, artists, songs } =
          album;
        const showDiscHeader = songs.length > 1;

        return (
          <div key={`${_id}`}>
            <img src={coverImg} alt={`앨범 ${title}의 커버 이미지 입니다.`} />
            <div>
              <h3>{`앨범명: ${title}`}</h3>
              <span>{AlbumTypeMap[albumType]}</span>
              <span>{releaseDate}</span>| |<span>{artists}</span>
            </div>
            <table>
              {songs.map((disc, discIdx) => (
                <tbody key={discIdx}>
                  {showDiscHeader && (
                    <tr>
                      <td>{`디스크 ${discIdx + 1}`}</td>
                    </tr>
                  )}
                  {disc.map((track, trackIdx) => (
                    <tr key={trackIdx}>
                      <td>{trackIdx + 1}</td>
                      {/* TODO: link to song page */}
                      <td>{track.title}</td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
        );
      })}
    </section>
  );
}

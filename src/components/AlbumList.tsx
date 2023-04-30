import Link from 'next/link';

import type { TAlbum } from '@/@types/album';

import { AlbumTypeMap } from './constants';

export default function AlbumList({ albums }: { albums: TAlbum[] }) {
  return (
    <section>
      {albums.map((album) => {
        const {
          _id,
          title,
          coverImg,
          albumType,
          releasedDate,
          artists,
          songs,
        } = album;
        const showDiscHeader = songs.length > 1;

        return (
          <div key={`${_id}`} className="mb-16 flex flex-wrap">
            <div className="mr-8 mb-8 flex-none basis-60">
              <img
                src={coverImg}
                alt={`앨범 ${title}의 커버 이미지 입니다.`}
                className="pt-2"
              />
            </div>
            <div className="flex-1 basis-96">
              <div>
                <h3 className="mb-2 text-2xl font-bold">{title}</h3>
                <div className="mb-4 text-base">
                  <span>{AlbumTypeMap[albumType]}</span> |{' '}
                  <span>{releasedDate}</span> | <span>{artists}</span>
                </div>
              </div>
              <table className="table-compact table w-full table-fixed">
                {songs.map((disc, discIdx) => (
                  <tbody key={discIdx}>
                    {showDiscHeader && (
                      <tr className="font-medium">
                        <td width="12%">{`디스크 ${discIdx + 1}`}</td>
                      </tr>
                    )}
                    {disc.map((track, trackIdx) => (
                      <tr key={trackIdx}>
                        <td width="12%">{trackIdx + 1}</td>
                        <td>
                          {track.songId ? (
                            <Link href={`/song/${track.songId}`}>
                              {track.title}
                            </Link>
                          ) : (
                            track.title
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        );
      })}
    </section>
  );
}

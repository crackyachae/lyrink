/* eslint-disable unused-imports/no-unused-vars */

import type { Album } from '@/@types/album';
import AlbumFilter from '@/components/AlbumFilter';
import { AlbumTypeMap } from '@/components/constants';
import config from '@/configs/config';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

export default function Artist({ albums }: { albums: Album[] }) {
  return (
    <Main meta={<Meta title="NELL" description="Lorem ipsum" />}>
      <AlbumFilter albums={albums} />
      <section>
        {albums.map((album) => {
          const {
            _id,
            title,
            coverImg,
            albumType,
            releaseDate,
            artists,
            songs,
          } = album;
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
      {/* 앨범 데이터로 필터 데이터를 생성한다. */}
      {/* 필터 목록을 띄운다. */}
    </Main>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch(`${config.baseUrl}/api/albums`);
    const result = await response.json();

    return { props: { albums: result } };
  } catch (e) {
    return {
      // TODO: handle error
      props: {},
    };
  }
}

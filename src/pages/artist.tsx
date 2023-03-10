/* eslint-disable unused-imports/no-unused-vars */
import type { Album } from '@/@types/album';
import { AlbumTypeMap } from '@/components/constants';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Artist = ({ albums }: { albums: Album[] }) => (
  <Main meta={<Meta title="NELL" description="Lorem ipsum" />}>
    {/* TODO */}
    {/* 앨범 데이터가 넘어오지 않았으면 에러 페이지를 띄운다. */}

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

export default Artist;

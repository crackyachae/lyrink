/* eslint-disable unused-imports/no-unused-vars */
import type { Album } from '@/@types/album';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Artist = ({ albums }: { albums: Album[] }) => (
  <Main meta={<Meta title="NELL" description="Lorem ipsum" />}>
    {/* TODO */}
    {/* 앨범 데이터가 넘어오지 않았으면 에러 페이지를 띄운다. */}

    {/* album list */}
    {/* 앨범 데이터가 제대로 넘어왔으면 앨범 목록을 띄운다. */}
    <section>
      {albums.map((album) => {
        const { _id: id, title } = album;

        return (
          <div key={id}>
            <h3>{`앨범명: ${title}`}</h3>
          </div>
        );
      })}
    </section>
    {/* 앨범 데이터로 필터 데이터를 생성한다. */}
    {/* 필터 목록을 띄운다. */}
  </Main>
);

export default Artist;

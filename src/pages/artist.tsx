/* eslint-disable unused-imports/no-unused-vars */
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Artist = () => (
  <Main meta={<Meta title="NELL" description="Lorem ipsum" />}>
    {/* TODO */}
    {/* 앨범 데이터가 넘어오지 않았으면 에러 페이지를 띄운다. */}

    {/* 앨범 데이터가 제대로 넘어왔으면 앨범 목록을 띄운다. */}

    {/* 앨범 데이터로 필터 데이터를 생성한다. */}
    {/* 필터 목록을 띄운다. */}
  </Main>
);

export default Artist;

/* eslint-disable unused-imports/no-unused-vars */

import type { Album } from '@/@types/album';
import AlbumFilter from '@/components/AlbumFilter';
import AlbumList from '@/components/AlbumList';
import config from '@/configs/config';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

export default function Artist({ albums }: { albums: Album[] }) {
  return (
    <Main meta={<Meta title="NELL" description="Lorem ipsum" />}>
      <AlbumFilter albums={albums} />
      <AlbumList albums={albums} />
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

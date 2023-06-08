/* eslint-disable unused-imports/no-unused-vars */

import { useMemo, useState } from 'react';

import type { TAlbum } from '@/@types/album';
import AlbumFilter from '@/components/AlbumFilter';
import AlbumList from '@/components/AlbumList';
import config from '@/configs/config';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { getAlbumFilter } from '@/utils/filterUtils';

export default function ArtistPage({ albums }: { albums: TAlbum[] }) {
  const [filter, setFilter] = useState(getAlbumFilter(albums));
  const filteredAlbum = useMemo(() => {
    const isTypeFiltered = Object.values(filter.type).includes(true);
    const isYearFiltered = Object.values(filter.year).includes(true);

    return albums.filter((album) => {
      return (
        (!isTypeFiltered || filter.type[album.albumType]) &&
        (!isYearFiltered || filter.year[album.releasedDate.slice(0, 4)])
      );
    });
  }, [filter]);

  return (
    <Main meta={<Meta title="TODO" description="TODO" />}>
      <AlbumFilter filter={filter} setFilter={setFilter} />
      <AlbumList albums={filteredAlbum} />
    </Main>
  );
}

export async function getStaticProps() {
  const response = await fetch(`${config.baseUrl}/api/albums`);
  const result = await response.json();

  return { props: { albums: result } };
}

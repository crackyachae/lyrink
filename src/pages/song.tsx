/* eslint-disable unused-imports/no-unused-vars */

import type { GetServerSidePropsContext } from 'next';

import type { TSong } from '@/@types/song';
import config from '@/configs/config';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

export default function SongPage({ song }: { song: TSong }) {
  // TODO
  console.log(song);

  return (
    <Main meta={<Meta title="TODO" description="TODO" />}>
      <></>
    </Main>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { songId } = context.params || { songId: '' };

    if (songId === '') {
      // TODO: handle error
    }

    const response = await fetch(`${config.baseUrl}/api/songs/${songId}`);
    const result = await response.json();

    return { props: { song: result } };
  } catch (e) {
    return {
      // TODO: handle error
      props: {},
    };
  }
}

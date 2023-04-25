/* eslint-disable unused-imports/no-unused-vars */

import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { GetServerSidePropsContext } from 'next';

import publicAPI from '@/api/public';
import queryKey from '@/hooks/query-keys';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

export default function SongPage() {
  return (
    <Main meta={<Meta title="TODO" description="TODO" />}>
      <></>
    </Main>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { songId } = context.params || { songId: '' };
    if (songId === undefined || songId === '') {
      // TODO: handle error
    }

    const queryClient = new QueryClient();
    await queryClient.prefetchQuery([queryKey.SONG, songId], () =>
      publicAPI.getSong(songId as string)
    );

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (e) {
    return {
      // TODO: handle error
      props: {},
    };
  }
}

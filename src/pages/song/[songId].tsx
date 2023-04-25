/* eslint-disable unused-imports/no-unused-vars */

import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';

import publicAPI from '@/api/public';
import queryKey from '@/hooks/query-keys';
import { useSongQuery } from '@/hooks/useSong';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

export default function SongPage() {
  const router = useRouter();
  const { songId } = router.query;

  const {
    data: song,
    isLoading,
    isError,
    error,
  } = useSongQuery(songId as string);

  if (isLoading) {
    return (
      <Main meta={<Meta title="TODO" description="TODO" />}>
        {/* TODO */}
        <div>Loading...</div>
      </Main>
    );
  }

  if (isError) {
    return (
      <Main meta={<Meta title="TODO" description="TODO" />}>
        {/* TODO */}
        <div>{error?.message}</div>
      </Main>
    );
  }

  return (
    <Main meta={<Meta title="TODO" description="TODO" />}>
      <>{song}</>
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

/* eslint-disable unused-imports/no-unused-vars */

import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';

import type { TSong } from '@/@types/song';
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

  // TODO: handle that song can be undefined
  const { songTitle, albumTitle, artists, lyrics } = song as TSong;

  return (
    <Main meta={<Meta title="TODO" description="TODO" />}>
      <h3 className="mb-1 text-2xl font-bold">{songTitle}</h3>
      <div className="text-sm">
        <span>{artists}</span> | <span>{albumTitle}</span>
      </div>
      <div className="my-16 text-base">
        {lyrics?.map((section, i) => (
          <div key={`section-${i}`} className="mb-4 flex flex-col items-center">
            {section.phrases.map((phrase, j) => (
              <div key={`phrase-${j}`} className="mb-1">
                {phrase.words.map((word, k) => (
                  <span key={`work-${k}`}>{word.wordText} </span>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </Main>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { songId } = context.params || { songId: '' };

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
      notFound: true,
    };
  }
}

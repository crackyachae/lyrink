import { useQuery } from '@tanstack/react-query';

import type { TSong } from '@/@types/song';
import publicAPI from '@/api/public';

import queryKey from './query-keys';

export const useSongQuery = (songId: string) => {
  const { data, isLoading, isError, error } = useQuery<TSong, Error>(
    [queryKey.SONG, songId],
    () => publicAPI.getSong(songId as string)
  );

  return { data, isLoading, isError, error };
};

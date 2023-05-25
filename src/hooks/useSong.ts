import { useQuery } from '@tanstack/react-query';

import type { TSong } from '@/@types/song';
import publicAPI from '@/api/public';

import queryKey from './query-keys';

export const useSongQuery = (songId: string) => {
  const { data, isLoading, isError, error } = useQuery<TSong, Error>({
    queryKey: [queryKey.SONG, songId],
    queryFn: async () => {
      const response = await publicAPI.getSong(songId as string);
      return response.data;
    },
  });

  return { data, isLoading, isError, error };
};

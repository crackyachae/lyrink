import type { AxiosResponse } from 'axios';

import type { TSong } from '@/@types/song';

import publicRequest from '../../utils/api';

export const getSong = async (
  songId: string
): Promise<AxiosResponse<TSong>> => {
  return publicRequest({
    url: `/songs/${songId}`,
    method: 'GET',
  });
};

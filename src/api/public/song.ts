import type { TSong } from '@/@types/song';
import config from '@/configs/config';

export const getSong = async (songId: string): Promise<TSong> => {
  const response = await fetch(`${config.baseUrl}/api/songs/${songId}`);
  const result = await response.json();

  return result;
};

import type { NextApiRequest, NextApiResponse } from 'next';

import type { Album } from '@/@types/album';

import { albumService } from '../services';

export default async function handleAlbums(
  req: NextApiRequest,
  res: NextApiResponse<Album[]>
) {
  const { method } = req;

  switch (method) {
    case 'GET': {
      const albumList = await albumService.getAllAlbumList();

      res.status(200).json(albumList);
      break;
    }
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

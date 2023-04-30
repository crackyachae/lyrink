import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

import type { TSong } from '@/@types/song';

import { songService } from '../services';

export default async function handleSongWithSongId(
  req: NextApiRequest,
  res: NextApiResponse<TSong>
) {
  const { method } = req;
  const { songId } = req.query;

  const songMongoId = new ObjectId(songId as string);

  switch (method) {
    case 'GET': {
      const song = await songService.getSongWithId(songMongoId);

      if (!song) {
        // TODO: handle error
        break;
      }

      res.status(200).json(song);
      break;
    }
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

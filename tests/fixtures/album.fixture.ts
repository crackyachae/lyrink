import { ObjectId } from 'mongodb';

import type { TAlbum } from '@/@types/album';
import { ALBUM_TYPE } from '@/components/constants';

const StudioOne = {
  _id: new ObjectId(),
  title: 'Haute Couture',
  artists: 'Glen Check',
  albumType: ALBUM_TYPE.STUDIO,
  coverImg: 'https://image.bugsm.co.kr/album/images/1000/3224/322456.jpg',
  releaseDate: '2012.03.06',
  songs: [
    [
      {
        title: 'The Naked Sun',
      },
      {
        title: 'Vogue Boys And Girls',
      },
      {
        title: 'French Virgin Party',
      },
      {
        title: 'The Flashback',
      },
      {
        title: 'Rebellion',
      },
      {
        title: 'Battaille!',
      },
      {
        title: 'Au Revoir',
      },
      {
        title: 'Concorde',
      },
      {
        title: "60's Cardin",
      },
      {
        title: 'Racket',
      },
      {
        title: 'Vivid',
      },
    ],
  ],
};

const StudioTwo = {
  _id: new ObjectId(),
  title: 'Youth!',
  artists: 'Glen Check',
  albumType: ALBUM_TYPE.STUDIO,
  coverImg: 'https://image.bugsm.co.kr/album/images/1000/3962/396268.jpg',
  releaseDate: '2013.11.19',
  songs: [
    [
      {
        title: 'The Match Open',
      },
      {
        title: 'Pacific',
      },
      {
        title: 'Summer Hearts',
      },
      {
        title: 'Youth In Revolt',
      },
      {
        title: 'Paint It Gold',
      },
      {
        title: 'Anthem For The Wild Souls',
      },
    ],
    [
      {
        title: 'Young Generation',
      },
      {
        title: "I've Got This Feeling",
      },
      {
        title: 'Brooklyn',
      },
      {
        title: 'The Coast',
      },
      {
        title: 'Jordan',
      },
    ],
  ],
};

const StudioThree = {
  _id: new ObjectId(),
  title: 'Bleach',
  artists: 'Glen Check',
  albumType: ALBUM_TYPE.STUDIO,
  coverImg:
    'https://image.bugsm.co.kr/album/images/original/164782/16478242.jpg',
  releaseDate: '2022.03.03',
  songs: [
    [
      {
        title: 'Acid Test',
      },
      {
        title: 'Dazed & Confused',
      },
      {
        title: 'Waves',
      },
      {
        title: 'Dive Baby, Dive',
      },
      {
        title: 'Sins',
      },
      {
        title: 'Sometimes You Gotta Shake It Off',
      },
      {
        title: 'Blush (feat. sokodomo)',
      },
      {
        title: 'Bliss',
      },
      {
        title: 'Raving',
      },
      {
        title: 'Long Strange Days Pt.2',
      },
      {
        title: 'Runaway',
      },
      {
        title: '4ever',
      },
      {
        title: "I Feel Like Ridin' Slow",
      },
    ],
  ],
};

const EpOne = {
  _id: new ObjectId(),
  title: 'Disco Elevator',
  artists: 'Glen Check',
  albumType: ALBUM_TYPE.EP,
  coverImg: 'https://image.bugsm.co.kr/album/images/1000/2632/263233.jpg',
  releaseDate: '2011.02.11',
  songs: [
    [
      {
        title: 'Addicted',
      },
      {
        title: 'Disco Elevator',
      },
      {
        title: 'Metro',
      },
      {
        title: 'Dressing Room (Demo)',
      },
      {
        title: 'Dressing Room (Acoustic)',
      },
    ],
  ],
};

const EpTwo = {
  _id: new ObjectId(),
  title: 'Disco Elevator [iTunes Edition]',
  artists: 'Glen Check',
  albumType: ALBUM_TYPE.EP,
  coverImg: 'https://image.bugsm.co.kr/album/images/1000/2723/272330.jpg',
  releaseDate: '2011.03.21',
  songs: [
    [
      {
        title: 'Addicted (Re: ver.)',
      },
      {
        title: 'Disco Elevator (Re: ver.)',
      },
      {
        title: 'Metro (Re: ver.)',
      },
      {
        title: 'Dressing Room (Re: ver.)',
      },
      {
        title: 'Dressing Room (Acoustic) (Re: ver.)',
      },
      {
        title: 'Metro (Acoustic)',
      },
    ],
  ],
};

const EpThree = {
  _id: new ObjectId(),
  title: 'Cliche',
  artists: 'Glen Check',
  albumType: ALBUM_TYPE.EP,
  coverImg: 'https://image.bugsm.co.kr/album/images/1000/3428/342868.jpg',
  releaseDate: '2012.09.28',
  songs: [
    [
      {
        title: 'Blood, Sweat & The Beat',
      },
      {
        title: "'84",
      },
      {
        title: 'Leather',
      },
      {
        title: 'Want You Back',
      },
      {
        title: "'84 The Original",
      },
    ],
  ],
};

const EpFour = {
  _id: new ObjectId(),
  title: 'The Glen Check Experience EP',
  artists: 'Glen Check',
  albumType: ALBUM_TYPE.EP,
  coverImg: 'https://image.bugsm.co.kr/album/images/1000/201133/20113320.jpg',
  releaseDate: '2017.08.13',
  songs: [
    [
      {
        title: 'Dreaming Kills',
      },
      {
        title: 'Follow The White Rabbit (CD ONLY)',
      },
      {
        title: 'Long Strange Days Pt.1',
      },
      {
        title: 'Mayhem',
      },
      {
        title: 'Rude & Confused',
      },
    ],
  ],
};

const SingleOne = {
  _id: new ObjectId(),
  title: 'Au Revoir',
  artists: 'Glen Check',
  albumType: ALBUM_TYPE.SINGLE,
  coverImg: 'https://image.bugsm.co.kr/album/images/1000/3081/308169.jpg',
  releaseDate: '2011.09.29',
  songs: [
    [
      {
        title: 'Au Revoir',
      },
      {
        title: "60's Cardin",
      },
    ],
  ],
};

const SingleTwo = {
  _id: new ObjectId(),
  title: 'Velvet Goldmine',
  artists: 'Glen Check',
  albumType: ALBUM_TYPE.SINGLE,
  coverImg: 'https://image.bugsm.co.kr/album/images/1000/201839/20183978.jpg',
  releaseDate: '2018.08.03',
  songs: [
    [
      {
        title: 'Velvet Goldmine',
      },
    ],
  ],
};

const sortWithReleaseDate = (arr: TAlbum[]) => {
  const sorted = arr.sort((a, b) => {
    if (a.releaseDate < b.releaseDate) {
      return -1;
    }
    if (a.releaseDate > b.releaseDate) {
      return 1;
    }

    return 0;
  });

  return sorted;
};

export {
  EpFour,
  EpOne,
  EpThree,
  EpTwo,
  SingleOne,
  SingleTwo,
  sortWithReleaseDate,
  StudioOne,
  StudioThree,
  StudioTwo,
};

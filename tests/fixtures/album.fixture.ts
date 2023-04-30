import { ObjectId } from 'mongodb';

import type { TAlbum } from '@/@types/album';
import { ALBUM_TYPE } from '@/components/constants';

const StudioOne = {
  _id: new ObjectId(),
  title: 'Haute Couture',
  artists: 'Glen Check',
  albumType: ALBUM_TYPE.STUDIO,
  coverImg: 'https://image.bugsm.co.kr/album/images/1000/3224/322456.jpg',
  releasedDate: '2012.03.06',
  songs: [
    [
      {
        title: 'The Naked Sun',
        songId: null,
      },
      {
        title: 'Vogue Boys And Girls',
        songId: new ObjectId(),
      },
      {
        title: 'French Virgin Party',
        songId: null,
      },
      {
        title: 'The Flashback',
        songId: null,
      },
      {
        title: 'Rebellion',
        songId: null,
      },
      {
        title: 'Battaille!',
        songId: null,
      },
      {
        title: 'Au Revoir',
        songId: null,
      },
      {
        title: 'Concorde',
        songId: null,
      },
      {
        title: "60's Cardin",
        songId: null,
      },
      {
        title: 'Racket',
        songId: null,
      },
      {
        title: 'Vivid',
        songId: null,
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
  releasedDate: '2013.11.19',
  songs: [
    [
      {
        title: 'The Match Open',
        songId: null,
      },
      {
        title: 'Pacific',
        songId: null,
      },
      {
        title: 'Summer Hearts',
        songId: null,
      },
      {
        title: 'Youth In Revolt',
        songId: null,
      },
      {
        title: 'Paint It Gold',
        songId: null,
      },
      {
        title: 'Anthem For The Wild Souls',
        songId: null,
      },
    ],
    [
      {
        title: 'Young Generation',
        songId: null,
      },
      {
        title: "I've Got This Feeling",
        songId: null,
      },
      {
        title: 'Brooklyn',
        songId: null,
      },
      {
        title: 'The Coast',
        songId: null,
      },
      {
        title: 'Jordan',
        songId: null,
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
  releasedDate: '2022.03.03',
  songs: [
    [
      {
        title: 'Acid Test',
        songId: null,
      },
      {
        title: 'Dazed & Confused',
        songId: null,
      },
      {
        title: 'Waves',
        songId: null,
      },
      {
        title: 'Dive Baby, Dive',
        songId: null,
      },
      {
        title: 'Sins',
        songId: null,
      },
      {
        title: 'Sometimes You Gotta Shake It Off',
        songId: null,
      },
      {
        title: 'Blush (feat. sokodomo)',
        songId: null,
      },
      {
        title: 'Bliss',
        songId: null,
      },
      {
        title: 'Raving',
        songId: null,
      },
      {
        title: 'Long Strange Days Pt.2',
        songId: null,
      },
      {
        title: 'Runaway',
        songId: null,
      },
      {
        title: '4ever',
        songId: new ObjectId(),
      },
      {
        title: "I Feel Like Ridin' Slow",
        songId: null,
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
  releasedDate: '2011.02.11',
  songs: [
    [
      {
        title: 'Addicted',
        songId: null,
      },
      {
        title: 'Disco Elevator',
        songId: null,
      },
      {
        title: 'Metro',
        songId: null,
      },
      {
        title: 'Dressing Room (Demo)',
        songId: null,
      },
      {
        title: 'Dressing Room (Acoustic)',
        songId: null,
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
  releasedDate: '2011.03.21',
  songs: [
    [
      {
        title: 'Addicted (Re: ver.)',
        songId: null,
      },
      {
        title: 'Disco Elevator (Re: ver.)',
        songId: null,
      },
      {
        title: 'Metro (Re: ver.)',
        songId: null,
      },
      {
        title: 'Dressing Room (Re: ver.)',
        songId: null,
      },
      {
        title: 'Dressing Room (Acoustic) (Re: ver.)',
        songId: null,
      },
      {
        title: 'Metro (Acoustic)',
        songId: null,
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
  releasedDate: '2012.09.28',
  songs: [
    [
      {
        title: 'Blood, Sweat & The Beat',
        songId: null,
      },
      {
        title: "'84",
        songId: null,
      },
      {
        title: 'Leather',
        songId: null,
      },
      {
        title: 'Want You Back',
        songId: null,
      },
      {
        title: "'84 The Original",
        songId: null,
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
  releasedDate: '2017.08.13',
  songs: [
    [
      {
        title: 'Dreaming Kills',
        songId: null,
      },
      {
        title: 'Follow The White Rabbit (CD ONLY)',
        songId: null,
      },
      {
        title: 'Long Strange Days Pt.1',
        songId: null,
      },
      {
        title: 'Mayhem',
        songId: null,
      },
      {
        title: 'Rude & Confused',
        songId: null,
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
  releasedDate: '2011.09.29',
  songs: [
    [
      {
        title: 'Au Revoir',
        songId: null,
      },
      {
        title: "60's Cardin",
        songId: null,
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
  releasedDate: '2018.08.03',
  songs: [
    [
      {
        title: 'Velvet Goldmine',
        songId: null,
      },
    ],
  ],
};

const sortWithReleasedDate = (arr: TAlbum[]) => {
  const sorted = arr.sort((a, b) => {
    if (a.releasedDate < b.releasedDate) {
      return -1;
    }
    if (a.releasedDate > b.releasedDate) {
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
  sortWithReleasedDate,
  StudioOne,
  StudioThree,
  StudioTwo,
};

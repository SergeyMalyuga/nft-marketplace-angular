import {TrendCard} from '../models/trend-card.model';
import {CreatorCard} from '../models/creator-card';

export enum AppRoute {
  MAIN = ''
}

export const TREND_CARDS: TrendCard[] = [
  {
    id: '1',
    previewImage: {
      url: '/assets/images/raster/trend-card-primary-dog.png',
      width: 330,
      height: 330,
      alt: 'Dog'
    },
    images: [
      {
        url: '/assets/images/raster/trend-card-cat.png',
        width: 100,
        height: 100,
        alt: 'Cat'
      },
      {
        url: '/assets/images/raster/trend-card-bear.png',
        width: 100,
        height: 100,
        alt: 'Bear'
      }
    ],
    title: 'DSGN Animals',
    owner: {
      avatar: {
        url: '/assets/images/raster/trend-card-avatar-1.png',
        width: 24,
        height: 24,
        alt: 'MrFox'
      },
      name: 'MrFox'
    }
  },

  {
    id: '2',
    previewImage: {
      url: '/assets/images/raster/trend-card-primary-mushrooms.png',
      width: 330,
      height: 330,
      alt: 'Mushrooms'
    },
    images: [
      {
        url: '/assets/images/raster/trend-card-mushrooms-1.png',
        width: 100,
        height: 100,
        alt: 'Mushrooms red'
      },
      {
        url: '/assets/images/raster/trend-card-mushrooms-2.png',
        width: 100,
        height: 100,
        alt: 'Mushrooms blue'
      }
    ],
    title: 'Magic Mushrooms',
    owner: {
      avatar: {
        url: '/assets/images/raster/trend-card-avatar-2.png',
        width: 24,
        height: 24,
        alt: 'Shroomie'
      },
      name: 'Shroomie'
    }
  },

  {
    id: '3',
    previewImage: {
      url: '/assets/images/raster/trend-card-primary-robot.png',
      width: 330,
      height: 330,
      alt: 'Robot'
    },
    images: [
      {
        url: '/assets/images/raster/trend-card-robot-1.png',
        width: 100,
        height: 100,
        alt: 'Robot red'
      },
      {
        url: '/assets/images/raster/trend-card-robot-2.png',
        width: 100,
        height: 100,
        alt: 'Robot blue'
      }
    ],
    title: 'Disco Machines',
    owner: {
      avatar: {
        url: '/assets/images/raster/trend-card-avatar-3.png',
        width: 24,
        height: 24,
        alt: 'BeKind2Robots'
      },
      name: 'BeKind2Robots'
    }
  }
]

export const CREATOR_CARDS: CreatorCard[] = [
  {
    id: '1',
    rank: 1,
    image: {
      url: '/assets/images/vector/keepitreal.svg',
      width: 120,
      height: 120,
      alt: 'Keepitreal'
    },
    name: 'Keepitreal',
    totalSales: 34.53,
    href: '#'
  },

  {
    id: '2',
    rank: 2,
    image: {
      url: '/assets/images/vector/digi-lab.svg',
      width: 120,
      height: 120,
      alt: 'DigiLab'
    },
    name: 'DigiLab',
    totalSales: 34.53,
    href: '#'
  },

  {
    id: '3',
    rank: 3,
    image: {
      url: '/assets/images/vector/gravity-one.svg',
      width: 120,
      height: 120,
      alt: 'GravityOne'
    },
    name: 'GravityOne',
    totalSales: 34.53,
    href: '#'
  },

  {
    id: '4',
    rank: 4,
    image: {
      url: '/assets/images/vector/juanie.svg',
      width: 120,
      height: 120,
      alt: 'Juanie'
    },
    name: 'Juanie',
    totalSales: 34.53,
    href: '#'
  },

  {
    id: '5',
    rank: 5,
    image: {
      url: '/assets/images/vector/blue-whale.svg',
      width: 120,
      height: 120,
      alt: 'BlueWhale'
    },
    name: 'BlueWhale',
    totalSales: 34.53,
    href: '#'
  },

  {
    id: '6',
    rank: 6,
    image: {
      url: '/assets/images/vector/mr-fox.svg',
      width: 120,
      height: 120,
      alt: 'Mr Fox'
    },
    name: 'Mr Fox',
    totalSales: 34.53,
    href: '#'
  },

  {
    id: '7',
    rank: 7,
    image: {
      url: '/assets/images/vector/shroomie.svg',
      width: 120,
      height: 120,
      alt: 'Shroomie'
    },
    name: 'Shroomie',
    totalSales: 34.53,
    href: '#'
  },

  {
    id: '8',
    rank: 8,
    image: {
      url: '/assets/images/vector/robotica.svg',
      width: 120,
      height: 120,
      alt: 'Robotica'
    },
    name: 'Robotica',
    totalSales: 34.53,
    href: '#'
  },

  {
    id: '9',
    rank: 9,
    image: {
      url: '/assets/images/vector/rusty-robot.svg',
      width: 120,
      height: 120,
      alt: 'RustyRobot'
    },
    name: 'RustyRobot',
    totalSales: 34.53,
    href: '#'
  },

  {
    id: '10',
    rank: 10,
    image: {
      url: '/assets/images/vector/animakid.svg',
      width: 120,
      height: 120,
      alt: 'Animakid'
    },
    name: 'Animakid',
    totalSales: 34.53,
    href: '#'
  },

  {
    id: '11',
    rank: 11,
    image: {
      url: '/assets/images/vector/dotgu.svg',
      width: 120,
      height: 120,
      alt: 'Dotgu'
    },
    name: 'Dotgu',
    totalSales: 34.53,
    href: '#'
  },

  {
    id: '12',
    rank: 12,
    image: {
      url: '/assets/images/vector/ghiblier.svg',
      width: 120,
      height: 120,
      alt: 'Ghiblier'
    },
    name: 'Ghiblier',
    totalSales: 34.53,
    href: '#'
  },
]

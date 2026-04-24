import {TrendCard} from '../models/trend-card.model';

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

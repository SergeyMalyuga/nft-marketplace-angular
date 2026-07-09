import {RankingRow} from '../../../core/models/ranking-row.model';
import {nanoid} from 'nanoid';

export const MOCK_RANKING_DATA: RankingRow[] = [
  {
    id: nanoid(),
    rank: 1,
    image: '/assets/images/vector/creator-avatar-1-desktop.svg',
    name: 'Jaydon Ekstrom',
    change: 1.41,
    sold: 602,
    volume: 12.4
  },
  {
    id: nanoid(),
    rank: 2,
    image: '/assets/images/vector/creator-avatar-2-desktop.svg',
    name: 'Ruben Carder',
    change: 1.41,
    sold: 602,
    volume: 12.4
  },
  {
    id: nanoid(),
    rank: 3,
    image: '/assets/images/vector/creator-avatar-3-desktop.svg',
    name: 'Alfredo Septimus',
    change: 1.41,
    sold: 602,
    volume: 12.4
  },
  {
    id: nanoid(),
    rank: 5,
    image: '/assets/images/vector/creator-avatar-5-desktop.svg',
    name: 'Davis Franci',
    change: 1.41,
    sold: 602,
    volume: 12.4
  },
  {
    id: nanoid(),
    rank: 6,
    image: '/assets/images/vector/creator-avatar-6-desktop.svg',
    name: 'Livia Rosser',
    change: 1.41,
    sold: 602,
    volume: 12.4
  },
  {
    id: nanoid(),
    rank: 7,
    image: '/assets/images/vector/creator-avatar-7-desktop.svg',
    name: 'Kianna Donin',
    change: 1.41,
    sold: 602,
    volume: 12.4
  },
  {
    id: nanoid(),
    rank: 8,
    image: '/assets/images/vector/creator-avatar-8-desktop.svg',
    name: 'Maria Rosser',
    change: 1.41,
    sold: 602,
    volume: 12.4
  },
  {
    id: nanoid(),
    rank: 9,
    image: '/assets/images/vector/creator-avatar-9-desktop.svg',
    name: 'Kianna Stanton',
    change: 1.41,
    sold: 602,
    volume: 12.4
  },
  {
    id: nanoid(),
    rank: 10,
    image: '/assets/images/vector/creator-avatar-10-desktop.svg',
    name: 'Angel Lubin',
    change: 1.41,
    sold: 602,
    volume: 12.4
  },
];

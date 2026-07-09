import {Image} from './image.model';
import {Avatar} from './avatar.model';

export interface RankingRow {
  id: string;
  rank: number;
  image: string;
  name: string;
  change: number;
  sold: number;
  volume: number;
}

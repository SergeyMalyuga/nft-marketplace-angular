import { Image } from './image.model';

export interface CreatorCard {
  id: string;
  rank: number;
  image: Image;
  name: string;
  totalSales: number;
  href: string;
}

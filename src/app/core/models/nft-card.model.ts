import {Image} from './image.model';
import {Owner} from './owner.model';

export interface NftCard {
  id: string;
  href: string;
  image: Image;
  title: string;
  owner: Owner;
  price: number;
  highestBid: number;
}
